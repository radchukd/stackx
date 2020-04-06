import gql from 'graphql-tag';
import { DocumentNode } from 'graphql';

const IS_LOGGED_IN: DocumentNode = gql`
  query IsUserLoggedIn {
    isLoggedIn @client
  }
`;

export default IS_LOGGED_IN;
