import { homedir } from "node:os";
import path from "node:path";
import fs from "node:fs";
import { CommonTTS } from "../common/commonTTS.ts";
import { WatsonRequest } from "./WatsonRequest.ts";
import axios, { AxiosResponse } from "axios";
import { Buffer } from "../deps.ts";

export class Watson extends CommonTTS<
  WatsonRequest,
  { TEXT_TO_SPEECH_APIKEY: string; TEXT_TO_SPEECH_URL: string }
> {
  /**
   * Dallas: https://api.us-south.text-to-speech.watson.cloud.ibm.com
   * Washington DC: https://api.us-east.text-to-speech.watson.cloud.ibm.com
   * Frankfurt: https://api.eu-de.text-to-speech.watson.cloud.ibm.com
   * Sydney: https://api.au-syd.text-to-speech.watson.cloud.ibm.com
   * Tokyo: https://api.jp-tok.text-to-speech.watson.cloud.ibm.com
   * London: https://api.eu-gb.text-to-speech.watson.cloud.ibm.com
   * Seoul: https://api.kr-seo.text-to-speech.watson.cloud.ibm.com
   */

  constructor(cacheDir?: string) {
    super(cacheDir || path.join(homedir(), ".tts", "watson"));
  }

  public async getToken(): Promise<
    { TEXT_TO_SPEECH_APIKEY: string; TEXT_TO_SPEECH_URL: string }
  > {
    let TEXT_TO_SPEECH_APIKEY = Deno.env.get("TEXT_TO_SPEECH_APIKEY");
    let TEXT_TO_SPEECH_URL = Deno.env.get("TEXT_TO_SPEECH_URL");

    if (!TEXT_TO_SPEECH_APIKEY) {
      const key = await this.cacheDir.getKey();
      if (key) {
        let data = await fs.promises.readFile(key, { encoding: "utf-8" });

        let m = data.match(/https:\/\/[^"]+/);
        if (m) {
          TEXT_TO_SPEECH_URL = m[0];
          data = data.replace(TEXT_TO_SPEECH_URL, "");
        } else {
          throw Error(`can not found TEXT_TO_SPEECH_URL end point in ${key}`);
        }

        m = data.match(/[a-zA-Z0-9_]{44}/);
        if (m) {
          Deno.env.set("TEXT_TO_SPEECH_APIKEY", m[0]);
          TEXT_TO_SPEECH_APIKEY = m[0];
        } else {
          throw Error(`can not found TEXT_TO_SPEECH_APIKEY api key in ${key}`);
        }
      }
    }
    if (!TEXT_TO_SPEECH_APIKEY || !TEXT_TO_SPEECH_URL) {
      throw Error(
        `Missing TEXT_TO_SPEECH_URL and TEXT_TO_SPEECH_APIKEY environement variable, or token in ~/.tts/watson/key.json file.`,
      );
    }
    return { TEXT_TO_SPEECH_APIKEY, TEXT_TO_SPEECH_URL };
  }

  async getTts(request: WatsonRequest): Promise<string> {
    const { file, exists } = await this.cacheDir.getRequestCache(request);
    if (exists) {
      return file;
    }
    const { TEXT_TO_SPEECH_APIKEY, TEXT_TO_SPEECH_URL } = await this.getToken();
    try {
      const { text, voice, accept } = request.toRequest();
      const API_URL = `${TEXT_TO_SPEECH_URL}/v1/synthesize?voice=${voice}`;
      const headers = {
        "user-agent": this.userAgent,
        "Content-Type": "application/json",
        "Accept": accept,
      };
      const resp = await axios.post<string, AxiosResponse<Buffer>>(
        API_URL,
        JSON.stringify({ text }),
        {
          // searchParams: { voice }, // , accept, text
          auth: {
            username: "apikey",
            password: TEXT_TO_SPEECH_APIKEY,
          },
          headers,
          responseType: "arraybuffer",
        },
      );
      if (resp.status === 200) {
        await fs.promises.writeFile(file, resp.data);
        await super.log(request);
      } else {
        throw Error(
          `Access Watson failed with response ${JSON.stringify(resp.data)}`,
        );
      }
    } catch (e) {
      // console.error('Failed to generarte voice');
      throw e;
    }
    return file;
  }

  public stream(_request: WatsonRequest): Promise<NodeJS.ReadableStream> {
    throw Error("not Implemented yet");
  }

  getRequest(text: string, voice?: string): WatsonRequest {
    return new WatsonRequest(text, voice);
  }
}
