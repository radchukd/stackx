import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache, NormalizedCacheObject } from 'apollo-cache-inmemory';
import { ApolloLink } from 'apollo-boost';
import { typeDefs, resolvers } from '../graphql';

const cache: InMemoryCache = new InMemoryCache();
const link: ApolloLink = createHttpLink({
  uri: 'http://localhost:5001/graphql',
  headers: {
    authorization: localStorage.getItem('authToken'),
  },
});

const apolloClient: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  link,
  cache,
  typeDefs,
  resolvers,
});

cache.writeData({
  data: {
    isLoggedIn: !!localStorage.getItem('authToken'),
  },
});

export default apolloClient;
