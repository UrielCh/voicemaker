import SoundPlayer from "../SoundPlayer";
import { LocalCache } from "./LocalCache";

export abstract class CommonTTS<T> {
    private _player?: SoundPlayer;
    protected cacheDir: LocalCache;

    constructor(cacheDir: string) {
        this.cacheDir = new LocalCache(cacheDir);
    }

    abstract getTts(text: T): Promise<string>;

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