function createReadme(subModule: string) {
  const template = `
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
