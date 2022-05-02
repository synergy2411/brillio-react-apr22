import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import classes from './Todos.module.css';

const Todos = () => {
    const todos = useSelector((state: AppState) => state.todos)
    const dispatch = useDispatch();

    const history = useHistory();
    const addTodoHandler = () => {
        history.push("/todos/new")
    }

    const deleteItemHandler = (todoId : string) => {
        dispatch({type : "DELETE_TODO", payload : todoId  })
    }
    return (
        <div>
            <p className='text-center display-4'>My Todos</p>
            <button className='btn btn-dark' onClick={addTodoHandler}>Add Todo</button>
            <ul className='list-group'>
                {todos.map(todo => <li onClick={ () => deleteItemHandler(todo.id)} className={`list-group-item ${classes['my-list']}`} key={todo.id}>{todo.label}</li>)}
            </ul>
        </div>
    )
}

export default Todos;