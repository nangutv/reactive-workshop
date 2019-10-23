import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: 'http://gql-workshop.nangu.tv:3000/graphql'
});

const client = new ApolloClient({
  cache,
  link
});

export default client;
