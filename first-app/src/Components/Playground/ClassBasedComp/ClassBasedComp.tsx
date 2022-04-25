import React from 'react';

interface Todo {
    id : string;
    label: string;
    status: boolean;
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
            todos: [{ id : 'T001', label: "to pot the plant", status: false }],
            item: ''
        }
    }

    onAddItem = (event: React.SyntheticEvent) => {
        event.preventDefault();
        this.setState({
            todos: [...this.state.todos, { 
                id: 'T00' + this.state.todos.length + 1, 
                label: this.state.item, 
                status: false 
            }],
            item: ''
        })
    }

    itemChangeHandler(event: React.ChangeEvent<HTMLInputElement>){
        this.setState({
            item: event.target.value
        })
    }

    render(): React.ReactNode {
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
                    {this.state.todos.map(todo => <li key={todo.id}>{todo.label}</li>)}
                </ul>
            </div>
        )
    }

}

export default ClassBasedComp;