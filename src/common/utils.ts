import { GoogleTTS } from "../googleTTS/GoogleTTS";
import GoogleTTS2 from "../googleTTS2/GoogleTTS2";
import { GoogleTTS2Voice, GoogleVoices } from "../googleTTS2/GoogleTTS2Voices";
import VoiceMaker from "../voicemakerin/VoiceMaker";
import { voiceMakerVoiceCache, VoiceMakerVoices } from "../voicemakerin/VoiceMakerVoices";
import { CommonTTS } from "./commonTTS";
import { CommonTTSRequest } from "./commonTTSRequest";


export interface VoiceSelectionVoiceMaker {
    type: 'voicemaker',
    voice: VoiceMakerVoices;
}

export interface VoiceSelectionGoogle {
    type: 'google',
    voice: GoogleVoices,
}

export function getVoice(voice?: string): VoiceSelectionVoiceMaker | VoiceSelectionGoogle | null {
    if (!voice)
        return null;
    if (voiceMakerVoiceCache[voice as VoiceMakerVoices]) {
        return {
            type: 'voicemaker',
            voice: voice as VoiceMakerVoices,
        }
    }
    if (GoogleTTS2Voice[voice as GoogleVoices]) {
        return {
            type: 'google',
            voice: voice as GoogleVoices,
        }
    }
    console.error(`unknown voice ${voice}, switch back to default voice`)
    return null;
}

export function getEngine(voice?: string): CommonTTS<CommonTTSRequest> {
    if (!voice)
        return new GoogleTTS();
    if (voiceMakerVoiceCache[voice as VoiceMakerVoices]) {
        return new VoiceMaker();
    }
    if (GoogleTTS2Voice[voice as GoogleVoices]) {
        return new GoogleTTS2();
    }
    console.error(`Unknown voice ${voice}, switch back to default voice`)
    return new GoogleTTS();
}
