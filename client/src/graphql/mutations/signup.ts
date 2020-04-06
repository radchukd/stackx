import gql from 'graphql-tag';

const SIGNUP = gql`
  mutation SignupMutation($input: AuthInput!) {
    signup(input: $input)
  }
`;

export default SIGNUP;
