import child_process from "node:child_process";
import os from "node:os";
import { promisify } from "node:util";

const players = [
  "mplayer",
  "afplay",
  "mpg123",
  "mpg321",
  "play",
  "omxplayer",
  "aplay",
  "cmdmp3",
];

const platform = os.platform();

const execPromise = promisify(child_process.exec);

function isExec(command: string) {
  try {
    child_process.execSync(command);
    return true;
  } catch (_e) {
    return false;
  }
}

function findCommand(command: string) {
  if (/^win/.test(platform)) {
    return "where " + command;
  } else {
    return "command -v " + command;
  }
}

/**
 * find a binary on the host
 */
function findExec(args: string[]): string {
  const commands = Array.isArray(args[0])
    ? args[0]
    : Array.prototype.slice.apply(args);
  let command = "";
  commands.some(function (c) {
    if (isExec(findCommand(c))) {
      command = c;
      return true;
    }
  });
  return command;
}

let playError = 0;

/**
 * A basic sound player
 */
export class SoundPlayer {
  private players: string[];
  private player: string;

  constructor(opts?: { players?: string[]; player?: string }) {
    opts = opts || {};
    this.players = opts.players || players;
    this.player = opts.player || findExec(this.players);
  }

  public async playOS(path: string): Promise<void> {
    const playCommand = Deno.build.os == "darwin"
      ? `afplay ${path}`
      : `start ${path}`;
    try {
      await execPromise(playCommand);
    } catch (_err) {
      if (0 == playError++) {
        console.error("Not able to play any sound on thie computer");
      }
    }
  }

  public play(
    what: string,
    options?: child_process.SpawnOptionsWithoutStdio,
  ): Promise<void> {
    if (!this.player) {
      return this.playOS(what);
    }
    return new Promise((success, reject) => {
      options = options || {};
      if (!what) {
        reject(new Error("No audio file specified"));
      }
      if (!this.player) {
        reject(new Error("Couldn't find a suitable audio player"));
      }
      const process = child_process.spawn(this.player, [what], options);
      process.on("close", function (err) {
        if (err) {
          reject(err);
        }
        success();
      });
    });
  }
}

export default SoundPlayer;
