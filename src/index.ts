export { VoiceMaker } from "./voicemakerin/VoiceMaker";
export { VoiceMakerRequest } from "./voicemakerin/VoiceMakerRequest";
export { VoiceMakerVoices, ALL_VOICEMAKE_VOICES } from './voicemakerin/VoiceMakerVoices';

export { GoogleTTS } from './googleTTS/GoogleTTS';
export { GoogleTTSRequest } from './googleTTS/GoogleTTSRequest';

export { GoogleTTS2 } from './googleTTS2/GoogleTTS2';
export { GoogleTTS2Request } from './googleTTS2/GoogleTTS2Request';

export { getVoice, getEngine, VoiceSelectionVoiceMaker, VoiceSelectionGoogle } from './common/utils';

/**
 * build a nice default
 */
import { VoiceMaker } from "./voicemakerin/VoiceMaker";
import { GoogleTTS } from './googleTTS/GoogleTTS';

export default {
    VoiceMaker, GoogleTTS
}
