import gql from 'graphql-tag';
import database from '../src/config/db';
import { query, mutate } from '.';

// Queries
const LOGIN_QUERY = gql`
  query LoginQuery($input: AuthInput!) {
    login(input: $input)
  }
`;

const GET_USER_QUERY = gql`
  query GetUserQuery {
    getUser {
      _id
    }
  }
`;

// Mutations
const SIGNUP_MUTATION = gql`
  mutation SignupMutation($input: AuthInput!) {
    signup(input: $input)
  }
`;

describe('Auth', () => {
  it('doesn`t accept empty input', async () => {
    const res = await mutate({
      mutation: SIGNUP_MUTATION,
      variables: {
        input: {
          email: '',
          password: '',
        },
      },
    });
    expect(res).toMatchSnapshot();
    expect(res.errors).not.toBe([]);
  });

  it('doesn`t accept invalid email', async () => {
    const res = await mutate({
      mutation: SIGNUP_MUTATION,
      variables: {
        input: {
          email: 'notEmail',
          password: '',
        },
      },
    });
    expect(res).toMatchSnapshot();
    expect(res.errors).not.toBe([]);
  });

  it('doesn`t register same email', async () => {
    await database.init();
    const res = await mutate({
      mutation: SIGNUP_MUTATION,
      variables: {
        input: {
          email: 'bob@example.com',
          password: 'password',
        },
      },
    });
    expect(res).toMatchSnapshot();
    expect(res.errors).not.toBe([]);
  });

  it('logs in registered user', async () => {
    await database.init();
    const res = await query({
      query: LOGIN_QUERY,
      variables: {
        input: {
          email: 'bob@example.com',
          password: 'password',
        },
      },
    });
    expect(res).toMatchSnapshot();
    expect(res.data.login).not.toBe(undefined);
  });

  it('accepts token and returns user', async () => {
    await database.init();
    const res = await query({
      query: GET_USER_QUERY,
    });
    expect(res).toMatchSnapshot();
    expect(res.data.getUser._id).not.toBe(undefined);
  });
});
