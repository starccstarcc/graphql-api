import type { CodegenConfig } from "@graphql-codegen/cli";

const PORT = process.env.PORT || 3000;

const config: CodegenConfig = {
  overwrite: true,
  schema: `http://localhost:${PORT}`,
  generates: {
    "src/graphql/**/*.ts": {
      plugins: ["typescript", "typescript-resolvers", "typescript-mongodb"],
      presetConfig: {
        gqlTagName: "gql",
      },
    },
    "./graphql.schema.json": {
      plugins: ["introspection"],
    },
  },
};

export default config;
