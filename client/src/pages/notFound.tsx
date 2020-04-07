import React, { FC } from 'react';
import { Link } from 'react-router-dom';

const NotFound: FC<{}> = () => (
  <>
    Page not found
    <br />
    <Link to="/">Home</Link>
  </>
);

export default NotFound;
