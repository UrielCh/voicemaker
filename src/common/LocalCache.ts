import { join } from 'path';
import fs from 'fs';
import EOL from 'os';
import { CommonTTSRequest } from './commonTTSRequest';
/**
 * deal with local cacher files
 */
export class LocalCache {
    private logFile: string;
    private keyFile: string;
    constructor(private root: string) {
        try {
            fs.mkdirSync(this.root, {recursive: true});
        } catch (e) { }
        this.logFile = join(this.root, 'log.txt');
        this.keyFile = join(this.root, 'key.json');
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
            await fs.promises.appendFile(this.logFile, `${new Date().toISOString()}\t${req.filename()}\t${req.summery().replace(/[\r\n\t]+/g, ' ')}${EOL}`, {encoding: 'utf-8'});
        } catch (e) {
            console.error(`warning failed to log request in ${this.logFile}`);
        }
    }

    async getKey(): Promise<string | null> {
        try {
            await fs.promises.stat(this.keyFile);
            return this.keyFile;
        } catch (e) {
            return null;
        }
    }
}