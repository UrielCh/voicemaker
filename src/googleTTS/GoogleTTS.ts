import fs from 'fs';
import * as googleTTS from 'google-tts-api'; // ES6 or TypeScript
import os from 'os';
import path from 'path';
// import got from 'got';
import axios from 'axios';
import { GoogleTTSRequest } from './GoogleTTSRequest';
import { CommonTTS } from '../common/commonTTS';

export class GoogleTTS extends CommonTTS<GoogleTTSRequest> {

    constructor(cacheDir?: string) {
        super(cacheDir || path.join(os.homedir(), '.tts', 'google'))
    }

    public getToken(): Promise<string> {
        return Promise.resolve('');
    }

    public async getTts(request: GoogleTTSRequest): Promise<string> {
        const { file, exists } = await this.cacheDir.getRequestCache(request);
        if (!exists) {
            const url = googleTTS.getAudioUrl(request.text, {
                lang: request.lang,
                slow: request.slow,
                host: 'https://translate.google.com',
            });
            const resp = await axios.get<Buffer>(url, { responseType: 'arraybuffer' });
            await fs.promises.writeFile(file, resp.data);
            await super.log(request);
        }
        return file;
    }

    getRequest(text: string): GoogleTTSRequest {
        return new GoogleTTSRequest(text);
    }
}
