import gql from 'graphql-tag';
import { DocumentNode } from 'graphql';
import userTypeDefs from './users/typeDefs';

const queryTypeDefs: DocumentNode = gql`
  type Query {
    login(input: AuthInput!): String
    getUser: UserType
  }
`;

const mutationTypeDefs: DocumentNode = gql`
  type Mutation {
    signup(input: AuthInput!): String
    updateProfile(input: UpdateProfileInput!): UserType
    updateEmail(input: String): UserType
    updatePassword(input: String): UserType
    deleteUser: String
  }
`;

const typeDefs: DocumentNode[] = [
  queryTypeDefs,
  mutationTypeDefs,
  userTypeDefs,
];
export default typeDefs;
