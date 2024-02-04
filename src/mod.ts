export { VoiceMaker } from "./voicemakerin/VoiceMaker.ts";
export { VoiceMakerRequest, type VoiceMakerEffect, type VoiceMakerRequestPublic } from "./voicemakerin/VoiceMakerRequest.ts";
export { type VoiceMakerVoices, ALL_VOICEMAKE_VOICES } from './voicemakerin/VoiceMakerVoices.ts';

export { ElevenLabs } from "./elevenLabsio/ElevenLabs.ts";
export { ElevenLabsRequest } from "./elevenLabsio/ElevenLabsRequest.ts";

export { GoogleTTS } from './googleTTS/GoogleTTS.ts';
export { GoogleTTSRequest } from './googleTTS/GoogleTTSRequest.ts';

export { GoogleTTS2 } from './googleTTS2/GoogleTTS2.ts';
export { GoogleTTS2Request } from './googleTTS2/GoogleTTS2Request.ts';
export { type GoogleVoices, ALL_GOOGLE_VOICES } from './googleTTS2/GoogleTTS2Voices.ts';

export { Watson } from './watson/Watson.ts';
export { WatsonRequest } from './watson/WatsonRequest.ts';
export { type WatsonVoices, ALL_WATSON_VOICES } from './watson/watsonVoices.ts';

export { getVoice, getEngine, type VoiceSelectionVoiceMaker, type VoiceSelectionGoogle } from './common/utils.ts';

/**
 * build a default export
 */

import { getVoice, getEngine } from './common/utils.ts';

export default {
    getVoice, getEngine
}
