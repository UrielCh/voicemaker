# voicemaker

This Api make your nodeJS app speak.

## useage

```
npm install voicemaker
```

This package integrates 2 TTS API, the free legacy `translate.google.com` API, and the cutting edge [voicemaker.in](https://voicemaker.in/) API, it contains lots of tunable voices.


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
request.masterPitch = 4;
// increate volume by 10 (min value is -20, max is 20)
request.masterVolume = 10;
// increate speed by -10 (min value is -100, max is +100)
request.masterSpeed = -10;
// whisper the message
request.Effect = "whispered";
// whisper you password
await engine.say(request);
```

## Notes

### Cache and log

Buy default every generated speech will be cached in the ~/.tts directory, a log.txt will also be added and will conains all cached request.
