import React, { FC } from 'react';
import { Link } from 'react-router-dom';

const Home: FC<{}> = () => (
  <>
    <Link to="/login">Log in</Link>
    <br />
    <Link to="/signup">Sign up</Link>
  </>
);

export default Home;
