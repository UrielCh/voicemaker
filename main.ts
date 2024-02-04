import { Command, InvalidArgumentError } from "npm:commander";
import { ALL_WATSON_VOICES } from "./mod.ts";
import { ALL_ENGINE, getEngine, getVoice } from "./common/utils.ts";
import { GoogleTTS2Voice, GoogleVoices } from "./googleTTS2/GoogleTTS2Voices.ts";
import { voiceMakerVoiceCache, VoiceMakerVoices } from "./voicemakerin/VoiceMakerVoices.ts";
import ElevenLabs from "./elevenLabsio/ElevenLabs.ts";
import pc from "npm:picocolors";
import { getVoicemakerEffect } from "./voicemakerin/VoiceMakerRequest.ts";

function parseLangCode(value: string): string {
  if (!value.match(/^[a-z]{2,3}(-[A-Z]{2})?$/)) {
    throw new InvalidArgumentError(
      "should be a lang code like en-US, en-GB, es-MX, fr-FR ...",
    );
  }
  return value;
}

function parsePerCent(value: string): number {
  value = value.trim();
  const value2 = value.replace("%", "");
  const parsedValue = parseInt(value2, 10);
  if (value === value2) {
    if (parsedValue > 1 || parsedValue < -1) {
      throw new InvalidArgumentError(
        'Not a valid percent value like ".2", "-0.4", "60%", "-10%"',
      );
    }
    return parsedValue;
  }
  if (parsedValue > 100 || parsedValue < -100) {
    throw new InvalidArgumentError(
      'Not a valid percent value like ".2", "-0.4", "60%", "-10%"',
    );
  }
  return parsedValue / 100;
}

interface SayOption {
  voice?: string;
  speed?: number;
  pitch?: number;
  volume?: number;
  lang?: string;
}

if (import.meta.main) {
  const program = new Command();

  program
    .version("1.1.0")
    .command("list")
    .arguments("[engine]")
    .description("List available voices from an engine")
    .option(
      "-l, --lang <lang>",
      "Display only voice with the correct lang code",
      parseLangCode,
    )
    .action(async function (engine: string, options: SayOption) {
      if (engine === "voicemaker") {
        for (const voice of Object.keys(voiceMakerVoiceCache)) {
          const lang = voiceMakerVoiceCache[voice as VoiceMakerVoices];
          if (options.lang && !lang.includes(options.lang)) continue;
          let dispVoice = voice.padEnd(20);
          dispVoice = pc.yellow(dispVoice);
          const effects = getVoicemakerEffect(voice);
          console.log(
            `${dispVoice} speak ${pc.green(lang.padEnd(6))} supported effect: ${pc.red(effects.join(", "))}`,
          );
        }
        return;
      }
      if (engine === "google") {
        for (const voice of Object.keys(GoogleTTS2Voice)) {
          const info = GoogleTTS2Voice[voice as GoogleVoices];
          const { lang } = options;
          if (lang && !info.langs.find((curLang) => curLang.includes(lang))) {
            continue;
          }
          let langs = info.langs.join(", ");
          langs = pc.green(langs);
          let ssmlGender = info.ssmlGender.padEnd(6);
          if (ssmlGender.startsWith("MALE")) {
            ssmlGender = pc.cyan(ssmlGender);
          } else {
            ssmlGender = pc.red(ssmlGender);
          }
          let dispVoice = voice.padEnd(17);
          dispVoice = pc.yellow(dispVoice);
          console.log(`${dispVoice} is a ${ssmlGender} speaking ${langs}`);
        }
        return;
      }
      if (engine === "watson") {
        for (const voice of ALL_WATSON_VOICES) {
          if (options.lang && !voice.startsWith(options.lang)) continue;
          console.log(`${voice}`);
        }
        return;
      }
      if (engine === "elevenlabs" || engine === "11labs") {
        const provider = new ElevenLabs();
        const voices = await provider.getVoices();
        for (const voice of voices) {
          // for (const lang of model.languages) {
          //     if (options.lang && lang.language_id !== options.lang)
          //         continue
          //     console.log(`modelId: ${model.model_id} speak ${lang.language_id}}`)
          // }
          const voice_id = pc.yellow(voice.voice_id);
          const name = pc.yellow(voice.name.padEnd(10));
          const txt = `${voice_id} name: ${name} [${pc.red(voice.category)}] sample: ${pc.underline(voice.preview_url)}`;
          console.log(txt);
        }
        return;
      }
      console.error(
        `Engine parameter should be on of: ${ALL_ENGINE.join(", ")}`,
      );
      Deno.exit(-1);
    });

  program
    .command("say", { isDefault: true })
    .arguments("<text...>")
    .description("use a TTS engine to make your computer speak")
    .option(
      "-v, --voice <name>",
      "select a voiceMaker, or a google cloud TTS voice",
    )
    .option("-s, --speed <speed>", "customise talk speed", parsePerCent)
    .option("-p, --pitch <pitch>", "customise talk pitch", parsePerCent)
    .option("-l, --lang <lang>", "specify a lang code", parseLangCode)
    .option(
      "-V, --volume <volume>",
      "increate or decrease speech volume",
      parsePerCent,
    )
    .action(async function (texts: string[], options: SayOption) {
      const voice = getVoice(options.voice);
      const engine = getEngine(voice.voice);
      const req = engine.getRequest(texts.join(" "), voice.voice);
      if (options.speed) req.speedPer100 = options.speed;
      if (options.pitch) req.pitchPer100 = options.pitch;
      if (options.volume) req.volumePer100 = options.volume;
      try {
        await engine.say(req);
      } catch (e) {
        console.error(e);
        Deno.exit(-1);
      }
    });
  // process.argv
  program.parse();
}
