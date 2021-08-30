import path from 'path';
import os from 'os';
import fs from 'fs';
import got from 'got';
import { VoiceMakerRequest } from './VoiceMakerRequest';
import { CommonTTS } from '../common/commonTTS';

interface VoiceMakerResponse {
    success: boolean,
    path: string;
}

export class VoiceMaker extends CommonTTS<VoiceMakerRequest> {
    constructor(cacheDir?: string) {
        super(cacheDir || path.join(os.homedir(), '.tts', 'voiceMaker'))
    }

    /**
     * return a local path to your speech
     */
    public async getTts(request: VoiceMakerRequest): Promise<string> {
        const file = await this.cacheDir.getCacheFile(request.hash(), request.filename());
        try {
            await fs.promises.stat(file);
            return file;
        } catch (e) {
            // create new one
        }
        let VOICEMAKER_IN_TOKEN = process.env.VOICEMAKER_IN_TOKEN;
        if (!VOICEMAKER_IN_TOKEN) {
            const key = await this.cacheDir.getKey();
            if (key) {
                const data = await fs.promises.readFile(key, {encoding: 'utf-8'});
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
        try {
            const resp = await got.post('https://developer.voicemaker.in/voice/api', { 
                headers: {
                    'user-agent': `VoiceMaker (https://github.com/UrielCh/voicemaker)`,
                    Authorization: `Bearer ${VOICEMAKER_IN_TOKEN}`,
                    'Content-Type': 'application/json',
                 },
                body: JSON.stringify(request.toRequest()),
            });
            const body: VoiceMakerResponse = JSON.parse(resp.body);
            if (!body.path) {
                throw Error('Access VoiceMaker failed with response ' + JSON.stringify(resp.rawBody));
            }
            const speech = await got.get(body.path, {
                headers: {
                    'user-agent': `VoiceMaker (https://github.com/UrielCh/voicemaker)`,
                },
                encoding: 'binary',
            });
            await fs.promises.writeFile(file, speech.rawBody);
            await super.log(request);
        } catch (e) {
            console.error('Failed to generarte voice');
            console.error(e);
            throw (e);
        }
        return file;
    }
}

export default VoiceMaker;