import fs from 'fs';
import * as googleTTS from 'google-tts-api'; // ES6 or TypeScript
import os from 'os';
import path from 'path';
import got from 'got';
import { GoogleTTSRequest } from './GoogleTTSRequest';
import { CommonTTS } from '../common/commonTTS';

export class GoogleTTS extends CommonTTS<GoogleTTSRequest> {

    constructor(cacheDir?: string) {
        super(cacheDir || path.join(os.homedir(), '.tts', 'google'))
    }

    public async getTts(request: GoogleTTSRequest): Promise<string> {
        const hex = request.hash();
        const file0 = request.filename();
        const { file, exists } = await this.cacheDir.getCacheFile(hex, file0);
        if (!exists) {
            // get audio URL
            const url = googleTTS.getAudioUrl(request.text, {
                lang: request.lang,
                slow: request.slow,
                host: 'https://translate.google.com',
            });
            const resp = await got.get(url, { encoding: 'binary' });
            await fs.promises.writeFile(file, resp.rawBody);
            await super.log(request);
        }
        return file;
    }

    getRequest(text: string): GoogleTTSRequest {
        return new GoogleTTSRequest(text);
    }
}
