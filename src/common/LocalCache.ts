import path from 'path';
import fs from 'fs';
/**
 * deal with local cacher files
 */
export class LocalCache {
    constructor(private root: string) {
        try {
            fs.mkdirSync(this.root, {recursive: true});
        } catch (e) { }
    }

    async getCacheFile(key: string, filename: string): Promise<string> {
        return path.join(this.root, filename);
    }
}