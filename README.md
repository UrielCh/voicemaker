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

to use voicemaker.in API you must define your developper token in the `VOICEMAKER_IN_TOKEN` environement variable.

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

## Notes


### Cache and log

Buy default every generated speech will be cached in the ~/.tts directory, a log.txt will also be added and will conains all cached request.
