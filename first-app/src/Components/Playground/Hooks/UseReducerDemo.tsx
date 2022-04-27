import { useReducer } from "react";
import "./UseReducerDemo.css"

interface IState {
    counter: number;
    result: Array<number>;
}

enum Actions {
    INCREMENT,
    DECREMENT,
    ADD_COUNTER,
    SUBTRACT_COUNTER,
    STORE_RESULT,
    DELETE_RESULT
}

interface IAction {
    type: Actions;
    payload?: number;
}

const initialState: IState = {
    counter: 0,
    result: []
}

const reducerFn = (state: IState, action: IAction) => {
    if (action.type === Actions.INCREMENT) {
        return {
            ...state,           // {counter, result}
            counter: state.counter + 1
        }
    } else if (action.type === Actions.DECREMENT) {
        return {
            ...state,
            counter: state.counter - 1
        }
    } else if (action.type === Actions.ADD_COUNTER) {
        return {
            ...state,
            counter: state.counter + action.payload!
        }
    } else if (action.type === Actions.SUBTRACT_COUNTER) {
        return {
            ...state,
            counter: state.counter - action.payload!
        }
    } else if (action.type === Actions.STORE_RESULT) {
        return {
            ...state,
            result: [state.counter, ...state.result]
        }
    } else if (action.type === Actions.DELETE_RESULT) {
        const filteredResult = state.result.filter((r,i) => i !== action.payload)
        return {
            ...state,
            result: filteredResult
        }
    }
    return state;
}

const UseReducerDemo = () => {
    const [state, dispatch] = useReducer(reducerFn, initialState)

    return (
        <div className="text-center">
            <h4>Counter : {state.counter}</h4>
            <hr />
            <div className="btn-group">
                <button className="btn btn-primary" onClick={() => dispatch({ type: Actions.INCREMENT })}>
                    Increment</button>
                <button className="btn btn-success" onClick={() => dispatch({ type: Actions.DECREMENT })}>
                    Decrement</button>
                <button className="btn btn-dark" onClick={() => dispatch({ type: Actions.ADD_COUNTER, payload: 10 })}>
                    Add 10</button>
                <button className="btn btn-warning" onClick={() => dispatch({ type: Actions.SUBTRACT_COUNTER, payload: 5 })}>
                    Subtract 5 </button>
            </div>
            <br />
            <br />
            <div className="row">
                <div className="col-4 offset-4">
                    <button className="btn btn-danger btn-block"
                        onClick={() => dispatch({ type: Actions.STORE_RESULT })}>
                        Store Result
                    </button>
                    <br />
                    <br />
                    <ul className="list-group">
                        {state.result.map((r, i) => <li onClick={() => dispatch({
                            type : Actions.DELETE_RESULT, 
                            payload : i
                            })} key={i} className="list-group-item">{r}</li>)}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default UseReducerDemo;