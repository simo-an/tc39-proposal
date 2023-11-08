let workspace = process.argv[2];
let subModule = process.argv[3];

if (!subModule && workspace.includes("/")) {
  [workspace, subModule] = workspace.split("/");
}

console.warn(`workspace is: ${workspace}`);
console.warn(`subModule is: ${subModule}`);

if (!workspace) {
  throw new Error("please provide workspace!");
}
if (!subModule) {
  throw new Error("please provide subModule!");
}

import pkg from "../package.json" assert { type: "json" };

import { mkdirSync, writeFileSync, existsSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import { createPackage } from "./cli/templatePackage";
import { createReadme } from "./cli/templateReadme";
import { createTsConfig } from "./cli/templateTsConfig";
import { createRollupConfig } from "./cli/templateRollConfig";
import { createEnvDeclare } from "./cli/templateEnvDeclare";
import { createEntry, createTestDemo } from "./cli/templateEntry";
import { createBuildScript } from "./cli/templateBuild";

const __dirname = dirname(fileURLToPath(import.meta.url));
const baseDir = resolve(__dirname, `../${workspace}/${subModule}`);

if (existsSync(baseDir)) {
  throw new Error(`SubModule: ${subModule} already exists!`);
}

mkdirSync(baseDir, { recursive: true });

const projectDirs = ["__test__", "scripts", "src"];
const projectFiles = {
  "package.json": createPackage(subModule, pkg.version),
  "README.md": createReadme(subModule),
  "tsconfig.json": createTsConfig(subModule),
  "rollup.config.ts": createRollupConfig(subModule),
  "env.d.ts": createEnvDeclare(subModule),
  "index.ts": createEntry(subModule),
  "scripts/build.ts": createBuildScript(subModule),
  "__test__/index.ts": createTestDemo(subModule),
};

projectDirs.forEach((dir) => {
  mkdirSync(resolve(baseDir, dir), { recursive: true });
});

Object.entries(projectFiles).forEach(([file, content]) => {
  writeFileSync(resolve(baseDir, file), content.trim());
});

console.info("done! please run: ");
console.info("--------------------");
console.info("pnpm i");
console.info(`pnpm -F=./${workspace}/${subModule} run build`);
console.info("--------------------");
