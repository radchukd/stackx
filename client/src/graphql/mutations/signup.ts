import gql from 'graphql-tag';
import { DocumentNode } from 'graphql';

const SIGNUP: DocumentNode = gql`
  mutation SignupMutation($input: AuthInput!) {
    signup(input: $input)
  }
`;

export default SIGNUP;
