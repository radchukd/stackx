import React, { FC, useState, MouseEvent } from 'react';
import { useApolloClient, useLazyQuery } from '@apollo/react-hooks';
import { useHistory } from 'react-router-dom';
import { LOGIN } from '../graphql/queries';
import { Loading, Error } from '../components';

const Login: FC<{}> = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  const client = useApolloClient();
  const [login, { error, loading }] = useLazyQuery(LOGIN, {
    // eslint-disable-next-line no-shadow
    onCompleted({ login }) {
      localStorage.setItem('authToken', login);
      client.writeData({ data: { isLoggedIn: true } });
      history.push('/profile');
    },
  });

  const submitForm = (e: MouseEvent) => {
    e.preventDefault();

    login({ variables: { input: { email, password } } });
  };

  if (loading) { return <Loading />; }
  if (error) { return <Error message={error.message} />; }

  return (
    <form>
      <input
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="Email address"
        type="email"
        name="email"
        required
      />
      <input
        value={password}
        onChange={e => setPassword(e.target.value)}
        placeholder="Password"
        type="password"
        name="password"
        required
      />
      <button type="submit" onClick={submitForm}>Log in</button>
    </form>
  );
};

export default Login;
