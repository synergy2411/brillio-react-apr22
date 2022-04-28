import { useMutation, gql } from "@apollo/client";
import { Spinner } from "react-bootstrap";
import { useState } from "react";

const CREATE_USER_MUTATION = gql`
mutation{
  createUser(data:{
    username:"Jack",
    email:"jack@doe.com",
    password:"jack@123"
  }){
    username, password, email, id
  }
}
`

const AddUser = () => {

    const [createUserCallback, {data, error, loading}] = useMutation(CREATE_USER_MUTATION)
    const [userIsCreated, setUserIsCreated] = useState<boolean>(false)

    console.log("Data : ", data, error, loading)

    if(error) return <h4>Something went wrong while creating user</h4>
    // if(loading) return <Spinner animation="grow" />

    const createUserHandler = () => {
      createUserCallback().then(response => {
        setUserIsCreated(true)
      }).catch(console.log)
    }
    return (
        <div className="row">
            <div className="col-6 offset-3">
                {/* Create form to accpet the username, email, password, buttons */}
                <button className="btn btn-dark" onClick={createUserHandler}>Create New User</button>

                <br />
                {userIsCreated && <p>User successfully created</p>}
            </div>
        </div>
    )
}

export default AddUser;