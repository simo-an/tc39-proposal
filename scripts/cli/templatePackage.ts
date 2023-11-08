function createPackage(subModule: string, version: string) {
  const template = `
{
  "name": "@tc39-proposal/${subModule}",
  "version": "${version}",
  "description": "TC39 proposal: Implementation of ${subModule}",
  "main": "dist/tc39_proposal-${subModule}.js",
  "module": "dist/tc39_proposal-${subModule}.esm.mjs",
  "types": "dist/index.d.ts",
  "files": [
    "dist"
  ],
  "scripts": {
    "dev": "pnpm run build-bundle-dev -w",
    "build": "tsx scripts/build.ts",
    "build-dev": "tsx scripts/build.ts --dev",
    "test": "tsx __test__/index.ts",
    "format": "prettier --write --parser typescript src/**/*.ts index.ts",
    "precommit": "lint-staged"
  },
  "lint-staged": {
    "(src|__test__)/**/*.ts": [
      "prettier --write"
    ]
  },
  "author": "simu",
  "keywords": [
    "tc39",
    "tc39 proposal",
    "${subModule}"
  ],
  "license": "MIT",
  "repository": {
    "type": "git",
    "url": "git+https://github.com/simo-an/tc39-proposal.git"
  },
  "homepage": "https://github.com/simo-an/tc39-proposal/tree/main/packages/${subModule}",
  "bugs": {
    "url": "https://github.com/simo-an/tc39-proposal/issues"
  },
  "dependencies": {},
  "devDependencies": {}
}
  `;

  return template.trim();
}

export { createPackage };
