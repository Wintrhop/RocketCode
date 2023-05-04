import gql from "graphql-tag";

export const typeDefs = gql`
  type Query {
    Users: [User]
    User(id: ID!): User!
  }
  #User Model Object
  type User {
    id: ID
    name: String
    projectValue: Int
    projectDepartment: String
    city: String
  }
  #UserMutation
  type Mutation {
    create(
      name: String
      projectValue: Int
      projectDepartment: String
      city: String
    ): User
  }
`;
