import React from 'react';
import Expenses from './Components/Expenses/Expenses';
import ClassBasedComp from './Components/Playground/ClassBasedComp/ClassBasedComp';
import MyStyledComponent from './Components/Playground/MyStyledComp/MyStyledComp';
import ErrorBoundary from './Components/ErrorBoundary/ErrorBoundary';
import Login from './Components/Login/Login';
import UseStateDemo from './Components/Playground/Hooks/UseStateDemo';
import UseEffectDemo from './Components/Playground/Hooks/UseEffectDemo';

function App() {
  
  return (
    <div className="container">

    <UseEffectDemo />

    {/* <UseStateDemo /> */}

    {/* <Login /> */}

      {/* <ErrorBoundary>
        <MyStyledComponent/>
      </ErrorBoundary> */}
    <hr />

    {/* <ClassBasedComp> </ClassBasedComp> */}

      {/* <Expenses /> */}
    </div>
  );
}

export default App;