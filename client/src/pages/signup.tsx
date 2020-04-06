import React, { useState, MouseEvent } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { useHistory } from 'react-router-dom';
import { SIGNUP } from '../graphql/mutations';
import { Loading, Error } from '../components';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  const [signup, { error, loading }] = useMutation(SIGNUP, {
    onCompleted() { history.push('/login'); },
  });

  const submitForm = (e: MouseEvent) => {
    e.preventDefault();

    signup({ variables: { input: { email, password } } });
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
      <button type="submit" onClick={submitForm}>Sign up</button>
    </form>
  );
};

export default Signup;
