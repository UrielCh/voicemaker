export { VoiceMaker } from "./voicemakerin/VoiceMaker";
export { VoiceMakerRequest, type VoiceMakerEffect, type VoiceMakerRequestPublic } from "./voicemakerin/VoiceMakerRequest";
export { type VoiceMakerVoices, ALL_VOICEMAKE_VOICES } from './voicemakerin/VoiceMakerVoices';

export { ElevenLabs } from "./elevenLabsio/ElevenLabs";
export { ElevenLabsRequest } from "./elevenLabsio/ElevenLabsRequest";

export { GoogleTTS } from './googleTTS/GoogleTTS';
export { GoogleTTSRequest } from './googleTTS/GoogleTTSRequest';

export { GoogleTTS2 } from './googleTTS2/GoogleTTS2';
export { GoogleTTS2Request } from './googleTTS2/GoogleTTS2Request';
export { type GoogleVoices, ALL_GOOGLE_VOICES } from './googleTTS2/GoogleTTS2Voices';

export { Watson } from './watson/Watson';
export { WatsonRequest } from './watson/WatsonRequest';
export { type WatsonVoices, ALL_WATSON_VOICES } from './watson/watsonVoices';

export { getVoice, getEngine, VoiceSelectionVoiceMaker, VoiceSelectionGoogle } from './common/utils';

/**
 * build a default export
 */

import { getVoice, getEngine } from './common/utils';

export default {
    getVoice, getEngine
}
