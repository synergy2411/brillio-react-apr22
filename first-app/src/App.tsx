import React from 'react';

function App() {
  let title = "Awesome App";

  let user = {
    name : "Jenny Doe",
    isAdmin : false
  }

  return (
    <div className="container">
      <h1>{ title.toUpperCase() }</h1>
      <p>Sum : { 2 + 2 } </p>
      <p>Username : { user.name } </p>
      <p> Type : {user.isAdmin ? 'Admin' : 'Employee'} </p>
    </div>
  );
}

export default App;

// JSX