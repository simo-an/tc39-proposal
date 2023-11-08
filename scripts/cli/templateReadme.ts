function createReadme(subModule: string) {
  const template = `
## TC39 proposal

https://github.com/tc39/proposal-xxxxxx

https://tc39.es/proposal-xxxxxx

## Install

Install \`@tc39-proposal/${subModule}\` by \`pnpm\`

\`\`\`bash
pnpm add @tc39-proposal/${subModule}
\`\`\`

## Usage

\`\`\`ts
import {  } from "@tc39-proposal/${subModule}";

\`\`\`

## Functions

### Func1

\`\`\`ts
import {  } from "@tc39-proposal/${subModule}";

\`\`\`

## Others

Welcome to contribute and make @tc39-proposal/${subModule} better!
`;

  return template.trim();
}

export { createReadme };
