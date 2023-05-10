import path from 'path';
import { homedir } from 'os';
import fs from 'fs';
import axios, { AxiosResponse } from 'axios';
import { ElevenLabRequest, ElevenLabRequestModel, ElevenLabRequestPublic, ElevenLabRequestPublicBody, ElevenLabRequestVoice } from './ElevenLabRequest';
import { CommonTTS } from '../common/commonTTS';

export class ElevenLab extends CommonTTS<ElevenLabRequest> {
    constructor(cacheDir?: string) {
        super(cacheDir || path.join(homedir(), '.tts', 'elevenlab'))
    }

    private async getToken(): Promise<string> {
        let ELEVENLAB_IO_TOKEN = process.env.ELEVENLAB_IO_TOKEN;
        if (!ELEVENLAB_IO_TOKEN) {
            const key = await this.cacheDir.getKey();
            if (key) {
                const data = await fs.promises.readFile(key, { encoding: 'utf-8' });
                const m = data.match(/[0-9a-fA-F]{32}/);
                if (m) {
                    process.env.ELEVENLAB_IO_TOKEN = m[0];
                    ELEVENLAB_IO_TOKEN = m[0];
                } else {
                    console.log(`${key} exists but do not contains any Token`);
                }
            }
        }
        if (!ELEVENLAB_IO_TOKEN) {
            throw Error(`Missing ELEVENLAB_IO_TOKEN environement variable, or token in ~/.tts/elevenlab/key.json file, log on https://beta.elevenlabs.io/ and go to Profile Settings to get one`);
        }
        return ELEVENLAB_IO_TOKEN;
    }

    /**
     * return a local path to your speech
     */
    public async getTts(request: ElevenLabRequest): Promise<string> {
        const { file, exists } = await this.cacheDir.getCacheFile(request.hash(), request.filename());
        if (exists)
            return file;
        const ELEVENLAB_IO_TOKEN = await this.getToken();
        const reqData: ElevenLabRequestPublic = request.toRequest();
        const API_URL = `https://api.elevenlabs.io/v1/text-to-speech/${reqData.voiceId}?optimize_streaming_latency=${reqData.optimize_streaming_latency}`;
        const headers = {
            'user-agent': this.userAgent,
            "xi-api-key": ELEVENLAB_IO_TOKEN,
            'Content-Type': 'application/json',
        };

        try {
            /* Axios implementaion */
            const speech = await axios.post<ElevenLabRequestPublicBody, AxiosResponse<Buffer>>(API_URL, reqData.body, {responseType: 'arraybuffer', headers });
            await fs.promises.writeFile(file, speech.data);

            await super.log(request);
        } catch (e) {
            // console.error('Failed to generarte voice');
            // console.error(e);
            throw (e);
        }
        return file;
    }

    getRequest(text: string, voiceId: string): ElevenLabRequest {
        return new ElevenLabRequest(text, voiceId);
    }

    async getModel(): Promise<ElevenLabRequestModel[]> {
        const ELEVENLAB_IO_TOKEN = await this.getToken();
        const API_URL = 'https://api.elevenlabs.io/v1/models';
        const headers = {
            'user-agent': this.userAgent,
            "xi-api-key": ELEVENLAB_IO_TOKEN,
            'Content-Type': 'application/json',
        };
        try {
            /* Axios implementaion */
            const resp = await axios.get<never, AxiosResponse<ElevenLabRequestModel[]>>(API_URL, { responseType: 'json', headers });
            const body: ElevenLabRequestModel[] = resp.data;
            return body;
        } catch (e) {
            // console.error('Failed to generarte voice');
            // console.error(e);
            throw (e);
        }
    }

    async getModels(): Promise<ElevenLabRequestModel[]> {
        const ELEVENLAB_IO_TOKEN = await this.getToken();
        const API_URL = 'https://api.elevenlabs.io/v1/models';
        const headers = {
            'user-agent': this.userAgent,
            "xi-api-key": ELEVENLAB_IO_TOKEN,
            'Content-Type': 'application/json',
        };
        try {
            /* Axios implementaion */
            const resp = await axios.get<never, AxiosResponse<ElevenLabRequestModel[]>>(API_URL, { responseType: 'json', headers });
            const body: ElevenLabRequestModel[] = resp.data;
            return body;
        } catch (e) {
            throw (e);
        }
    }

    async getVoices(): Promise<ElevenLabRequestVoice[]> {
        const ELEVENLAB_IO_TOKEN = await this.getToken();
        const API_URL = 'https://api.elevenlabs.io/v1/voices';
        const headers = {
            'user-agent': this.userAgent,
            "xi-api-key": ELEVENLAB_IO_TOKEN,
            'Content-Type': 'application/json',
        };
        try {
            /* Axios implementaion */
            const resp = await axios.get<never, AxiosResponse<{voices: ElevenLabRequestVoice[]}>>(API_URL, { responseType: 'json', headers });
            const body: ElevenLabRequestVoice[] = resp.data.voices;
            return body;
        } catch (e) {
            throw (e);
        }
    }

}

export default ElevenLab;