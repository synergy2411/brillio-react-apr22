import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";

const AddTodo = () => {

    const dispatch = useDispatch();
    const history = useHistory()

    const [todoLabel, setTodoLabel] = useState<string>('') 

    const todoLabelChangeHandler : React.ChangeEventHandler<HTMLInputElement> = event => setTodoLabel(event.target.value)

    const todoHandler = (e : React.FormEvent) => {
        e.preventDefault()
        dispatch({type : "ADD_TODO", payload : todoLabel})
        history.replace("/todos")
    }
    return (
        <form>
            <input type="text" name="todo-label" value={todoLabel} onChange={todoLabelChangeHandler}/>
            <button onClick={todoHandler} type="button" >Add Todo</button>
        </form>
    )
}

export default AddTodo;