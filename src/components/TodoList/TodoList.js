import React from 'react'
import './TodoList.css'

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
        .then(data => this.setState({todos: data}))
    }

    render() {
        return (
            <div className="todo-list">
                <p>TodoList works!</p>
            </div>
        )
    }
}

export default TodoList