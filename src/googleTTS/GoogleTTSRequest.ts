import crypto from 'crypto';

export class GoogleTTSRequest {
    text: string;
    lang = 'en';
    slow = false;

    constructor(text: string, lang?: string) {
        this.text = text;
        this.lang = lang || 'en';
    }

    hash(): string {
        return crypto.createHash('md5').update(this.toString()).digest('hex');
    }

    filename(): string {
        return `tts-${this.hash()}.mp3`;
    }

}