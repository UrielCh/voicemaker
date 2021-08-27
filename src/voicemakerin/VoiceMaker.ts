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
        const VOICEMAKER_IN_TOKEN = process.env.VOICEMAKER_IN_TOKEN;
        if (!VOICEMAKER_IN_TOKEN) {
            throw Error(`Missing VOICEMAKER_IN_TOKEN environement variable, send an E-Mail to support@voicemaker.in to get one`);
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