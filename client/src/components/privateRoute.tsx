/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/jsx-props-no-spreading */
import React, { FC } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { IS_LOGGED_IN } from '../graphql/queries';

const PrivateRoute: FC<any> = ({ component: Component, ...rest }) => {
  const { data } = useQuery(IS_LOGGED_IN);

  return (
    <Route
      {...rest}
      render={props => (data.isLoggedIn ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: 'login',
            state: { from: props.location },
          }}
        />
      ))}
    />
  );
};

export default PrivateRoute;
