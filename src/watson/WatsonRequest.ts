import { CommonTTSRequestAdv } from "../common/CommonTTSRequestAdv.ts";

export interface WatsonRequestPublic {
  text: string;
  accept: string;
  voice: string;
}

/**
 * $20.00 USD / 1 million characters
 */
export class WatsonRequest extends CommonTTSRequestAdv {
  private voice = "en-US_MichaelV3Voice";

  constructor(text: string, voice?: string) {
    super(text, {
      pitch: { min: 0, max: 0 },
      speed: { min: 0, max: 0 },
      volume: { min: 0, max: 0 },
      supportedFormat: ["mp3", "wav", "flac"],
    });
    if (voice) {
      this.setVoice(voice);
    }
  }

  public summery(): string {
    return [this.voice, this.specSummery(), this.text].join(",");
  }

  public filename(): string {
    return `ibm-${this.hash()}.${this.outputFormat}`;
  }

  /**
   * set the voice.
   */
  setVoice(voiceName: string) {
    this.voice = voiceName;
  }

  getVoice(): string {
    return this.voice;
  }

  toRequest(): WatsonRequestPublic {
    return {
      text: this.text,
      accept: this.mimeType,
      voice: this.getVoice(),
    };
  }
}
