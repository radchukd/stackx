import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache, NormalizedCacheObject } from 'apollo-cache-inmemory';
import typeDefs from '../graphql/typeDefs';
import resolvers from '../graphql/resolvers';

const cache = new InMemoryCache();
const link = createHttpLink({
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
