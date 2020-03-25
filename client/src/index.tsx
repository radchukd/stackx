import React from 'react';
import { render } from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import gql from 'graphql-tag';
import client from './config/apolloClient';

client.query({
  query: gql`
  {
    books {
      title
    }
  }
  `
}).then(response => { console.log(response.data.books); });


render(
  <ApolloProvider client={client}>
    <div>App</div>
  </ApolloProvider>,
  document.getElementById('root'),
);
