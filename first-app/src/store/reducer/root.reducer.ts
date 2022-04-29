const initialState : AppState = {
    todos : []
}
export default function rootReducer(state : AppState = initialState, action : Action){
    return state;
}