import { gql } from 'apollo-boost';

const typeDefs = gql`
  extend type Query {
    isLoggedIn: Boolean!
  }
`;

export default typeDefs;
