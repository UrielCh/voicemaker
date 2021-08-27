import { CommonTTSRequest } from '../common/commonTTSRequest';

export class GoogleTTSRequest extends CommonTTSRequest {
    text: string;
    lang = 'en-US';
    slow = false;

    constructor(text: string, lang?: string) {
        super();
        this.text = text;
        this.lang = lang || 'en-US';
    }

    summery(): string {
        return `${this.lang},${this.slow},${this.text}`;
    }

    filename(): string {
        return `tts-${this.hash()}.mp3`;
    }

}