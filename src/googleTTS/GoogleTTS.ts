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

    public async getTts(text: GoogleTTSRequest): Promise<string> {
        const hex = text.hash();
        const file0 = text.filename();
        const file = await this.cacheDir.getCacheFile(hex, file0);
        try {
            await fs.promises.stat(file);
        } catch (e) {
            // get audio URL
            const url = googleTTS.getAudioUrl(text.text, {
                lang: text.lang,
                slow: text.slow,
                host: 'https://translate.google.com',
            });
            const resp = await got.get(url, { encoding: 'binary' });
            await fs.promises.writeFile(file, resp.rawBody);
        }
        return file;
    }
}
