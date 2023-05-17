# changelog

# v 1.1.2

* make getToken(): Promise<string> public in engines
* add exports

# v 1.1.1

- add elevenlabs in engine list
- list voicemaker available effect
- update Google cloud voices list
- add colors on stdout outputs
- display process time
 
# v 1.1.0

- add elevenlabs driver

# v 1.0.0

- Hotfix: fix setters for voicemaker configuration (pitch, speed, volume)
- project contains CJS + ESM exports
- update voiceMakerVoice list
  
# v 0.2.3

- replace got by axios
- add log error on watson failure

# v 0.2.2

- improve cli add list engine
- improve cli allow voice listing filtered by lang

## v 0.2.1

- update voicemaker.in voicelist

## v 0.2.0

- fix EOL import
- add IBM watson API
- change default export
- remove stdout and stderr output

## v 0.1.5

- add Missing EOL in log.txt

## v 0.1.4

- add GoogleVoices, ALL_GOOGLE_VOICES exports

## v 0.1.3

- add getter/setter for outputFormat in all requests

## v 0.1.2

- add getEngine and getVoice method for generate speech genericaly
- add getRequest(text, voice) in all engines.

## v 0.1.1

- token can not be store in  ~/.tts/voiceMaker/key.json for voicemaker and ~/.tts/googlecloud/key.json for google cloud

## v 0.1.0

- add Google cloud TTS
- refactor Requesrt object
- enable Logs
- improved say function
- add voicemaker binary

## v 0.0.4

- update doc

## v 0.0.3

- improve README.md
- update package.json
- add backlog in log.txt files
- fix cache for google translate engine
- add abstract class to clean code

## v 0.0.2

- add ALL_VOICEMAKE_VOICES export
- add CHANGELOG.md
- fill README.md

## v 0.0.1

- initial version