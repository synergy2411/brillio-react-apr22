import React from 'react';
import axios from 'axios';

interface Todo {
    id : string;
    title: string;
    completed: boolean;
}

interface CompState {
    todos: Array<Todo>;
    item: string;
}

class ClassBasedComp extends React.Component {

    state: CompState;

    constructor(props: {}) {
        super(props);
        this.state = {
            todos: [{ id : 'T001', title: "to pot the plant", completed: false }],
            item: ''
        }
        console.log("[CONSTRUCTOR]")
    }

    onAddItem = (event: React.SyntheticEvent) => {
        event.preventDefault();
        this.setState({
            todos: [...this.state.todos, { 
                id: 'T00' + (this.state.todos.length + 1), 
                title: this.state.item, 
                completed: false 
            }],
            item: ''
        })
    }

    itemChangeHandler(event: React.ChangeEvent<HTMLInputElement>){
        this.setState({
            item: event.target.value
        })
    }

    itemDeleteHandler = (id : string) => {
        let duplicateTodos = [...this.state.todos];
        const position = duplicateTodos.findIndex(todo => todo.id === id);
        duplicateTodos.splice(position, 1);
        this.setState({
            todos : duplicateTodos
        })
    }

    componentDidMount(){
        console.log("[COMPONENT DID MOUNT]");
        // axios.get("http://localhost:9001/api/todos")
        axios.get("https://jsonplaceholder.typicode.com/todos")
            .then(response => {
                this.setState({
                    todos : response.data
                })
            })
            .catch(console.log)
    }

    componentDidUpdate(){
        console.log("[COMPONENT DID UPDATE]");
    }

    componentWillUnmount(){
        console.log("[COMPONENT WILL UNMOUNT]");
    }

    render(): React.ReactNode {
        console.log("[RENDER]");
        
        return (
            <div>
                <h4>Class based component loaded...</h4>
                <form>
                    <input value={this.state.item} type="text" 
                        name='todo-item' 
                        onChange={this.itemChangeHandler.bind(this)} />
                    <button onClick={this.onAddItem}>Add Item</button>
                </form>
                <ul>
                    {this.state.todos.map(todo => (
                    <li onDoubleClick={() => this.itemDeleteHandler(todo.id)} 
                        key={todo.id}>
                            {todo.title}
                    </li>))}
                </ul>
            </div>
        )
    }

}

export default ClassBasedComp;