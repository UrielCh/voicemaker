import { GoogleTTS } from "../googleTTS/GoogleTTS";
import GoogleTTS2 from "../googleTTS2/GoogleTTS2";
import { GoogleTTS2Voice, GoogleVoices } from "../googleTTS2/GoogleTTS2Voices";
import VoiceMaker from "../voicemakerin/VoiceMaker";
import { voiceMakerVoiceCache, VoiceMakerVoices } from "../voicemakerin/VoiceMakerVoices";
import { Watson } from "../watson/Watson";
import { WatsonVoices, WATSON_VOICES_SET } from "../watson/watsonVoices";
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

export interface VoiceSelectionWatson {
    type: 'watson',
    voice: WatsonVoices,
}

export interface VoiceSelectionNone {
    type: null,
    voice: null,
}

export const ALL_ENGINE = ['voicemaker', 'google', 'watson'] as const;

/** 
 * get engine name + voice matching a voice name.
 */
export function getVoice(voice?: string): VoiceSelectionVoiceMaker | VoiceSelectionGoogle | VoiceSelectionWatson | VoiceSelectionNone {
    if (!voice)
        return { type: null, voice: null };
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
    if (WATSON_VOICES_SET.has(voice as WatsonVoices)) {
        return {
            type: 'watson',
            voice: voice as WatsonVoices,
        }
    }
    console.error(`unknown voice ${voice}, switch back to default voice`)
    return { type: null, voice: null };
}

/** 
 * get a new engine from a voice name.
 */
export function getEngine(voice?: string | null): CommonTTS<CommonTTSRequest> {
    if (!voice)
        return new GoogleTTS();
    if (voiceMakerVoiceCache[voice as VoiceMakerVoices]) {
        return new VoiceMaker();
    }
    if (GoogleTTS2Voice[voice as GoogleVoices]) {
        return new GoogleTTS2();
    }
    if (WATSON_VOICES_SET.has(voice as WatsonVoices)) {
        return new Watson();
    }
    console.error(`Unknown voice ${voice}, switch back to default voice`)
    return new GoogleTTS();
}
