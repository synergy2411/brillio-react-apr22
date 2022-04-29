import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

const Todos = () => {
    const todos = useSelector((state: AppState) => state.todos)
    const history = useHistory();
    const addTodoHandler = () => {
        history.push("/todos/new")
    }

    return (
        <div>
            <p className='text-center display-4'>My Todos</p>
            <button className='btn btn-dark' onClick={addTodoHandler}>Add Todo</button>
            <ul className='list-group'>
                {todos.map(todo => <li className='list-group-item' key={todo.id}>{todo.label}</li>)}
            </ul>
        </div>
    )
}

export default Todos;