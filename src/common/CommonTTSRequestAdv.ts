import { CommonTTSRequest } from "./commonTTSRequest";

export interface FieldConstraint {
    min: number;
    max: number;
}

const classicSampleRate = new Set([48000, 44100, 24000, 22050, 16000, 8000]);

export abstract class CommonTTSRequestAdv extends CommonTTSRequest {
    _speed = 0;
    _pitch = 0;
    _volume = 0;
    _sampleRate: number = 24000;

    constructor(private limits: { speed: FieldConstraint, pitch: FieldConstraint, volume: FieldConstraint }) {
        super();
    }

    set sampleRate(sampleRate: number) {
        if (!classicSampleRate.has(sampleRate))
            throw Error(`${sampleRate} is not a commonly used sampleRate`);
        this._sampleRate = sampleRate;
    }

    private filterValuePer100(name: string, constraint: FieldConstraint, value: number) {
        if (value > 1)
            throw Error(`${name} per 100 can not exceed +100%`);
        if (value < -1)
            throw Error(`${name} per 100 can not subceed -100%`);
        if (value < 0) {
            return -constraint.min * value;
        }
        if (value > 0) {
            return constraint.max * value;
        }
        return 0;
    }

    private filterValue(name: string, constraint: FieldConstraint, value: number) {
        if (value > constraint.max)
            throw Error(`${name} can not exceed ${this.limits.pitch.max}`);
        if (value < constraint.min)
            throw Error(`${name} can not subceed ${this.limits.pitch.min}`);
        return value;
    }

    set pitch(pitch: number) {
        this._pitch = this.filterValue('pitch', this.limits.pitch, pitch);
    }

    set speed(speed: number) {
        this._pitch = this.filterValue('speed', this.limits.speed, speed);
    }

    set volume(volume: number) {
        this._pitch = this.filterValue('volume', this.limits.volume, volume);
    }

    set pitchPer100(pitch: number) {
        this._pitch = this.filterValuePer100('pitch', this.limits.pitch, pitch);
    }

    set speedPer100(speed: number) {
        this._pitch = this.filterValuePer100('speed', this.limits.speed, speed);
    }

    set volumePer100(volume: number) {
        this._pitch = this.filterValuePer100('volume', this.limits.volume, volume);
    }

    get sampleRate(): number {
        return this._sampleRate
    }

    get speed(): number {
        return this._speed;
    }

    get pitch(): number {
        return this._pitch;
    }

    get volume(): number {
        return this._volume;
    }

    specSummery() {
        return `${this.speed},${this.pitch},${this.volume},${this.sampleRate}`;
    }
}