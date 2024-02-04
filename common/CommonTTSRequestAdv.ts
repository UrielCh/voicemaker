import { AudioFormat, CommonTTSRequest } from "./commonTTSRequest.ts";

export interface FieldConstraint {
  min: number;
  max: number;
}

const classicSampleRate = new Set([48000, 44100, 24000, 22050, 16000, 8000]);

export abstract class CommonTTSRequestAdv extends CommonTTSRequest {
  _speed = 0;
  _pitch = 0;
  _volume = 0;
  _sampleRate = 24000;

  constructor(
    text: string,
    private limits: {
      speed: FieldConstraint;
      pitch: FieldConstraint;
      volume: FieldConstraint;
      supportedFormat: AudioFormat[];
    },
  ) {
    super(text, limits.supportedFormat);
  }

  get sampleRate(): number {
    return this._sampleRate;
  }

  set sampleRate(sampleRate: number) {
    if (!classicSampleRate.has(sampleRate)) {
      throw Error(`${sampleRate} is not a commonly used sampleRate`);
    }
    this._sampleRate = sampleRate;
  }

  private filterValuePer100(
    name: string,
    constraint: FieldConstraint,
    value: number,
  ) {
    if (value > 1) {
      throw Error(
        `${name} per 100 can not exceed +100% (you passed the value ${value})`,
      );
    }
    if (value < -1) {
      throw Error(
        `${name} per 100 can not subceed -100% (you passed the value ${value})`,
      );
    }
    if (value < 0) {
      return -constraint.min * value;
    }
    if (value > 0) {
      return constraint.max * value;
    }
    return 0;
  }

  private filterValue(
    name: string,
    constraint: FieldConstraint,
    value: number,
  ) {
    if (value > constraint.max) {
      throw Error(`${name} can not exceed ${constraint.max}`);
    }
    if (value < constraint.min) {
      throw Error(`${name} can not subceed ${constraint.min}`);
    }
    return value;
  }

  get pitch(): number {
    return this._pitch;
  }

  set pitch(pitch: number) {
    this._pitch = this.filterValue("pitch", this.limits.pitch, pitch);
  }

  get speed(): number {
    return this._speed;
  }

  set speed(speed: number) {
    this._speed = this.filterValue("speed", this.limits.speed, speed);
  }

  get volume(): number {
    return this._volume;
  }

  set volume(volume: number) {
    this._volume = this.filterValue("volume", this.limits.volume, volume);
  }

  set pitchPer100(pitch: number) {
    this._pitch = this.filterValuePer100("pitch", this.limits.pitch, pitch);
  }

  set speedPer100(speed: number) {
    this._speed = this.filterValuePer100("speed", this.limits.speed, speed);
  }

  set volumePer100(volume: number) {
    this._volume = this.filterValuePer100("volume", this.limits.volume, volume);
  }

  specSummery() {
    return `${this.speed},${this.pitch},${this.volume},${this.sampleRate}`;
  }
}