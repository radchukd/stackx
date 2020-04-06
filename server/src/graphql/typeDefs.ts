import { gql } from 'apollo-server-express';
import userTypeDefs from './users/typeDefs';

const queryTypeDefs = gql`
  type Query {
    login(input: AuthInput!): String
    getUser: UserType
  }
`;

const mutationTypeDefs = gql`
  type Mutation {
    signup(input: AuthInput!): String
    updateProfile(input: UpdateProfileInput!): UserType
    updateEmail(input: String): UserType
    updatePassword(input: String): UserType
    deleteUser: String
  }
`;

const typeDefs = [
  queryTypeDefs,
  mutationTypeDefs,
  userTypeDefs,
];
export default typeDefs;
