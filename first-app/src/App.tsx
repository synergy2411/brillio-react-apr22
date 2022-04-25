import React from 'react';
import Expenses from './Components/Expenses/Expenses';
import ClassBasedComp from './Components/Playground/ClassBasedComp/ClassBasedComp';
import MyStyledComponent from './Components/Playground/MyStyledComp/MyStyledComp';
import ErrorBoundary from './Components/ErrorBoundary/ErrorBoundary';

function App() {
  
  return (
    <div className="container">
      <ErrorBoundary>
        <MyStyledComponent/>
      </ErrorBoundary>
    <hr />

    {/* <ClassBasedComp> </ClassBasedComp> */}

      <Expenses />
    </div>
  );
}

export default App;