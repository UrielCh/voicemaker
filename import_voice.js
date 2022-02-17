const { default: axios } = require("axios");

async function gen() {
  const voices = await axios.get('https://developer.voicemaker.in/voice/list');
  
  let voiceMakerVoice = {};
  for (const voice of voices.data.data.voices_list) {
      if (!voiceMakerVoice[voice.Language])
          voiceMakerVoice[voice.Language] = [];
      voiceMakerVoice[voice.Language].push(voice.VoiceId)
  }
  console.log('export const voiceMakerVoice = ');
  console.log(JSON.stringify(voiceMakerVoice, undefined, '  ').replace(/]/g, '] as const'));
}
gen();