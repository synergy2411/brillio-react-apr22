import { useReducer } from "react";

interface IState {
    counter : number;
    result : Array<number>;
}

enum Actions {
    INCREMENT,
    DECREMENT,
    ADD_COUNTER,
    SUBTRACT_COUNTER,
    STORE_RESULT
}

interface IAction {
    type : Actions;
    payload? : number;
}

const initialState : IState = {
    counter : 0,
    result : []
}

const reducerFn = (state : IState, action : IAction) => {
    if(action.type === Actions.INCREMENT){
        return {
            ...state,           // {counter, result}
            counter : state.counter + 1
        }
    }else if (action.type === Actions.DECREMENT){
        return {
            ...state,
            counter : state.counter - 1
        }
    }else if(action.type === Actions.ADD_COUNTER){
        return {
            ...state,
            counter : state.counter + action.payload!
        }
    }else if(action.type === Actions.SUBTRACT_COUNTER){
        return {
            ...state,
            counter : state.counter - action.payload!
        }
    }else if(action.type === Actions.STORE_RESULT){
        return {
            ...state,
            result : [state.counter, ...state.result]
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
                <button className="btn btn-primary" onClick={() => dispatch({type : Actions.INCREMENT})}>
                    Increment</button>
                <button className="btn btn-success" onClick={() => dispatch({type : Actions.DECREMENT})}>
                    Decrement</button>
                <button className="btn btn-dark" onClick={() => dispatch({type : Actions.ADD_COUNTER, payload : 10})}>
                    Add 10</button>
                <button className="btn btn-warning" onClick={() => dispatch({type : Actions.SUBTRACT_COUNTER, payload : 5})}>
                    Subtract 5 </button>
            </div>
            <br />
            <div className="row">
                <div className="col-4 offset-4">
                    <button className="btn btn-danger" 
                        onClick={() => dispatch({type : Actions.STORE_RESULT })}>
                            Store Result
                            </button>
                            <br />
                    <ul className="list-group">
                        {state.result.map((r,i) => <li key={i} className="list-group-item">{r}</li>)}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default UseReducerDemo;