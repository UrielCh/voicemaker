import { AudioFormat } from '../common/commonTTSRequest';
import { CommonTTSRequestAdv } from '../common/CommonTTSRequestAdv';
import { getLangFromVoice, VoiceMakerLangs, VoiceMakerVoices } from "./VoiceMakerVoices";

export const VoiceMakerEffectList = [ 'default', 'breathing', 'soft', 'whispered', 'conversational', 'news', 'customersupport', 'assistant', 'happy', 'empathic', 'clam', 'whispered', 'happy', 'sad', 'angry', 'excited', 'friendly', 'hopeful', 'shouting', 'terrified', 'unfriendly' ] as const 
export type VoiceMakerEffect = typeof VoiceMakerEffectList[number]
export interface VoiceMakerRequestPublic {
    Text: string;
    Engine: 'standard' | 'neural';
    VoiceId: string;
    LanguageCode: VoiceMakerLangs;
    OutputFormat: AudioFormat; // "mp3" | 'wav'
    SampleRate: string;
    Effect: VoiceMakerEffect;
    // number as string
    MasterSpeed: string;
    // number as string
    MasterVolume: string;
    // number as string
    MasterPitch: string;
}

export function getVoicemakerEffect(voiceMakerName: string): VoiceMakerEffect[] {
    const result: VoiceMakerEffect[] = ['default'];
    if (voiceMakerName.startsWith('ai1'))
        result.push('breathing', 'soft', 'whispered');
    if (['ai1-Joanna', 'ai1-Matthew', 'ai3-Aria', 'ai3-Jenny', 'ai3-cmn-CN-Xiaoxiao'].includes(voiceMakerName))
        result.push('conversational');
    if (['ai1-Amy', 'ai3-Jony', 'ai3-Aria', 'ai3-Jenny', 'ai1-es-US-Lupe'].includes(voiceMakerName))
        result.push('news');
    if (['ai3-Aria', 'ai3-Jenny', 'ai3-Jenny', 'ai3-Jenny', 'ai3-cmn-CN-Yunyang'].includes(voiceMakerName))
        result.push('customersupport');
    if (['ai3-Aria', 'ai3-Jenny'].includes(voiceMakerName))
        result.push('assistant');
    if (['ai3-Aria', 'ai3-cmn-CN-Yunye', 'ai3-cmn-CN-Xariyah', 'ai3-cmn-CN-Xiomara', 'ai3-cmn-CN-Carissa', 'ai3-cmn-CN-Xylia', 'ai3-cmn-CN-Xander'].includes(voiceMakerName))
        result.push('happy');
    if (['ai3-Aria'].includes(voiceMakerName))
        result.push('empathic');
    if (['ai3-cmn-CN-Yunye'].includes(voiceMakerName))
        result.push('clam');
    if (['ai3-Aria', 'ai3-Jenny', 'ai3-Jony', 'ai3-en-US-Alexander', 'ai3-en-US-Madison', 'ai3-en-US-Jayden', 'ai3-en-US-Ashley', 'ai3-en-US-Joshua'].includes(voiceMakerName))
        result.push('whispered', 'happy', 'sad', 'angry', 'excited', 'friendly', 'hopeful', 'shouting', 'terrified', 'unfriendly');
    return result;
}

/**
 * $25.00 USD / 1 million characters
 */
export class VoiceMakerRequest extends CommonTTSRequestAdv {
    engine: 'standard' | 'neural' = 'neural';
    private voice: string = 'ai2-Katie';
    lang: VoiceMakerLangs = "en-US";
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
    effect: 'default' | 'breathing' | 'soft' | 'whispered' | 'conversational' | 'news' | 'customersupport' | 'assistant' | 'happy' | 'empathic' | 'clam' = "default";

    constructor(text: string, voice?: string) {
        super(text, { pitch: { min: -100, max: 100 }, speed: { min: -100, max: 100 }, volume: { min: -20, max: 20 }, supportedFormat: ["mp3", 'wav'] });
        if (voice)
            this.setVoice(voice);
    }

    public summery(): string {
        return [this.effect, this.voice, this.lang, this.specSummery(), this.text].join(',');
    }

    public filename(): string {
        return `vmkr-${this.hash()}.${this.outputFormat}`;
    }

    /**
     * set the voice.
    */
    setVoice(voiceName: string) {
        const lng = getLangFromVoice(voiceName as VoiceMakerVoices)
        if (lng) {
            this.lang = lng;
        } else {
            // for unknow voice
            const m = voiceName.match(/-([a-z]{2}-[A-Z]{2})-/);
            if (m) {
                this.lang = m[1] as VoiceMakerLangs;
            }
        }
        this.voice = voiceName;
    }

    getVoice(): string {
        return this.voice;
    }

    toRequest(): VoiceMakerRequestPublic {
        return {
            Text: this.text,
            Effect: this.effect,
            Engine: this.engine,
            LanguageCode: this.lang,
            MasterPitch: String(this.pitch),
            MasterSpeed: String(this.speed),
            MasterVolume: String(this.volume),
            OutputFormat: this.outputFormat,
            SampleRate: String(this.sampleRate),
            VoiceId: this.voice,
        }
    }
}
