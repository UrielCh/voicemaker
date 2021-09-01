import { join } from 'path';
import fs from 'fs';
import { EOL } from 'os';
import { CommonTTSRequest } from './commonTTSRequest';
/**
 * deal with local cacher files
 */
export class LocalCache {
    private logFile: string;
    constructor(private root: string) {
        try {
            fs.mkdirSync(this.root, {recursive: true});
        } catch (e) { }
        this.logFile = join(this.root, 'log.txt');
    }

    async getCacheFile(key: string, filename: string): Promise<{file: string, exists: boolean}> {
        const file = join(this.root, filename);
        let exists = false;
        try {
            await fs.promises.stat(file);
            exists = true;
        } catch (e) {
            // create new one
        }
        return {file, exists};
    }

    async log(req: CommonTTSRequest): Promise<void> {
        try {
            const text = `${new Date().toISOString()}\t${req.filename()}\t${req.summery().replace(/[\r\n\t]+/g, ' ')}${EOL}`;
            await fs.promises.appendFile(this.logFile, text, {encoding: 'utf-8'});
        } catch (e) {
            console.error(`warning failed to log request in ${this.logFile}`);
        }
    }

    async getKey(filename?: string): Promise<string | null> {
        try {
            const keyFile = join(this.root, filename || 'key.json');
            await fs.promises.stat(keyFile);
            return keyFile;
        } catch (e) {
            return null;
        }
    }
}