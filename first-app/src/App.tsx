import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import AddUser from './Components/Users/AddNewUser/AddUser';
import Users from './Components/Users/Users';


const client = new ApolloClient({
  uri: "http://localhost:9090/gq",
  cache: new InMemoryCache()
})

function App() {
  return (
    <div className="container">
        <ApolloProvider client={client}>
          <Users />
          <hr />
          <AddUser />
        </ApolloProvider>
      </div>
  );
}

export default App;