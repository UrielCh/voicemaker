import { homedir } from "os";
import path from "path";
import fs from "fs";
import { CommonTTS } from "../common/commonTTS";
import got from "got/dist/source";
import { WatsonRequest } from "./WatsonRequest";

export class Watson extends CommonTTS<WatsonRequest> {
    /**
     * Dallas: https://api.us-south.text-to-speech.watson.cloud.ibm.com
     * Washington DC: https://api.us-east.text-to-speech.watson.cloud.ibm.com
     * Frankfurt: https://api.eu-de.text-to-speech.watson.cloud.ibm.com
     * Sydney: https://api.au-syd.text-to-speech.watson.cloud.ibm.com
     * Tokyo: https://api.jp-tok.text-to-speech.watson.cloud.ibm.com
     * London: https://api.eu-gb.text-to-speech.watson.cloud.ibm.com
     * Seoul: https://api.kr-seo.text-to-speech.watson.cloud.ibm.com
     */
    serviceUrl: string = 'https://api.eu-de.text-to-speech.watson.cloud.ibm.com';

    constructor(cacheDir?: string) {
        super(cacheDir || path.join(homedir(), '.tts', 'watson'))
    }

    private async getToken(): Promise<string> {
        let WATSON_TOKEN = process.env.WATSON_TOKEN;
        if (!WATSON_TOKEN) {
            const key = await this.cacheDir.getKey();
            if (key) {
                const data = await fs.promises.readFile(key, {encoding: 'utf-8'});
                const m = data.match(/[a-zA-Z0-9_]{44}/);
                if (m) {
                    process.env.WATSON_TOKEN = m[0];
                    WATSON_TOKEN = m[0];
                } else {
                    console.log(`${key} exists but do not contains any Token`);
                }
            }
        }
        if (!WATSON_TOKEN) {
            throw Error(`Missing WATSON_TOKEN environement variable, or token in ~/.tts/watson/key.json file.`);
        }
        return WATSON_TOKEN;
    }

    async getTts(request: WatsonRequest): Promise<string> {
        const {file, exists} = await this.cacheDir.getCacheFile(request.hash(), request.filename());
        if (exists)
            return file;
        const WATSON_TOKEN = await this.getToken();
        try {
            const resp = await got.post(`${this.serviceUrl}/v1/synthesize`, { 
                headers: {
                    'user-agent': `VoiceMaker (https://github.com/UrielCh/voicemaker)`,
                    Authorization: `Bearer ${WATSON_TOKEN}`,
                    'Content-Type': 'application/json',
                    'Accept': request.mimeType,
                 },
                body: JSON.stringify(request.toRequest()),
            });
            if (resp.statusCode === 200) {
                await fs.promises.writeFile(file, resp.rawBody);
                await super.log(request);
            }
        } catch (e) {
            console.error('Failed to generarte voice');
            console.error(e);
            throw (e);
        }
        return file;
    }

    getRequest(text: string, voice?: string): WatsonRequest {
        return new WatsonRequest(text, voice);
    }

}
