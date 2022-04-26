import React, {useRef, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import classes from "./ClassBasedComp.module.css";

const Title = styled.h4`
text-align: center;
color : darkblue;
`


interface Todo {
    id : string;
    title: string;
    completed: boolean;
}

interface CompState {
    todos: Array<Todo>;
    item: string;
    isItemAdded : boolean;
}

class ClassBasedComp extends React.Component {

    state: CompState;

    constructor(props: {}) {
        super(props);
        this.state = {
            todos: [{ id : 'T001', title: "to pot the plant", completed: false }],
            item: '',
            isItemAdded : false
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

    itemBlurHandler = (event : React.ChangeEvent<HTMLInputElement>) => {
        if(event.target.value.trim() === '' ){
            this.setState({
                isItemAdded : false
            })
        }else{
            this.setState({
                isItemAdded : true
            })
        }
    }


    render(): React.ReactNode {
        console.log("[RENDER]");
       
        const styles = {
            border : '2px green solid',
            backgroundColor : "lightgrey",
            boxShadow : "darkgrey 2px 5px"
        }
        return (
            <div style={styles}>
                <Title>Class based component loaded...</Title>
                <form>
                    <input value={this.state.item} type="text" 
                        name='todo-item' 
                        onChange={this.itemChangeHandler.bind(this)} 
                        onBlur={this.itemBlurHandler}
                        className={
                            this.state.isItemAdded ? 
                                classes['item-added'] : 
                                classes['item-not-added']}/>

                    <button className={classes['my-button']} onClick={this.onAddItem}>Add Item</button>
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