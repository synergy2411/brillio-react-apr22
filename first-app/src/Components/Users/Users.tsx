import React from 'react';
import { gql, useLazyQuery } from '@apollo/client';
import { useRef } from 'react';
import { Spinner } from 'react-bootstrap';
import AddUser from './AddNewUser/AddUser';

const SEARCH_USER = gql`
query onSerachUser($name : String!) {
  user(search:{ name: $name }){
    id username email
  }
}
`

const Users = () => {

    // const {error, loading, data } = useGetAllUsers()
    const usernameInputRef = useRef<HTMLInputElement>(null);

    const [fetchUserQuery, {error, data, loading}] = useLazyQuery(SEARCH_USER)

    if(error) return <h4>Something went wrong {error.message}</h4>
    if(loading) return <Spinner animation="grow" />
    
    const searchHandler = () => {
        fetchUserQuery({variables : {name : usernameInputRef.current?.value}})
    }

    return (
        <div className='row'>
            <div className="col-6 offset-3">
                <AddUser />
                <hr />
                <input type="text" className='form-control' ref={usernameInputRef} />
                <button type='button' className='btn btn-success' onClick={searchHandler}>Search</button>
                <ul className='list-group'>
                    {data && <li>{data.user.username.toUpperCase()}</li>}
                    {/* {data && data.users.map((user: IUser) => <li className='list-group-item' key={user.id}>{user.username}</li>)} */}
                </ul>
            </div>
        </div>
    )

}

export default React.memo(Users);