import { CommonTTSRequest } from '../common/commonTTSRequest';

export class GoogleTTSRequest extends CommonTTSRequest {
    lang = 'en-US';
    slow = false;

    constructor(text: string, lang?: string) {
        super(text);
        this.text = text;
        this.lang = lang || 'en-US';
    }

    summery(): string {
        return `${this.lang},${this.slow},${this.text}`;
    }

    filename(): string {
        return `tts-${this.hash()}.mp3`;
    }

    set sampleRate(sampleRate: number) {}
    set pitch(pitch: number) {}
    set speed(speed: number) { this.slow = (speed < 0);}
    set volume(volume: number) {}

    get sampleRate(): number {return 0;}
    get speed(): number {return (this.slow) ? -1 : 0;}
    get pitch(): number {return 0;}
    get volume(): number {return 0;}

    set pitchPer100(pitch: number) {}
    set speedPer100(speed: number) { this.slow = (speed < 0);}
    set volumePer100(volume: number) {}

    setVoice(voiceName: string): void {}
    getVoice(): string {
        return 'not supported'
    }
}