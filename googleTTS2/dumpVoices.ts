import { EOL } from "node:os";
import * as textToSpeech from "https://esm.sh/@google-cloud/text-to-speech@5.0.2";
import { GoogleTTS2 } from "./GoogleTTS2.ts";

async function main() {
  const tts = new GoogleTTS2();
  await tts.getToken();

  const client = new textToSpeech.TextToSpeechClient();

  const [result] = await client.listVoices({});
  const voices = result.voices;
  if (!voices) {
    return;
  }
  let out: string[] = [];
  out.push(`export const GoogleTTS2Voice = {`);
  voices.forEach((voice) => {
    const languageCodes = voice.languageCodes || [];
    out.push(
      `    "${voice.name}": { langs: ["${
        languageCodes.join(", ")
      }"], naturalSampleRateHertz: ${voice.naturalSampleRateHertz}, ssmlGender: "${voice.ssmlGender}"},`,
    );
  });
  out.push("}");
  console.log(out.join(EOL));
  console.log("insert this list in GoogleTTS2Voices.ts");
}
main();
