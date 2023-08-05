import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://chaumont.stepzen.net/api/cloying-wolf/__graphql",
  headers: {
    Authorization:
      "apikey chaumont::stepzen.io+1000::da27b7a3290444af11837141a547624b6906de1dceecfac7effd987680a240d2",
  },
  cache: new InMemoryCache(),
});

export default client;
