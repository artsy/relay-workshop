// Helps us avoid a missing type error on `import graphQLSchema from './schema/fakeArtsy.graphql';`
declare module "*.graphql" {
  import { DocumentNode } from "graphql"

  const value: DocumentNode
  export = value
}
