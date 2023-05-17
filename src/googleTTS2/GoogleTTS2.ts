// https://texttospeech.googleapis.com/$discovery/rest?version=v1
// endpoint: https://texttospeech.googleapis.com
// list voices: 	GET /v1/voices
// build speech POST /v1/text:synthesize
// https://texttospeech.googleapis.com/v1/voices

import * as textToSpeech from '@google-cloud/text-to-speech';

import path from 'path';
import { homedir } from 'os';
import fs from 'fs';
import { CommonTTS } from '../common/commonTTS';
import { GoogleTTS2Request } from './GoogleTTS2Request';
import { GoogleVoices } from './GoogleTTS2Voices';

export interface GoogleToken {
    "type": "service_account",
    "project_id": string, // prj name
    "private_key_id": string, // hexa key
    "private_key": string, // BEGIN PRIVATE KEY blob as string
    "client_email": string, // email address
    "client_id": string, // big number in base 10
    "auth_uri": string, // url "https://accounts.google.com/o/oauth2/auth",
    "token_uri": string, // url "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": string, // "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": string, // iam url
}

export class GoogleTTS2 extends CommonTTS<GoogleTTS2Request> {
    client = new textToSpeech.TextToSpeechClient();

    constructor(cacheDir?: string) {
        super(cacheDir || path.join(homedir(), '.tts', 'googlecloud'))
    }

    public async getToken(): Promise<string> {
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
        return GOOGLE_APPLICATION_CREDENTIALS;
    }

    /**
     * return a local path to your speech
     */
    public async getTts(request: GoogleTTS2Request): Promise<string> {
        const {file, exists} = await this.cacheDir.getCacheFile(request.hash(), request.filename());
        if (exists)
            return file;
        const tokenFile = await this.getToken();

        try {
            const [responce, error] = await this.client.synthesizeSpeech(request.toRequest());
            let data = responce.audioContent;
            if (!data) {
                throw Error('Access VoiceMaker failed with response ' + JSON.stringify(error));
            }
            await fs.promises.writeFile(file, data);
            await super.log(request);
        } catch (e) {
            // console.error('Failed to generarte voice');
            // console.error(e);
            throw (e);
        }
        return file;
    }

    getRequest(text: string, voice?: string): GoogleTTS2Request {
        return new GoogleTTS2Request(text, voice as GoogleVoices);
    }
}

export default GoogleTTS2;