// https://texttospeech.googleapis.com/$discovery/rest?version=v1
// endpoint: https://texttospeech.googleapis.com
// list voices: 	GET /v1/voices
// build speech POST /v1/text:synthesize
// https://texttospeech.googleapis.com/v1/voices

import * as textToSpeech from '@google-cloud/text-to-speech';

import path from 'path';
import os from 'os';
import fs from 'fs';
import { CommonTTS } from '../common/commonTTS';
import { GoogleTTS2Request } from './GoogleTTS2Request';
import { GoogleVoices } from './GoogleTTS2Voices';

export class GoogleTTS2 extends CommonTTS<GoogleTTS2Request> {
    client = new textToSpeech.TextToSpeechClient();

    constructor(cacheDir?: string) {
        super(cacheDir || path.join(os.homedir(), '.tts', 'googlecloud'))
    }

    /**
     * return a local path to your speech
     */
    public async getTts(request: GoogleTTS2Request): Promise<string> {
        const file = await this.cacheDir.getCacheFile(request.hash(), request.filename());
        try {
            await fs.promises.stat(file);
            return file;
        } catch (e) {
            // create new one
        }

        let GOOGLE_APPLICATION_CREDENTIALS = process.env.GOOGLE_APPLICATION_CREDENTIALS;
        if (!GOOGLE_APPLICATION_CREDENTIALS) {
            const key = await this.cacheDir.getKey();
            if (key) {
                process.env.GOOGLE_APPLICATION_CREDENTIALS = key;
                GOOGLE_APPLICATION_CREDENTIALS = key
            }
        }

        if (!GOOGLE_APPLICATION_CREDENTIALS) {
            throw Error(`Missing GOOGLE_APPLICATION_CREDENTIALS environement variable, or key in ~/.tts/googlecloud/key.json`);
        }
        try {
            const [responce, error] = await this.client.synthesizeSpeech(request.toRequest());

            let data = responce.audioContent;
            // [protos.google.cloud.texttospeech.v1.ISynthesizeSpeechResponse, protos.google.cloud.texttospeech.v1.ISynthesizeSpeechRequest | undefined, {} | undefined]

            if (!data) {
                throw Error('Access VoiceMaker failed with response ' + JSON.stringify(error));
            }
            await fs.promises.writeFile(file, data);
            await super.log(request);
        } catch (e) {
            console.error('Failed to generarte voice');
            console.error(e);
            throw (e);
        }
        return file;
    }

    getRequest(text: string, voice?: string): GoogleTTS2Request {
        return new GoogleTTS2Request(text, voice as GoogleVoices);
    }
}

export default GoogleTTS2;