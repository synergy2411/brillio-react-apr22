const initialState : AppState = {
    todos : [{id : "t001", label : "to spill milk", completed : false}]
}
export default function rootReducer(state : AppState = initialState, action : Action){
    if(action.type === "ADD_TODO"){
        const newTodo : Todo = {
            id : "t00"+ (state.todos.length + 1),
            label : action.payload!,
            completed : false
        } 
        return {
            todos : [newTodo, ...state.todos]
        }
    }else if(action.type === "DELETE_TODO"){
        const duplicateTodos = state.todos.filter(todo => todo.id !== action.payload)
        return {
            todos : duplicateTodos
        }
    }
    
    return state;
}