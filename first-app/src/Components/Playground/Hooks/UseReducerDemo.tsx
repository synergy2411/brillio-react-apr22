import { useReducer } from "react";

interface IState {
    counter : number;
}

interface IAction {
    type : string;
    payload? : number;
}

const initialState : IState= {
    counter : 0
}

const reducerFn = (state : IState, action : IAction) => {
    if(action.type === "INCREMENT"){
        return {
            counter : state.counter + 1
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
                <button className="btn btn-primary" onClick={() => dispatch({type : "INCREMENT"})}>
                    Increment</button>
            </div>
        </div>
    )
}

export default UseReducerDemo;