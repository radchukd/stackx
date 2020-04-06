import gql from 'graphql-tag';
import { DocumentNode } from 'graphql';

const GET_USER: DocumentNode = gql`
  query GetUserQuery {
    getUser {
      _id
      email
      profile {
        firstName
        lastName
      }
    }
  }
`;

export default GET_USER;
