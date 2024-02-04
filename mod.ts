export { VoiceMaker } from "./voicemakerin/VoiceMaker.ts";
export { type VoiceMakerEffect, VoiceMakerRequest, type VoiceMakerRequestPublic } from "./voicemakerin/VoiceMakerRequest.ts";
export { ALL_VOICEMAKE_VOICES, type VoiceMakerVoices } from "./voicemakerin/VoiceMakerVoices.ts";

export { ElevenLabs } from "./elevenLabsio/ElevenLabs.ts";
export { ElevenLabsRequest } from "./elevenLabsio/ElevenLabsRequest.ts";

export { GoogleTTS } from "./googleTTS/GoogleTTS.ts";
export { GoogleTTSRequest } from "./googleTTS/GoogleTTSRequest.ts";

export { GoogleTTS2 } from "./googleTTS2/GoogleTTS2.ts";
export { GoogleTTS2Request } from "./googleTTS2/GoogleTTS2Request.ts";
export { ALL_GOOGLE_VOICES, type GoogleVoices } from "./googleTTS2/GoogleTTS2Voices.ts";

export { Watson } from "./watson/Watson.ts";
export { WatsonRequest } from "./watson/WatsonRequest.ts";
export { ALL_WATSON_VOICES, type WatsonVoices } from "./watson/watsonVoices.ts";

export { getEngine, getVoice, type VoiceSelectionGoogle, type VoiceSelectionVoiceMaker } from "./common/utils.ts";

/**
 * build a default export
 */

import { getEngine, getVoice } from "./common/utils.ts";

export default {
  getVoice,
  getEngine,
};
