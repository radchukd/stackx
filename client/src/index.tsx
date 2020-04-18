import React from 'react';
import { render } from 'react-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import { BrowserRouter } from 'react-router-dom';
import { apolloClient } from './config';
import AppRouter from './router';

render(
  <ApolloProvider client={apolloClient}>
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById('root'),
);
