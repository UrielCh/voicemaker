# Voicemaker

This Api make your nodeJS app or script speak. [![NPM Version](https://img.shields.io/npm/v/voicemaker.svg?style=api)](https://www.npmjs.org/package/voicemaker)

With this API you can use and compare available TTS APIs from Google, voicemaker.in, IBM Watson, more are comming.

## Configure Environment

### Google cloud

To make Google cloud TTS works, define a `GOOGLE_APPLICATION_CREDENTIALS` env variable:

- Go to your [google console](https://console.cloud.google.com/)
- Create a project
- Activate Google text-to-speech API for your project
- Enable Billing
- create a client
- create and download a json certificate
- set your `GOOGLE_APPLICATION_CREDENTIALS` environment variable to a path to your json certificate file. 

Powershell:
```powershell
$Env:GOOGLE_APPLICATION_CREDENTIALS = "c://pathtoyourCERT"
```

Unix:
```bash
export GOOGLE_APPLICATION_CREDENTIALS="/pathtoyourCERT"
```

Alternatively you can save your certificate in ~/.tts/googlecloud/key.json.


### ElevenLabs

To make elevenlabs TTS works, define an `ELEVENLABS_IO_TOKEN` env variable, log on https://beta.elevenlabs.io/ and go to Profile Settings to get one.

Then put it onto your `ELEVENLABS_IO_TOKEN` valiable.

Powershell:
```powershell
$Env:ELEVENLABS_IO_TOKEN = "123456781234567890abcdef12345678"
```
Unix:
```bash
export ELEVENLABS_IO_TOKEN="123456781234567890abcdef12345678"
```

Alternatively you can save your certificate in ~/.tts/elevenlabs/key.json (as text data).

### Voicemaker

To make voicemaker TTS works, define an `VOICEMAKER_IN_TOKEN` env variable, to get this token, send an E-Mail to `support@voicemaker.in` asking for a developper token.

Then put it onto your `VOICEMAKER_IN_TOKEN` valiable.

Powershell:
```powershell
$Env:VOICEMAKER_IN_TOKEN = "12345678-abcd-1234-1234-1234567890ab"
```
Unix:
```bash
export VOICEMAKER_IN_TOKEN="12345678-abcd-1234-1234-1234567890ab"
```

Alternatively you can save your certificate in ~/.tts/voiceMaker/key.json (as text data).


### IBM Watson

To make IBM watson TTS works, define an `TEXT_TO_SPEECH_APIKEY` and `TEXT_TO_SPEECH_URL` env variable, you can get them from an `ibm-credentials.env` file from https://cloud.ibm.com/


Alternatively you can save your certificate in ~/.tts/watson/key.json (as text data or a json file).


## Usage as a script

This package includes a binary that can use every voice from any script; this script is optimized to let you easily switch between engines, volume, speed, and pitch values, which are normalized to -100% to +100%.

```hash
npm install -g voicemaker
voicemaker --help
```

### Help message
```hash
Usage: voicemaker [options] [command]

Options:
  -V, --version            output the version number
  -h, --help               display help for command

Commands:
  list <engine>            list available voices
  say [options] <text...>  use a TTS engin to make your computer speak
  help [command]           display help for command

```

```hash
Usage: voicemaker say [options] <text...>

use a TTS engine to make your computer speak

Options:
  -v, --voice <name>     select a voiceMaker, IBM watson, or a google cloud TTS voice.
  -s, --speed <speed>    customise talk speed
  -p, --pitch <pitch>    customise talk pitch
  -l, --lang <lang>      specify a lang code
  -V, --volume <volume>  increate or decrease speech volume
  -h, --help             display help for command

```

### List available voices

For google voices
```
voicemaker list google
```

For voicemaker voices
```
voicemaker list voicemaker
```

### Make it talk

Using google free voices
```
voicemaker say hello word
voicemaker say -l es-ES vamos a la playa
```

Using google cloud voices
```
voicemaker say -v fr-FR-Standard-C bienvenue chez nous
```

Using voicemaker voices
```
voicemaker say -v ai2-de-DE-Patrick Willkommen
voicemaker say -v ai2-ja-JP-Ayaka こんにちは
```

## Useage as an API

```
npm install voicemaker
```

This package integrates 3 TTS API:
- the free legacy `translate.google.com` API.
- the google cloud [texttospeech](https://cloud.google.com/text-to-speech) API.
- the [voicemaker.in](https://voicemaker.in/) API.

### Engine translate.google.com

You do not need any configuration to use the legacy google TTS just use the GoogleTTS class.

```typescript
import { GoogleTTS, GoogleTTSRequest } from 'voicemaker';

const engine = new GoogleTTS();
const request = new GoogleTTSRequest('hello');
const filename = await engine.getTts(request);
console.log(`your speech is available in ${filename}`);
// Let it speak using translate.google.com engine
await engine.say(request);
```

### Engine [google cloud TTS](https://cloud.google.com/)


```typescript
import { GoogleTTS2, GoogleTTS2Request } from 'voicemaker';

const engine = new GoogleTTS2();
const request = new GoogleTTS2Request('hello');
const filename = await engine.getTts(request);
console.log(`your speech is available in ${filename}`);
// Let it speak using cloud.google.com engine
await engine.say(request);
```

Advanced usage:

```typescript
import { GoogleTTS2, GoogleTTS2Request } from 'voicemaker';

const engine = new GoogleTTS2();
const request = new GoogleTT2SRequest('hello');
const filename = await engine.getTts(request);
// change the speaker to Ai1 Ivy
request.setVoice("en-GB-Wavenet-D");
// increate pitch by 4 (min value is -20, max is 20)
request.pitch = 2;
// increate volume by 10 (min value is -20, max is 20)
request.volume = 1;
// increate speed by -10 (min value is -96 Db, max is +16Db)
request.speed = -3;

console.log(`your speech is available in ${filename}`);
// Let it speak using cloud.google.com engine
await engine.say(request);
```

### Engine voicemaker.in

To use voicemaker.in API you must define your developer token in the `VOICEMAKER_IN_TOKEN` environment variable.

```typescript
import { VoiceMaker, VoiceMakerRequest } from 'voicemaker';


const engine = new VoiceMaker();
const request = new VoiceMakerRequest('hello');
// change the speaker, and this call will also change the language to es-ES
request.setVoice("ai4-es-ES-Matlab");
const filename = await engine.getTts(request);
console.log(`your speech is available in ${filename}`);
// Let it speak using voicemaker.in
await engine.say(request);
```

Advanced usage:

```typescript
import { VoiceMaker, VoiceMakerRequest } from 'voicemaker';

const engine = new VoiceMaker();
const request = new VoiceMakerRequest('Your very secret password is 123456');
// change the speaker to Ai1 Ivy
request.setVoice("ai1-Ivy");
// increate pitch by 4 (min value is -100, max is 100)
request.pitch = 4;
// increate volume by 10 (min value is -20, max is 20)
request.volume = 10;
// increate speed by -10 (min value is -100, max is +100)
request.speed = -10;
// whisper the message
request.effect = "whispered";
// whisper you password
await engine.say(request);
```

## Notes

### Cache and log

By default, every generated speech will be cached in the ~/.tts directory; a log.txt will also be added and will contain all cached requests.
