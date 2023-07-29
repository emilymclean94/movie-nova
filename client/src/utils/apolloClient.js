import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import Auth from './auth';

const authLink = setContext((_, { headers }) => {
  // Get the JWT token from AuthService
  const token = Auth.getToken();
  return {
    headers: {
      ...headers,
      Authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const customMergeFunction = (existing, incoming) => {
  // Custom merge logic here, you can choose to merge or replace the data
  // In this case, we don't need to merge, so we'll replace the existing data with the incoming data
  return incoming;
};

const httpLink = new createHttpLink({
  uri: `http://localhost:3001/graphql`, // Your GraphQL endpoint
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          movies: {
            merge: customMergeFunction, // Define the custom merge function here for the 'movies' field
          },
        },
      },
    },
  }),
});

export default client;
