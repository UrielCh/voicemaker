import * as googleTTS from 'google-tts-api'; // ES6 or TypeScript
import os from 'node:os';
import path from 'node:path';
import axios from 'axios';
import { GoogleTTSRequest } from './GoogleTTSRequest.ts';
import { CommonTTS } from '../common/commonTTS.ts';
import { createWriteStream, createReadStream, promises as fs } from 'node:fs';
import { PassThrough, pipeline } from 'node:stream';
import { promisify } from 'node:util';
import { Buffer } from "https://deno.land/std@0.177.0/node/buffer.ts";

const pipelineAsync = promisify(pipeline);

const host = 'https://translate.google.com';

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
            const {lang, slow } = request;
            const url = googleTTS.getAudioUrl(request.text, { lang, slow, host });
            const resp = await axios.get<Buffer>(url, { responseType: 'arraybuffer' });
            await fs.writeFile(file, resp.data);
            await super.log(request);
        }
        return file;
    }
    /**
     * you need to add a listener to the 'data' event to resume the stream.
     */
    public async stream(request: GoogleTTSRequest): Promise<NodeJS.ReadableStream> {
        const { file, exists } = await this.cacheDir.getRequestCache(request);
        if (exists)
            return createReadStream(file);
        const {lang, slow } = request;
        const url = googleTTS.getAudioUrl(request.text, { lang, slow, host });
        const response = await axios.get<NodeJS.ReadableStream>(url, { responseType: 'stream' });
        // Create a PassThrough stream to send data to the caller while simultaneously writing to disk.
        const passThrough = new PassThrough();
        response.data.pipe(passThrough);
        const tempFile = file + '.tmp';
        const writeStream = createWriteStream(tempFile);
        pipeline(response.data, writeStream, (err) => {
            if (err) {
                console.error('Failed to save file', err);
                fs.unlink(tempFile).catch(console.error);  // If an error occurred, try to delete the temp file.
            } else {
                fs.rename(tempFile, file).catch(console.error);
                super.log(request).catch(console.error);
            }
        });
        return passThrough;  // Returns the PassThrough stream that is being fed by the HTTP response.
    }

    getRequest(text: string): GoogleTTSRequest {
        return new GoogleTTSRequest(text);
    }
}
