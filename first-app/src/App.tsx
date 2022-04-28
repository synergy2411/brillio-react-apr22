import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import Users from './Components/Users/Users';


const client = new ApolloClient({
  uri: "http://localhost:9090/gq",
  cache: new InMemoryCache()
})

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="container">
        <Users />
      </div>
    </ApolloProvider>
  );
}

export default App;