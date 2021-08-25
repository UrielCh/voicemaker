import path from 'path';
import fs from 'fs';
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
        this.logFile = path.join(this.root, 'log.txt');
    }

    async getCacheFile(key: string, filename: string): Promise<string> {
        return path.join(this.root, filename);
    }

    async log(req: CommonTTSRequest): Promise<void> {
        try {
            await fs.promises.appendFile(this.logFile, `${new Date().toISOString()}\t${req.filename}\t${req.summery().replace(/[\r\n\t]+/g, ' ')}`, {encoding: 'utf-8'});
        } catch (e) {
            console.error(`warning failed to log request in ${this.logFile}`);
        }
    }
}