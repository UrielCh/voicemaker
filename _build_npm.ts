// dnt deps can not be moved to dev_deps.ts
import { build, emptyDir, type PackageJson } from "https://deno.land/x/dnt@0.40.0/mod.ts";
import * as pc from "https://deno.land/std@0.189.0/fmt/colors.ts";

export async function buildDnt() {
  let version = Deno.args[0];
  const GITHUB_REF = Deno.env.get("GITHUB_REF");
  const PKG_VERSION = Deno.env.get("PKG_VERSION");

  if (!version) {
    if (PKG_VERSION) {
      console.log(`NPM_VERSION values is "${pc.green(PKG_VERSION)}"`);
      version = PKG_VERSION;
    } else if (GITHUB_REF) {
      // drop the ref/tag/ and the v prefix
      version = GITHUB_REF.replace(/^.+\/[vV]?/g, "");
      console.log(
        `GITHUB_REF values is ${
          pc.green(
            GITHUB_REF,
          )
        } will be used as version: "${pc.green(version)}"`,
      );
    }
  }

  if (!version) {
    console.error("Missing version number");
    console.error("usage: deno run -A _build_npm.ts v0.0.0");
    Deno.exit(-1);
  }
  // allow only semver string
  if (!version.match(/[\d]+\.[\d]+\.[\d]+/)) {
    console.error(
      `version number ${pc.green(version)} do not match Semantic Versioning syntax ${pc.green("major.minor.path")}`,
    );
    Deno.exit(-1);
  }

  const packageJson: PackageJson = {
    name: "voicemaker",
    author: "Uriel Chemouni <uchemouni@gmail.com> (https://uriel.ovh/)",
    license: "MIT",
    funding: "https://github.com/UrielCh/voicemaker?sponsor=1",
    contributors: [
      // "Uriel Chemouni <uchemouni@gmail.com> (https://uriel.ovh/)",
    ],
    description: "Make your nodeJs speak",
    keywords: [
      "elevenlabs",
      "voicemaker",
      "voicemaker.in",
      "translate.google.com",
      "google-tts",
      "cloud.ibm.com",
      "watson",
      "text-to-speech",
      "tts",
    ],
    private: false,
    homepage: "https://github.com/UrielCh/voicemaker#readme",
    version,
    // bin: {
    //   "voicemaker": "bin/voicemaker"
    // },
    repository: {
      type: "git",
      url: "git+https://github.com/UrielCh/voicemaker.git",
    },
    bugs: {
      url: "https://github.com/UrielCh/voicemaker/issues",
    },
  };

  await emptyDir("./npm");
  await build({
    // entryPoints: ["./mod.ts"], // , "./main.ts"
    // entryPoints: ["./main.ts"], // , "./main.ts"
    entryPoints: [{ name: ".", path: "mod.ts", kind: "export" }, { name: "voicemaker", path: "main.ts", kind: "bin" }],
    outDir: "./npm",
    test: false,
    shims: {
      deno: true,
    },
    typeCheck: "both",
    compilerOptions: {},
    package: packageJson,
  });
  // post build steps
  Deno.copyFileSync("LICENSE", "npm/LICENSE");
  let readme = Deno.readTextFileSync("README.md");
  readme = readme.replaceAll(
    /https:\/\/deno.land\/x\/logger@v[0-9.]+\/(logger|mod)\.ts/g,
    "@denodnt/logger",
  );
  Deno.writeTextFileSync("npm/README.md", readme);
  Deno.mkdirSync("npm/bin");
  const binFile = "npm/bin/voicemaker";
  Deno.writeTextFileSync(
    binFile,
    `#!/usr/bin/env node
require('../script/main.js');
`,
  );
  Deno.chmodSync(binFile, 0o755);
}

if (import.meta.main) {
  buildDnt();
}
