import { EOL } from 'os';
import * as textToSpeech from '@google-cloud/text-to-speech';
import { GoogleTTS2 } from './GoogleTTS2';

async function main() {
    const tts = new GoogleTTS2();
    await tts.getToken();

    const client = new textToSpeech.TextToSpeechClient();

    const [result] = await client.listVoices({});
    const voices = result.voices;
    if (!voices)
        return;
    //console.log('Voices:');
    let out: string[] = [];
    out.push(`export const GoogleTTS2Voice = {`);
    voices.forEach(voice => {
        const languageCodes = voice.languageCodes || [];
        out.push(`    "${voice.name}": { lang: ["${languageCodes.join(", ")}"], naturalSampleRateHertz: ${voice.naturalSampleRateHertz}, ssmlGender: "${voice.ssmlGender}"},`);
    });
    out.push('}');
    console.log(out.join(EOL));
    console.log('insert this list in GoogleTTS2Voices.ts');
}
main()