import { CommonTTSRequest } from "../common/commonTTSRequest";

export interface ElevenLabsRequestPublicBody {
  text: string;
  model_id?: "eleven_monolingual_v1" | 'eleven_multilingual_v1';
  voice_settings: {
    stability: number;
    similarity_boost: number;
  };
}

export interface ElevenLabsRequestPublic {
  voiceId: string;
  optimize_streaming_latency: number;
  body: ElevenLabsRequestPublicBody;
  // optimize_streaming_latency: this.optimize_streaming_latency,
}

export interface ElevenLabsRequestModel {
  model_id: string;
  name: string;
  can_be_finetuned: boolean;
  can_do_text_to_speech: boolean;
  can_do_voice_conversion: boolean;
  token_cost_factor: number;
  description: string;
  languages: Array<{ language_id: string; name: string }>;
}

export interface ElevenLabsRequestVoice {
  voice_id: string;
  name: string;
  samples: string | null;
  category: "premade" | "custom";
  fine_tuning: {
    model_id: string | null;
    is_allowed_to_fine_tune: boolean;
    fine_tuning_requested: boolean;
    finetuning_state: "not_started" | "in_progress" | "completed" | "failed" | "canceled" | "unknown";
    verification_attempts: null;
    verification_failures: [];
    verification_attempts_count: number;
    slice_ids: null;
  },
  labels: {},
  description: null;
  preview_url: string;
  available_for_tiers: [];
  settings: null;
}

/**
 *
 */
export class ElevenLabsRequest extends CommonTTSRequest {
  voiceId: string;
  modelId?: "eleven_monolingual_v1" | 'eleven_multilingual_v1';
  stability = 0;
  similarityBoost = 0;
  /**
   * 0..22
   */
  optimizeStreamingLatency = 0;

  sampleRate = 0;
  pitch = 0;
  speed = 0;
  pitchPer100 = 0;
  speedPer100 = 0;
  volume = 0;
  volumePer100 = 0;

  setVoice(voiceName: string): void {
    this.voiceId = voiceName;
  }
  
  getVoice(): string {
    return this.voiceId;
  }

  constructor(text: string, voiceId: string) {
    super(text, []);
    this.voiceId = voiceId;
  }

  public summery(): string {
    return [this.text, this.voiceId, this.optimizeStreamingLatency].join(",");
  }

  public filename(): string {
    return `vmkr-${this.hash()}.${this.outputFormat}`;
  }

  /**
   * set the voice.
   */
  setOptimizeStreamingLatency(lvl: number) {
    lvl = lvl | 0;
    if (lvl < 0 || lvl > 22)
      throw Error(
        "optimize_streaming_latency must be contain between 0 and 22"
      );
    this.optimizeStreamingLatency = lvl;
  }

  // getVoice(): string {
  //     return this.voice;
  // }

  toRequest(): ElevenLabsRequestPublic {
    return {
      voiceId: this.voiceId,
      optimize_streaming_latency: this.optimizeStreamingLatency,
      body: {
        text: this.text,
        // model_id: this.modelId,
        voice_settings: {
          similarity_boost: this.similarityBoost,
          stability: this.stability,
        },
      },
    };
  }
}
