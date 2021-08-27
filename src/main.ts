import commander, { Command } from 'commander';
import { GoogleTTS } from './googleTTS/GoogleTTS';
import { GoogleTTSRequest } from './googleTTS/GoogleTTSRequest';
import GoogleTTS2 from "./googleTTS2/GoogleTTS2";
import { GoogleTTS2Request } from "./googleTTS2/GoogleTTS2Request";
import { GoogleTTS2Voice, GoogleVoices } from './googleTTS2/GoogleTTS2Voices';
import VoiceMaker from './voicemakerin/VoiceMaker';
import { VoiceMakerRequest } from './voicemakerin/VoiceMakerRequest';
import { voiceMakerVoiceCache, VoiceMakerVoices } from './voicemakerin/VoiceMakerVoices';

interface VoiceSelectionVM {
    type: 'voicemaker',
    voice: VoiceMakerVoices;
}

interface VoiceSelectionGo {
    type: 'google',
    voice: GoogleVoices,
}

function parseLangCode(value: string, dummyPrevious: string): string {
    if (!value.match(/^[a-z]{2,3}-[A-Z]{2}$/))
        throw new commander.InvalidArgumentError('should be a lang code like en-US, en-GB, es-MX, fr-FR ...');
    return value;
}

function parsePerCent(value: string, dummyPrevious: number): number {
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

function getVoice(voice?: string): VoiceSelectionVM | VoiceSelectionGo | null {
    if (!voice)
        return null;
    if (voiceMakerVoiceCache[voice as VoiceMakerVoices]) {
        return {
            type: 'voicemaker',
            voice: voice as VoiceMakerVoices,
        }
    }
    if (GoogleTTS2Voice[voice as GoogleVoices]) {
        return {
            type: 'google',
            voice: voice as GoogleVoices,
        }
    }
    console.error(`unknown voice ${voice}, switch back to default voice`)
    return null;
}

interface SayOption {
    voice?: string;
    speed?: number;
    pitch?: number;
    volume?: number;
    lang?: string;
}

const program = new Command();

program.version('0.1.0')
    .command('list')
    .arguments('<engine>')
    .description('list available voices')
    .action(function (engine: string) {
        if (engine === 'voicemaker') {
            for (const voice of Object.keys(voiceMakerVoiceCache)) {
                const lang = voiceMakerVoiceCache[voice as VoiceMakerVoices];
                console.log(`${voice} speak ${lang}`)
            }
            return;
        }
        if (engine === 'google') {
            for (const voice of Object.keys(GoogleTTS2Voice)) {
                const info = GoogleTTS2Voice[voice];
                console.log(`${voice} is a ${info.ssmlGender} speaking ${info.lang}`)
            }
            return
        }
        console.error(`engine parameter should be voicemaker of google`);
        process.exit(-1)
    });


program.command('say', {isDefault: true})
    .arguments('<text...>')
    .description('use a TTS engin to make your computer speek')
    .option('-v, --voice <name>', 'select a voiceMaker, or a google cloud TTS voice')
    .option('-s, --speed <speed>', 'customise talk speed', parsePerCent)
    .option('-p, --pitch <pitch>', 'customise talk pitch', parsePerCent)
    .option('-l, --lang <lang>', 'specify a lang code', parseLangCode)
    .option('-V, --volume <volume>', 'increate or decrease speech volume', parsePerCent)
    .action(function (texts: string[], options: SayOption) {
        const voice = getVoice(options.voice);
        if (!voice) {
            const engine = new GoogleTTS();
            const req = new GoogleTTSRequest(texts.join(' '));
            if (options.lang)
                req.lang = options.lang;
            if (options.speed && options.speed < 0)
                req.slow = true;
            engine.say(req);
            return;
        }
        if (voice.type === 'google') {
            const engine = new GoogleTTS2();
            const req = new GoogleTTS2Request(texts.join(' '), voice.voice);
            if (options.speed)
                req.speedPer100 = options.speed;
            if (options.pitch)
                req.pitchPer100 = options.pitch;
            if (options.volume)
                req.volumePer100 = options.volume;
            engine.say(req);
            return;
        }
        if (voice.type === 'voicemaker') {
            const engine = new VoiceMaker();
            const req = new VoiceMakerRequest(texts.join(' '));
            req.setVoice(voice.voice);
            if (options.speed)
                req.speedPer100 = options.speed;
            if (options.pitch)
                req.pitchPer100 = options.pitch;
            if (options.volume)
                req.volumePer100 = options.volume;
            engine.say(req);
            return;
        }
    });

program.parse(process.argv);