import { gql } from 'apollo-server-express';

const userTypeDefs = gql`
  type UserProfileType {
    firstName: String
    lastName: String
  }

  type UserType {
    _id: ID!
    email: String!
    createdAt: String!
    updatedAt: String!
    profile: UserProfileType
  }

  input AuthInput {
    email: String!
    password: String!
  }

  input UpdateProfileInput {
    firstName: String
    lastName: String
  }
`;

export default userTypeDefs;
