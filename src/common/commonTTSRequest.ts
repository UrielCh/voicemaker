import crypto from "node:crypto";

export type AudioFormat = "mp3" | "wav" | "ogg" | "flac";

export abstract class CommonTTSRequest {
  private _format: AudioFormat = "mp3";

  constructor(public text: string, private supportedFormat: AudioFormat[]) {}

  /**
   * must fully describe the request
   */
  abstract summery(): string;

  /**
   * hash the signature of the request
   */
  public hash(): string {
    return crypto.createHash("md5").update(this.summery()).digest("hex");
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

  set outputFormat(format: AudioFormat) {
    if (this.supportedFormat.includes(format)) {
      this._format = format;
    } else {
      throw Error(`${format} audio format is not supported`);
    }
  }

  get outputFormat(): AudioFormat {
    return this._format;
  }

  get mimeType(): string {
    switch (this.outputFormat) {
      case "mp3":
        return "audio/mpeg";
      case "ogg":
        return "audio/ogg";
      case "wav":
        return "audio/wav";
      case "flac":
        return "audio/flac";
    }
  }

  /**
   * format the request to the proper model
   */
  abstract toRequest(): any;
}
