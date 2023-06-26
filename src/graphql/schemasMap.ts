import "graphql-import-node";
import * as userTypeDefs from "./schemas/user.gql";
import { makeExecutableSchema } from "graphql-tools";
// import resolvers from "./resolversMap";
import { GraphQLSchema } from "graphql";
const schema: GraphQLSchema = makeExecutableSchema({
  typeDefs: [userTypeDefs],
  //   resolvers,
});

export default schema;
