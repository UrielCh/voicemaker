import crypto from 'crypto';
import { CommonTTSRequest } from '../common/commonTTSRequest';
import { getLangFromVoice, VoiceMakerLangs, VoiceMakerVoices } from "./VoiceMakerVoices";

export class VoiceMakerRequest extends CommonTTSRequest {
    Engine: 'standard' | 'neural' = 'neural';
    VoiceId: string = 'ai2-Katie';
    LanguageCode: VoiceMakerLangs = "en-US";
    Text: string = '';
    OutputFormat: "mp3" | 'wav' = 'mp3';
    /**
     *  44100, 24000, 22050, 16000, 8000
     */
    SampleRate: "48000" | "44100" | "24000" | "22050" | "16000" | "8000" = '48000';
    /**
     * breathing, soft, whispered - Only supports standard Engine ai1 voices.
     * conversational - Only support on neural Engine en-US - ai1-Joanna, ai1-Matthew, ai3-Aria, ai3-Jenny, cmn-CN - ai3-cmn-CN-Xiaoxiao.
     * news - Only support on neural Engine en-GB - ai1-Amy, en-US - ai3-Jony, ai3-Aria, ai3-Jenny, es-US - ai1-es-US-Lupe
     * customersupport - Only support on neural Engine en-US - ai3-Aria, ai3-Jenny, cmn-CN - ai3-cmn-CN-Yunyang.
     * assistant - Only support on neural Engine en-US - ai3-Aria, ai3-Jenny.
     * happy - Only support on neural Engine en-US - ai3-Aria, cmn-CN - ai3-cmn-CN-Yunye, ai3-cmn-CN-Xariyah, ai3-cmn-CN-Xiomara, ai3-cmn-CN-Carissa, ai3-cmn-CN-Xylia, ai3-cmn-CN-Xander.
     * empathic - Only support on neural Engine en-US - ai3-Aria.
     * clam - Only support on neural Engine cmn-CN - ai3-cmn-CN-Yunye.
     */
    Effect: 'default' | 'breathing' | 'soft' | 'whispered' | 'conversational' | 'news' | 'customersupport' | 'assistant' | 'happy' | 'empathic' | 'clam' = "default";
    /**
     * -100 - 100
     */
    private MasterSpeed = '0';

    set masterSpeed(speed: number) {
        if (speed > 100 || speed < -100) {
            throw Error('invalid value for MasterSpeed');
        }
        this.MasterSpeed = "" + speed;
    }

    get masterSpeed() {
        return Number(this.MasterSpeed);
    }

    /**
     * -20 .. +20
     */
    private MasterVolume = '0';

    set masterVolume(volume: number) {
        if (volume > 20 || volume < -20) {
            throw Error('invalid value for MasterVolume');
        }
        this.MasterVolume = "" + volume;
    }

    get masterVolume() {
        return Number(this.MasterVolume);
    }

    /**
     *  MasterPitch does not support neural Engine ai1 voices.
     * -100 - 100
     */
    private MasterPitch = '0';

    set masterPitch(pitch: number) {
        if (pitch > 100 || pitch < -100) {
            throw Error('invalid value for MasterPitch');
        }
        this.MasterPitch = "" + pitch;
    }

    get masterPitch() {
        return Number(this.MasterPitch);
    }


    constructor(text: string) {
        super();
        this.Text = text;
    }

    public summery(): string {
        return [this.Effect, this.VoiceId, this.LanguageCode, this.Text, this.SampleRate, this.Effect, '' + this.MasterSpeed, '' + this.MasterVolume, '' + this.MasterPitch].join(',');
    }

    public filename(): string {
        return `vmkr-${this.hash()}.${this.OutputFormat}`;
    }

    /**
     * set the voice.
    */
    setVoice(voiceName: string) {
        const lng = getLangFromVoice(voiceName as VoiceMakerVoices)
        if (lng) {
            this.LanguageCode = lng;
        } else {
            // for unknow voice
            const m = voiceName.match(/-([a-z]{2}-[A-Z]{2})-/);
            if (m) {
                this.LanguageCode = m[1] as VoiceMakerLangs;
            }
        }
        this.VoiceId = voiceName;
    }
}
