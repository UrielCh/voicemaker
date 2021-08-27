import SoundPlayer from "../SoundPlayer";
import { CommonTTSRequest } from "./commonTTSRequest";
import { LocalCache } from "./LocalCache";
export abstract class CommonTTS<T extends CommonTTSRequest> {
    private _player?: SoundPlayer;
    protected cacheDir: LocalCache;

    constructor(cacheDir: string) {
        this.cacheDir = new LocalCache(cacheDir);
    }

    abstract getTts(text: T): Promise<string>;

    /**
     * a new Request had been submited
     */
    public async log(request: T): Promise<void> {
        await this.cacheDir.log(request);
    }

    public async say(text: T): Promise<string> {
        const file = await this.getTts(text);
        if (!this._player)
            this._player = new SoundPlayer();
        await this._player.play(file);
        return file;
    }

    set player(player: SoundPlayer) {
        this.player = player;
    }
}