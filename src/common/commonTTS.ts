import SoundPlayer from "../SoundPlayer";
import { CommonTTSRequest } from "./commonTTSRequest";
import { LocalCache } from "./LocalCache";

export abstract class CommonTTS<T extends CommonTTSRequest, TokenType = string> {
    private _player?: SoundPlayer;
    protected cacheDir: LocalCache;
    public userAgent: string = `VoiceMaker (https://github.com/UrielCh/voicemaker)`;

    constructor(cacheDir: string) {
        this.cacheDir = new LocalCache(cacheDir);
    }


    abstract getToken(): Promise<TokenType>;

    abstract getTts(text: T): Promise<string>;

    abstract stream(text: T): Promise<NodeJS.ReadableStream>;

    /**
     * a new Request had been submited
     */
    public async log(request: T): Promise<void> {
        await this.cacheDir.log(request);
    }

    public async say(request: T): Promise<string> {
        const file = await this.getTts(request);
        if (!this._player)
            this._player = new SoundPlayer();
        await this._player.play(file);
        return file;
    }

    set player(player: SoundPlayer) {
        this.player = player;
    }

    abstract getRequest(text: string, voice?: string | null): T;
}