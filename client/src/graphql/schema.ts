import { gql } from 'apollo-boost';
import { DocumentNode } from 'graphql';

export const cacheData = {
  isLoggedIn: !!localStorage.getItem('authToken'),
};

export const typeDefs: DocumentNode = gql`
  extend type Query {
    isLoggedIn: Boolean!
  }
`;

export const resolvers = {
  Mutation: {},
  Query: {},
};
