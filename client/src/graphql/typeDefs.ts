import { gql } from 'apollo-boost';
import { DocumentNode } from 'graphql';

const typeDefs: DocumentNode = gql`
  extend type Query {
    q: String
  }
`;

export default typeDefs;
