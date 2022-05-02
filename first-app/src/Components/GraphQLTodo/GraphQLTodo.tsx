import { gql, useMutation } from "@apollo/client";
import { useState } from "react";

const CREATE_TODO_MUTATION = gql`
mutation createTodo($todo : String!) {
  createTodo(data:{label:$todo}){
    id label completed
  }
}
`

const GraphQLTodo = () => {
    const [callbackMutation] = useMutation(CREATE_TODO_MUTATION)

    const [todo, setTodo] = useState<string>('')

    const addTodoHandler = () => {
        callbackMutation({
            variables: {
                todo
            }
        }).then(response => console.log("RESPONSE -> ", response))
    }
    return (
        <div>
            <input type="text" name="item" value={todo} onChange={e => setTodo(e.target.value)} />
            <button onClick={addTodoHandler}>Add GraphQL Todo</button>

        </div>
    )
}

export default GraphQLTodo;