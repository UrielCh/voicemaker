import ElevenLabs from "../elevenLabsio/ElevenLabs.ts";
import { GoogleTTS } from "../googleTTS/GoogleTTS.ts";
import GoogleTTS2 from "../googleTTS2/GoogleTTS2.ts";
import {
  GoogleTTS2Voice,
  GoogleVoices,
} from "../googleTTS2/GoogleTTS2Voices.ts";
import VoiceMaker from "../voicemakerin/VoiceMaker.ts";
import {
  voiceMakerVoiceCache,
  VoiceMakerVoices,
} from "../voicemakerin/VoiceMakerVoices.ts";
import { Watson } from "../watson/Watson.ts";
import { WATSON_VOICES_SET, WatsonVoices } from "../watson/watsonVoices.ts";
import { CommonTTS } from "./commonTTS.ts";
import { CommonTTSRequest } from "./commonTTSRequest.ts";

export interface VoiceSelectionElevenLabs {
  type: "elevenlabs";
  voice: string;
}

export interface VoiceSelectionVoiceMaker {
  type: "voicemaker";
  voice: VoiceMakerVoices;
}

export interface VoiceSelectionGoogle {
  type: "google";
  voice: GoogleVoices;
}

export interface VoiceSelectionWatson {
  type: "watson";
  voice: WatsonVoices;
}

export interface VoiceSelectionNone {
  type: null;
  voice: null;
}

export const ALL_ENGINE = [
  "voicemaker",
  "google",
  "watson",
  "elevenlabs",
] as const;

/**
 * get engine name + voice matching a voice name.
 */
export function getVoice(
  voice?: string,
):
  | VoiceSelectionVoiceMaker
  | VoiceSelectionGoogle
  | VoiceSelectionWatson
  | VoiceSelectionElevenLabs
  | VoiceSelectionNone {
  if (!voice) {
    return { type: null, voice: null };
  }
  if (voiceMakerVoiceCache[voice as VoiceMakerVoices]) {
    return {
      type: "voicemaker",
      voice: voice as VoiceMakerVoices,
    };
  }
  if (GoogleTTS2Voice[voice as GoogleVoices]) {
    return {
      type: "google",
      voice: voice as GoogleVoices,
    };
  }
  if (WATSON_VOICES_SET.has(voice as WatsonVoices)) {
    return {
      type: "watson",
      voice: voice as WatsonVoices,
    };
  }
  if (voice.length === 20) {
    return {
      type: "elevenlabs",
      voice,
    };
  }
  console.error(`unknown voice ${voice}, switch back to default voice`);
  return { type: null, voice: null };
}

/**
 * get a new engine from a voice name.
 */
export function getEngine(
  voice?: string | null,
): CommonTTS<CommonTTSRequest, any> {
  if (!voice) {
    return new GoogleTTS();
  }
  if (voiceMakerVoiceCache[voice as VoiceMakerVoices]) {
    return new VoiceMaker();
  }
  if (GoogleTTS2Voice[voice as GoogleVoices]) {
    return new GoogleTTS2();
  }
  if (WATSON_VOICES_SET.has(voice as WatsonVoices)) {
    return new Watson();
  }
  if (voice.length === 20) {
    return new ElevenLabs();
  }
  console.error(`Unknown voice ${voice}, switch back to default voice`);
  return new GoogleTTS();
}
