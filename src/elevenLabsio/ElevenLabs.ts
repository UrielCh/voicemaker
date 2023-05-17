import path from 'path';
import { homedir } from 'os';
import fs from 'fs';
import axios, { AxiosResponse } from 'axios';
import { ElevenLabsRequest, ElevenLabsRequestModel, ElevenLabsRequestPublic, ElevenLabsRequestPublicBody, ElevenLabsRequestVoice } from './ElevenLabsRequest';
import { CommonTTS } from '../common/commonTTS';
import pc from 'picocolors';

export class ElevenLabs extends CommonTTS<ElevenLabsRequest> {
    constructor(cacheDir?: string) {
        super(cacheDir || path.join(homedir(), '.tts', 'elevenlabs'))
    }

    private async getToken(): Promise<string> {
        let ELEVENLABS_IO_TOKEN = process.env.ELEVENLABS_IO_TOKEN;
        if (!ELEVENLABS_IO_TOKEN) {
            const key = await this.cacheDir.getKey();
            if (key) {
                const data = await fs.promises.readFile(key, { encoding: 'utf-8' });
                const m = data.match(/[0-9a-fA-F]{32}/);
                if (m) {
                    process.env.ELEVENLABS_IO_TOKEN = m[0];
                    ELEVENLABS_IO_TOKEN = m[0];
                } else {
                    console.log(`${key} exists but do not contains any Token`);
                }
            }
        }
        if (!ELEVENLABS_IO_TOKEN) {
            throw Error(`Missing ELEVENLABS_IO_TOKEN environement variable, or token in ~/.tts/elevenlab/key.json file, log on https://beta.elevenlabs.io/ and go to Profile Settings to get one`);
        }
        return ELEVENLABS_IO_TOKEN;
    }

    /**
     * return a local path to your speech
     */
    public async getTts(request: ElevenLabsRequest): Promise<string> {
        const { file, exists } = await this.cacheDir.getCacheFile(request.hash(), request.filename());
        if (exists)
            return file;
        const ELEVENLABS_IO_TOKEN = await this.getToken();
        const reqData: ElevenLabsRequestPublic = request.toRequest();
        const API_URL = `https://api.elevenlabs.io/v1/text-to-speech/${reqData.voiceId}?optimize_streaming_latency=${reqData.optimize_streaming_latency}`;
        const headers = {
            'user-agent': this.userAgent,
            "xi-api-key": ELEVENLABS_IO_TOKEN,
            'Content-Type': 'application/json',
        };

        try {
            const start = Date.now();
            /* Axios implementaion */
            const speech = await axios.post<ElevenLabsRequestPublicBody, AxiosResponse<Buffer>>(API_URL, reqData.body, {responseType: 'arraybuffer', headers });
            console.log(`New GoogleTTS speech generated in ${pc.yellow(Date.now() - start)} ms, size: ${pc.yellow((speech.data.length / 1024).toFixed(1))} KB`);
            await fs.promises.writeFile(file, speech.data);
            await super.log(request);
        } catch (e) {
            // console.error('Failed to generarte voice');
            // console.error(e);
            throw (e);
        }
        return file;
    }

    getRequest(text: string, voiceId: string): ElevenLabsRequest {
        return new ElevenLabsRequest(text, voiceId);
    }

    async getModel(): Promise<ElevenLabsRequestModel[]> {
        const ELEVENLABS_IO_TOKEN = await this.getToken();
        const API_URL = 'https://api.elevenlabs.io/v1/models';
        const headers = {
            'user-agent': this.userAgent,
            "xi-api-key": ELEVENLABS_IO_TOKEN,
            'Content-Type': 'application/json',
        };
        try {
            /* Axios implementaion */
            const resp = await axios.get<never, AxiosResponse<ElevenLabsRequestModel[]>>(API_URL, { responseType: 'json', headers });
            const body: ElevenLabsRequestModel[] = resp.data;
            return body;
        } catch (e) {
            // console.error('Failed to generarte voice');
            // console.error(e);
            throw (e);
        }
    }

    async getModels(): Promise<ElevenLabsRequestModel[]> {
        const ELEVENLABS_IO_TOKEN = await this.getToken();
        const API_URL = 'https://api.elevenlabs.io/v1/models';
        const headers = {
            'user-agent': this.userAgent,
            "xi-api-key": ELEVENLABS_IO_TOKEN,
            'Content-Type': 'application/json',
        };
        try {
            /* Axios implementaion */
            const resp = await axios.get<never, AxiosResponse<ElevenLabsRequestModel[]>>(API_URL, { responseType: 'json', headers });
            const body: ElevenLabsRequestModel[] = resp.data;
            return body;
        } catch (e) {
            throw (e);
        }
    }

    async getVoices(): Promise<ElevenLabsRequestVoice[]> {
        const ELEVENLABS_IO_TOKEN = await this.getToken();
        const API_URL = 'https://api.elevenlabs.io/v1/voices';
        const headers = {
            'user-agent': this.userAgent,
            "xi-api-key": ELEVENLABS_IO_TOKEN,
            'Content-Type': 'application/json',
        };
        try {
            /* Axios implementaion */
            const resp = await axios.get<never, AxiosResponse<{voices: ElevenLabsRequestVoice[]}>>(API_URL, { responseType: 'json', headers });
            const body: ElevenLabsRequestVoice[] = resp.data.voices;
            return body;
        } catch (e) {
            throw (e);
        }
    }

}

export default ElevenLabs;