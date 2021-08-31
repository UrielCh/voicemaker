import { protos } from '@google-cloud/text-to-speech';
import { CommonTTSRequestAdv } from '../common/CommonTTSRequestAdv';
import { GoogleTTS2Voice, GoogleVoices } from './GoogleTTS2Voices';
/**
 * WaveNet: free tier: 1M / Month, then $16.00 USD / 1 million characters
 * classic: free tier: 4M / Month, then $4.00 USD / 1 million characters
 */
export class GoogleTTS2Request extends CommonTTSRequestAdv {
    lang = 'en-US';
    private voice: GoogleVoices = 'en-US-Wavenet-A';
    gender: "FEMALE" | "MALE" = "FEMALE";

    constructor(text: string, voice?: GoogleVoices) {
        // super({ pitch: { min: -20, max: 20 }, speed: { min: 0.25, max: 4 }, volume: { min: -96.0, max: 16.0 } });
        super(text, { pitch: { min: -20, max: 20 }, speed: { min: 0.25, max: 4 }, volume: { min: -16.0, max: 16.0 }, supportedFormat: ['mp3', 'ogg', 'wav'] });
        this.text = text;
        if (voice)
            this.setVoice(voice)
    }


    setVoice(voiceName: string) {
        const lng = GoogleTTS2Voice[voiceName as GoogleVoices]
        if (!lng) {
            throw Error(`voiceName ${voiceName} is unknown`);
        }
        this.sampleRate = lng.naturalSampleRateHertz;
        this.voice = voiceName as GoogleVoices;
        this.gender = lng.ssmlGender as "FEMALE" | "MALE";
    }

    getVoice(): string {
        return this.voice;
    }

    summery(): string {
        const keys = [/*effect, */ this.getVoice(), this.lang, this.specSummery(), this.text]
        return keys.join(',');
    }

    filename(): string {
        return `tts-${this.hash()}.${this.outputFormat}`;
    }

    toRequest(): protos.google.cloud.texttospeech.v1.ISynthesizeSpeechRequest {
        let audioEncoding: protos.google.cloud.texttospeech.v1.AudioEncoding;
        switch (this.outputFormat) {
            case 'mp3':
                audioEncoding = protos.google.cloud.texttospeech.v1.AudioEncoding.MP3;
                break;
            case 'ogg':
                audioEncoding = protos.google.cloud.texttospeech.v1.AudioEncoding.OGG_OPUS;
                break;
            case 'wav':
                audioEncoding = protos.google.cloud.texttospeech.v1.AudioEncoding.LINEAR16;
                break;
            default:
                audioEncoding = protos.google.cloud.texttospeech.v1.AudioEncoding.AUDIO_ENCODING_UNSPECIFIED;
        }

        return {
            input: { text: this.text },
            voice: { name: this.getVoice(), languageCode: this.lang, ssmlGender: this.gender },
            audioConfig: { pitch: this.pitch, audioEncoding, speakingRate: this.speed, sampleRateHertz: this.sampleRate }
        }
    }
}