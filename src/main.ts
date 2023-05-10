import commander, { Command } from 'commander';
import { ALL_WATSON_VOICES } from '.';
import { ALL_ENGINE, getEngine, getVoice } from './common/utils';
import { GoogleTTS2Voice, GoogleVoices } from './googleTTS2/GoogleTTS2Voices';
import { voiceMakerVoiceCache, VoiceMakerVoices } from './voicemakerin/VoiceMakerVoices';
import ElevenLabs from './elevenLabsio/ElevenLabs';

function parseLangCode(value: string): string {
    if (!value.match(/^[a-z]{2,3}(-[A-Z]{2})?$/))
        throw new commander.InvalidArgumentError('should be a lang code like en-US, en-GB, es-MX, fr-FR ...');
    return value;
}

function parsePerCent(value: string): number {
    value = value.trim();
    const value2 = value.replace('%', '');
    const parsedValue = parseInt(value2, 10);
    if (value === value2) {
        if (parsedValue > 1 || parsedValue < -1) {
            throw new commander.InvalidArgumentError('Not a valid percent value like ".2", "-0.4", "60%", "-10%"');
        }
        return parsedValue;
    }
    if (parsedValue > 100 || parsedValue < -100) {
        throw new commander.InvalidArgumentError('Not a valid percent value like ".2", "-0.4", "60%", "-10%"');
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

const program = new Command();

program.version('1.0.1')
    .command('list')
    .arguments('[engine]')
    .description('List available voices from an engine')
    .option('-l, --lang <lang>', 'Display only voice with the correct lang code', parseLangCode)
    .action(async function (engine: string, options: SayOption) {
        if (engine === 'voicemaker') {
            for (const voice of Object.keys(voiceMakerVoiceCache)) {
                const lang = voiceMakerVoiceCache[voice as VoiceMakerVoices];
                if (options.lang && !lang.includes(options.lang))
                    continue
                console.log(`${voice} speak ${lang}`)
            }
            return;
        }
        if (engine === 'google') {
            for (const voice of Object.keys(GoogleTTS2Voice)) {
                const info = GoogleTTS2Voice[voice as GoogleVoices];
                if (options.lang && !info.lang.includes(options.lang))
                    continue
                console.log(`${voice} is a ${info.ssmlGender} speaking ${info.lang}`)
            }
            return
        }
        if (engine === 'watson') {
            for (const voice of ALL_WATSON_VOICES) {
                if (options.lang && !voice.startsWith(options.lang))
                    continue
                console.log(`${voice}`);
            }
            return
        }
        if (engine === 'elevenlabs' || engine === '11labs') {
            const provider = new ElevenLabs();
            const voices = await provider.getVoices();
            for (const voice of voices) {
                // for (const lang of model.languages) {
                //     if (options.lang && lang.language_id !== options.lang)
                //         continue
                //     console.log(`modelId: ${model.model_id} speak ${lang.language_id}}`)
                // }
                console.log(`${voice.voice_id} name: ${voice.name} [${voice.category}] sample: ${voice.preview_url}`)
            }
            return
        }
        console.error(`Engine parameter should be on of: ${ALL_ENGINE.join(', ')}`);
        process.exit(-1)
    });


program.command('say', { isDefault: true })
    .arguments('<text...>')
    .description('use a TTS engine to make your computer speak')
    .option('-v, --voice <name>', 'select a voiceMaker, or a google cloud TTS voice')
    .option('-s, --speed <speed>', 'customise talk speed', parsePerCent)
    .option('-p, --pitch <pitch>', 'customise talk pitch', parsePerCent)
    .option('-l, --lang <lang>', 'specify a lang code', parseLangCode)
    .option('-V, --volume <volume>', 'increate or decrease speech volume', parsePerCent)
    .action(async function (texts: string[], options: SayOption) {
        const voice = getVoice(options.voice);
        const engine = getEngine(voice.voice);
        const req = engine.getRequest(texts.join(' '), voice.voice);
        if (options.speed)
            req.speedPer100 = options.speed;
        if (options.pitch)
            req.pitchPer100 = options.pitch;
        if (options.volume)
            req.volumePer100 = options.volume;
        try {
            await engine.say(req);
        } catch (e) {
            console.error(e);
            process.exit(-1);
        }
    });

program.parse(process.argv);