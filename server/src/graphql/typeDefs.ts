import gql from 'graphql-tag';
import { DocumentNode } from 'graphql';

const queryTypeDefs: DocumentNode = gql`
  type Query {
    q: String
  }
`;

const mutationTypeDefs: DocumentNode = gql`
  type Mutation {}
`;

const typeDefs: DocumentNode[] = [
  queryTypeDefs,
  mutationTypeDefs,
];

export default typeDefs;
