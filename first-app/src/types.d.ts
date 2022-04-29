type Todo = {
    id : string;
    label : string;
    completed : boolean;
}
type AppState = {
    todos : Array<Todo>
}
type Action = {
    type : string;
    payload? :string;
}