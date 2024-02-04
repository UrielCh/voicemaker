import { CommonTTSRequest } from "../common/commonTTSRequest.ts";

export class GoogleTTSRequest extends CommonTTSRequest {
  lang = "en-US";
  slow = false;

  constructor(text: string, lang?: string) {
    super(text, ["mp3"]);
    this.text = text;
    this.lang = lang || "en-US";
  }

  summery(): string {
    return `${this.lang},${this.slow},${this.text}`;
  }

  filename(): string {
    return `tts-${this.hash()}.${this.outputFormat}`;
  }

  get sampleRate(): number {
    return 0;
  }
  set sampleRate(sampleRate: number) {}
  get pitch(): number {
    return 0;
  }
  set pitch(pitch: number) {}
  get speed(): number {
    return (this.slow) ? -1 : 0;
  }
  set speed(speed: number) {
    this.slow = speed < 0;
  }
  get volume(): number {
    return 0;
  }
  set volume(volume: number) {}

  set pitchPer100(pitch: number) {}
  set speedPer100(speed: number) {
    this.slow = speed < 0;
  }
  set volumePer100(volume: number) {}

  setVoice(_voiceName: string): void {}
  getVoice(): string {
    return "not supported";
  }

  toRequest() {
    throw new Error("Method not implemented.");
  }
}
