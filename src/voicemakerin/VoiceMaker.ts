import path from 'path';
import { homedir } from 'os';
import fs from 'fs';
import axios, { AxiosResponse } from 'axios';
import { VoiceMakerRequest, VoiceMakerRequestPublic } from './VoiceMakerRequest';
import { CommonTTS } from '../common/commonTTS';
import pc from 'picocolors';

interface VoiceMakerResponse {
    success: boolean,
    path: string;
}

export class VoiceMaker extends CommonTTS<VoiceMakerRequest> {
    constructor(cacheDir?: string) {
        super(cacheDir || path.join(homedir(), '.tts', 'voiceMaker'))
    }

    private async getToken(): Promise<string> {
        let VOICEMAKER_IN_TOKEN = process.env.VOICEMAKER_IN_TOKEN;
        if (!VOICEMAKER_IN_TOKEN) {
            const key = await this.cacheDir.getKey();
            if (key) {
                const data = await fs.promises.readFile(key, { encoding: 'utf-8' });
                const m = data.match(/[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}/);
                if (m) {
                    process.env.VOICEMAKER_IN_TOKEN = m[0];
                    VOICEMAKER_IN_TOKEN = m[0];
                } else {
                    console.log(`${key} exists but do not contains any Token`);
                }
            }
        }
        if (!VOICEMAKER_IN_TOKEN) {
            throw Error(`Missing VOICEMAKER_IN_TOKEN environement variable, or token in ~/.tts/voiceMaker/key.json file, send an E-Mail to support@voicemaker.in to get one`);
        }
        return VOICEMAKER_IN_TOKEN;
    }

    /**
     * return a local path to your speech
     */
    public async getTts(request: VoiceMakerRequest): Promise<string> {
        const { file, exists } = await this.cacheDir.getCacheFile(request.hash(), request.filename());
        if (exists)
            return file;
        const VOICEMAKER_IN_TOKEN = await this.getToken();
        const reqData: VoiceMakerRequestPublic = request.toRequest();
        const API_URL = 'https://developer.voicemaker.in/voice/api';
        const headers = {
            'user-agent': this.userAgent,
            Authorization: `Bearer ${VOICEMAKER_IN_TOKEN}`,
            'Content-Type': 'application/json',
        };
        const headersLt = {
            'user-agent': this.userAgent,
        };

        try {
            const start = Date.now();
            /* Axios implementaion */
            const resp = await axios.post<VoiceMakerRequestPublic, AxiosResponse<VoiceMakerResponse>>(API_URL, reqData, { responseType: 'json', headers });
            const body: VoiceMakerResponse = resp.data;
            if (!body.path) throw Error(`Access VoiceMaker failed with response ${JSON.stringify(resp.data)}`);
            const speech = await axios.get<never, AxiosResponse<Buffer>>(body.path, { headers: headersLt, responseType: 'arraybuffer' });
            console.log(`New VoiceMaker speech generated in ${pc.yellow(Date.now() - start)} ms, size: ${pc.yellow((speech.data.length / 1024).toFixed(1))} KB`);
            await fs.promises.writeFile(file, speech.data);

            /* Got implementaion */
            // const resp = await got.post(API_URL, { headers, body: JSON.stringify(request.toRequest()) });
            // const body: VoiceMakerResponse = JSON.parse(resp.body);
            // if (!body.path) throw Error(`Access VoiceMaker failed with response ${JSON.stringify(resp.rawBody)}`);
            // const speech = await got.get(body.path, { headers: headersLt, encoding: 'binary' });
            // await fs.promises.writeFile(file, speech.rawBody);

            await super.log(request);
        } catch (e) {
            // console.error('Failed to generarte voice');
            // console.error(e);
            throw (e);
        }
        return file;
    }

    getRequest(text: string, voice?: string): VoiceMakerRequest {
        return new VoiceMakerRequest(text, voice);
    }
}

export default VoiceMaker;