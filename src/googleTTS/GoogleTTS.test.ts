// import { createWriteStream } from "node:fs";
import { getEngine } from "../mod.ts";
import { once } from "node:events";

async function doTest() {
  console.log(`Start Test`);
  const freeEngine = getEngine("");
  const start = Date.now();
  console.log(`Get Voice ${start}`);
  const speech = `${start.toString()} will take ${start.toString()} to read`;
  const req = freeEngine.getRequest(speech);
  const stream = await freeEngine.stream(req);
  const streamReady = Date.now() - start;
  let streamStart = 0;
  let pkg = 0;
  stream.on("data", () => {
    pkg++;
    if (!streamStart) {
      streamStart = Date.now() - start;
    }
  });
  await once(stream, "end");

  console.log("wait for end");
  // await once(stream, 'error').then(([err]) => { console.log(err); })
  const done = Date.now() - start;
  console.log(`Stream ready     after ${streamReady}ms`);
  console.log(`Stream first pkg after ${streamStart}ms (total ${pkg} pkgs)`);
  console.log(`Stream complet   after ${done}ms`);
  console.log();
  console.log(`Stream gain is ${done - streamStart}ms`);
}

doTest().then(console.log, console.error);
