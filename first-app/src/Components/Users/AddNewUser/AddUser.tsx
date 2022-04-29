import { gql, useMutation } from "@apollo/client";
import React, { useState } from "react";
import { Spinner } from "react-bootstrap";

const CREATE_USER_MUTATION = gql`
mutation onCreateUserMutation($username : String!, $email : String!, $password : String!) {
  createUser(data:{
    username: $username,
    email: $email,
    password: $password
  }){
    username, password, email, id
  }
}
`

const AddUser = () => {

  const [userState, setUserState] = useState<{ email: string, username: string, password: string }>({
    email: '',
    username: '',
    password: ''
  })

  let [createUserCallback, {error, loading, data}] = useMutation(CREATE_USER_MUTATION,{
    variables :{
      username : '',
      email : '',
      password : ''
    }
  })

  const createUserHandler = (event : React.FormEvent) => {
    event.preventDefault()
    createUserCallback({
      variables: {
       username : userState.username,
       email : userState.email,
       password : userState.password,
      }
    })
  }

  const emailChangeHandler : React.ChangeEventHandler<HTMLInputElement> = event => {
    setUserState({ ...userState, email : event.target.value})
  }
  const usernameChangeHandler : React.ChangeEventHandler<HTMLInputElement> = event => {
    setUserState({ ...userState, username : event.target.value})
  }
  const passwordChangeHandler : React.ChangeEventHandler<HTMLInputElement> = event => {
    setUserState({ ...userState, password : event.target.value})
  }

  // if(loading) return <Spinner animation="grow" />
  if(error) return <p>Something went wrong</p>
  
  return (
    <div className="row">
      <div className="col-12">
        <form >
          {/* Email */}
          <label htmlFor="email">Email :</label>
          <input type="text" name="email" 
            className="form-control" 
            value={userState.email} 
            onChange={emailChangeHandler} />
          {/* Username */}
          <label htmlFor="username">Username :</label>
          <input type="text" 
            className="form-control" 
            name="username" 
            value={userState.username} 
            onChange={usernameChangeHandler}/>
          {/* Password */}
          <label htmlFor="password">Password :</label>
          <input type="password" 
            className="form-control" 
            name="password" 
            value={userState.password} 
            onChange={passwordChangeHandler}/>
          {/* Buttons */}
          <br />
          <button className="btn btn-dark" onClick={createUserHandler}>Create New User</button>

        </form>
        <br />
        {data && <p>User successfully created</p>}
      </div>
    </div>
  )
}

export default AddUser;