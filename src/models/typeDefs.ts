import gql from "graphql-tag";

export const typeDefs = gql`
  type Query {
    greetings: String
    welcome(name: String!): String
  }
  #User Model Object
  type User
`;

