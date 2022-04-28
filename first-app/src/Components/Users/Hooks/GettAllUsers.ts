import { useQuery, gql } from "@apollo/client"
const FETCH_USERS = gql`
    query{
        users{
            id username password email
        }
}
`

export function useGetAllUser(){
        const { error, loading, data } = useQuery(FETCH_USERS)

        return {error, loading, data}
}