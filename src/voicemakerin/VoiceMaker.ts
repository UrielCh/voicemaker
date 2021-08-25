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
    public async getTts(text: VoiceMakerRequest): Promise<string> {
        const file = await this.cacheDir.getCacheFile(text.hash(), text.filename());
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
            const resp = await got.post('https://developer.voicemaker.in/voice/api', { headers: { Authorization: `Bearer ${VOICEMAKER_IN_TOKEN}`, 'Content-Type': 'application/json' }, body: JSON.stringify(text) });
            const body: VoiceMakerResponse = JSON.parse(resp.body);
            if (!body.path) {
                throw Error('Access VoiceMaker failed with response ' + JSON.stringify(resp.rawBody));
            }
            const speech = await got.get(body.path, { encoding: 'binary' });
            await fs.promises.writeFile(file, speech.rawBody);
        } catch (e) {
            console.error('Failed to generarte voice');
            console.error(e);
            throw (e);
        }
        return file;
    }
}

export default VoiceMaker;