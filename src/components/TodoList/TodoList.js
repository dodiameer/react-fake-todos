import React from 'react'
import './TodoList.css'
import TodoItem from '../TodoItem/TodoItem'

class TodoList extends React.Component {
    constructor() {
        super()
        this.state = {
            todos: []
        }
    }
    
    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then(res => res.json())
        .then(data => this.setState({todos: data.slice(0, 20)}))
    }

    render() {
        return (
            <div className="todo-list">
                {this.state.todos.map(todo => <TodoItem key={todo.id} todo={todo}/>)}
            </div>
        )
    }
}

export default TodoList