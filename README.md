# voicemaker

This Api make your nodeJS app speak.

## useage

```
npm install voicemaker
```

this packages integrate 2 TTS api, the free legacy `translate.google.com` API, and the cutting edge [voicemaker.in](https://voicemaker.in/) api, conatining lots of tunnable voices.


### translate.google.com

You do not need any configuration to use the legacy google TTS just use the GoogleTTS class.


```
import { GoogleTTS, GoogleTTSRequest } from 'voicemaker';


const engine = new GoogleTTS();
const request = new GoogleTTSRequest('hello');

const filename = await engine.getTts(request);
console.log(`your speetch is avaiable in ${filename}`);
// let it speek using translate.google.com engine
await engine.say(request);
```

### voicemaker.in

to use voicemaker.in API you must define your developper token in the `VOICEMAKER_IN_TOKEN` environement variable.

```
import { VoiceMaker, VoiceMakerRequest } from 'voicemaker';


const engine = new VoiceMaker();
const request = new VoiceMakerRequest('hello');
// change the speeker, this call will allso change the language to es-ES
request.setVoice("ai4-es-ES-Matlab");
const filename = await engine.getTts(request);
console.log(`your speetch is avaiable in ${filename}`);
// let it speek using voicemaker.in
await engine.say(request);
```

## note

Buy default every generated speech will be cached in the ~/.tts directory.