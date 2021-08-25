import crypto from 'crypto';

export abstract class CommonTTSRequest {
    /**
     * must fully describe the request
     */
    abstract summery(): string;

    /**
     * hash the signature of the request
     */
    public hash(): string {
        return crypto.createHash('md5').update(this.summery()).digest('hex');
    }
    /**
     * filename used to store the file incache
     */
    abstract filename(): string;
}