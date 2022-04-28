import { useEffect, useState } from 'react';
import { gql, useQuery, useLazyQuery } from '@apollo/client';
import { Spinner } from 'react-bootstrap';
import { IUser } from '../../model/user.model';

const FETCH_USERS = gql`
    query{
        users{
            id username password email
        }
}
`

const SEARCH_USER = gql`
query onSerachUser($name : String) {
  user(search:{ name: $name }){
    id username email
  }
}
`

const Users = () => {

    const [username, setUsername] = useState<string>('')

    // const { error, loading, data } = useQuery(FETCH_USERS)
    
    const [ fetchUserQuery , { error, loading, data }] = useLazyQuery(SEARCH_USER, {
        variables : {
            name : username
        }
    })

    useEffect(() => {
        let notifier = setTimeout(() => {
            fetchUserQuery()
        }, 1000)
        return () => {
            clearTimeout(notifier)
        }
    }, [username, fetchUserQuery])

    if(error) return <h4>Something went wrong</h4>
    if(loading) return <Spinner animation="grow" />
    
    const usernameChangeHandler : React.ChangeEventHandler<HTMLInputElement> = (event) => {
        setUsername(event.target.value)        
    }

    return (
        <div className='row'>
            <div className="col-6 offset-3">
                <input type="text" className='form-control' value={username} onChange={usernameChangeHandler} />
                <ul className='list-group'>
                    {data && <p>{data.user.username.toUpperCase()}</p>}
                    {/* {data && data.users.map((user: IUser) => <li className='list-group-item' key={user.id}>{user.username}</li>)} */}
                </ul>
            </div>
        </div>
    )

}

export default Users;