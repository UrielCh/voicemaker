import crypto from 'crypto';

export abstract class CommonTTSRequest {
    constructor(public text: string) {}

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

    abstract set sampleRate(sampleRate: number);
    abstract set pitch(pitch: number);
    abstract set speed(speed: number);
    abstract set volume(volume: number);

    abstract get sampleRate(): number;
    abstract get speed(): number;
    abstract get pitch(): number;
    abstract get volume(): number;

    abstract set pitchPer100(pitch: number);
    abstract set speedPer100(speed: number);
    abstract set volumePer100(volume: number);

    abstract setVoice(voiceName: string): void;
    abstract getVoice(): string;

    abstract set outputFormat(format: "mp3" | 'wav' | 'ogg');
    abstract get outputFormat(): "mp3" | 'wav' | 'ogg'
}