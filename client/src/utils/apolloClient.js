import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import Auth from "./auth";

const httpLink = new createHttpLink({
  uri: `http://localhost:3001/graphql`, // Your GraphQL endpoint
});

const authLink = setContext((_, { headers }) => {
  // Get the JWT token from AuthService
  const token = Auth.getToken();
  console.log("JWT Token:", token);
  return {
    headers: {
      ...headers,
      Authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;
