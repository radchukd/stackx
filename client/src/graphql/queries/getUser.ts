import gql from 'graphql-tag';

const GET_USER = gql`
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
