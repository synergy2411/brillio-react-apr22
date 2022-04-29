import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { Fragment } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Course from './Components/Courses/Course/Course';
import Courses from './Components/Courses/Courses';
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
        <Switch>
          <Route path="/" exact>
            <Redirect to="/login" />
          </Route>
          <Route path="/login">
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
          <Route path="/courses/:course/:duration">
            <Course />
          </Route>
          <Route path="/courses">
            <Courses />
          </Route>
        </Switch>
      </div>
    </Fragment>
  );
}

export default App;


// "/" -> localhost:3000