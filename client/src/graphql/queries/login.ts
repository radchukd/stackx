import gql from 'graphql-tag';

const LOGIN = gql`
  query LoginQuery($input: AuthInput!) {
    login(input: $input)
  }
`;

export default LOGIN;
