import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { Fragment, lazy, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import GraphQLTodo from './Components/GraphQLTodo/GraphQLTodo';
import Header from './Components/Header/Header';
import Login from './Components/Login/Login';

const Course = lazy(() => import("./Components/Courses/Course/Course"))
const Courses = lazy(() => import("./Components/Courses/Courses"))
const Expenses = lazy(() => import("./Components/Expenses/Expenses"))
const Posts = lazy(() => import("./Components/Posts/Posts"))
const AddTodo = lazy(() => import("./Components/Todos/AddTodo/AddTodo"))
const Todos = lazy(() => import("./Components/Todos/Todos"))
const Users = lazy(() => import("./Components/Users/Users"))

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
        <ApolloProvider client={client}>
          <Suspense fallback={<p>Loading...</p>}>
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
                <Users />
              </Route>
              <Route path="/courses/:course/:duration">
                <Course />
              </Route>
              <Route path="/courses">
                <Courses />
              </Route>
              <Route path="/todos/new">
                <AddTodo />
              </Route>
              <Route path="/todos">
                <Todos />
              </Route>
              <Route path="/graphql-todo">
                <GraphQLTodo />
              </Route>
            </Switch>
          </Suspense>
        </ApolloProvider>
      </div>
    </Fragment>
  );
}

export default App;


// "/" -> localhost:3000