import gql from "graphql-tag";

export const typeDefs = gql`
  type Query {
    greetings: String
    welcome(name: String!): String
  }
  #User Model Object
  type User {
  id:ID
  name:String
  projectValue:Int
  projectDepartment:String
  city:String
  }
  #User Mutation
  type Mutation {
    create(name: String, projectValue: Int, projectDepartment: String, city): User
  }
`;
