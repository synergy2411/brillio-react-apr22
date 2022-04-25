import React from 'react';
import Expenses from './Components/Expenses/Expenses';
import ClassBasedComp from './Components/Playground/ClassBasedComp/ClassBasedComp';
import MyStyledComponent from './Components/Playground/MyStyledComp/MyStyledComp';

function App() {
  
  return (
    <div className="container">

    <MyStyledComponent/>
    <hr />

    <ClassBasedComp> </ClassBasedComp>

      {/* <Expenses /> */}
    </div>
  );
}

export default App;