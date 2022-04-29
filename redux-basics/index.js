const redux = require("redux");         // CommonJS module import

// import redux from 'redux';           // ES6 module import

const initialState = {
    username : ""
}

const reducerFn = (state = initialState, action) => {
    if(action.type === "ADD_USER"){
        return {
            username : action.payload
        }
    }
    return state;
}

const store = redux.createStore(reducerFn)



// Subscription
store.subscribe(() => {
    console.log(store.getState());
})

// Dispatching Action
store.dispatch({type : "ADD_USER", payload : "John Doe"})
store.dispatch({type : "ADD_USER", payload : "Alice Doe"})
console.log("AFTER DISPATCH");


