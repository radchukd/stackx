import { gql } from 'apollo-boost';
import { DocumentNode } from 'graphql';

const typeDefs: DocumentNode = gql`
  extend type Query {
    isLoggedIn: Boolean!
  }
`;

export default typeDefs;
