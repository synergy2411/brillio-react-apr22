import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { Fragment } from 'react';
import { Route, Switch, BrowserRouter, Link } from 'react-router-dom';
import Expenses from './Components/Expenses/Expenses';
import Header from './Components/Header/Header';
import Login from './Components/Login/Login';
import Posts from './Components/Posts/Posts';
import Users from './Components/Users/Users';

const client = new ApolloClient({
  uri: "http://localhost:9090/gq",
  cache: new InMemoryCache()
})



function App() {
  return (
    <Fragment>
      <div className="container">
        <Header />
      </div>

      <div className="container">
        <Route path="/" exact>
          <Login />
        </Route>
        <Route path="/posts">
          <Posts />
        </Route>
        <Route path="/expenses">
          <Expenses />
        </Route>
        <Route path="/users">
          <ApolloProvider client={client}>
            <Users />
          </ApolloProvider>
        </Route>
      </div>
    </Fragment>
  );
}

export default App;


// "/" -> localhost:3000