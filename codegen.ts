import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "./schema.graphql",
  documents: ["./index.ts"],
  generates: {
    "generate/index.ts": {
      plugins: ["typescript", "typescript-operations"],
      config: {
        flattenGeneratedTypes: true,
      },
    },
  },
};
export default config;
