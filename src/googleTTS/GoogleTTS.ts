import fs from 'fs';
import * as googleTTS from 'google-tts-api'; // ES6 or TypeScript
import os from 'os';
import path from 'path';
// import got from 'got';
import axios from 'axios';
import { GoogleTTSRequest } from './GoogleTTSRequest';
import { CommonTTS } from '../common/commonTTS';
import pc from 'picocolors';

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
            const start = Date.now();
            const url = googleTTS.getAudioUrl(request.text, {
                lang: request.lang,
                slow: request.slow,
                host: 'https://translate.google.com',
            });
            // const resp = await got.get(url, { encoding: 'binary' });
            // await fs.promises.writeFile(file, resp.rawBody);
            const resp = await axios.get<Buffer>(url, { responseType: 'arraybuffer' });
            console.log(`New GoogleTTS speech generated in ${pc.yellow(Date.now() - start)} ms, size: ${pc.yellow((resp.data.length / 1024).toFixed(1))} KB`);
            await fs.promises.writeFile(file, resp.data);
            await super.log(request);
        }
        return file;
    }

    getRequest(text: string): GoogleTTSRequest {
        return new GoogleTTSRequest(text);
    }
}
