import { gql, useQuery } from '@apollo/client';
import { Spinner } from 'react-bootstrap';
import { IUser } from '../../model/user.model';

const FETCH_USERS = gql`
    query{
        users{
            id username password email
        }
}
`

const Users = () => {
    const { error, loading, data } = useQuery(FETCH_USERS)

    console.log(error, loading, data)

    if(error) return <h4>Something went wrong</h4>
    if(loading) return <Spinner animation="grow" />
    
    return (
        <div className='row'>
            <div className="col-6 offset-3">
                <ul className='list-group'>
                    {data && data.users.map((user: IUser) => <li className='list-group-item' key={user.id}>{user.username}</li>)}
                </ul>
            </div>
        </div>
    )

}

export default Users;