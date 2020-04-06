import gql from 'graphql-tag';
import { DocumentNode } from 'graphql';

const LOGIN: DocumentNode = gql`
  query LoginQuery($input: AuthInput!) {
    login(input: $input)
  }
`;

export default LOGIN;
