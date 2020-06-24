import React from 'react'
import './TodoList.css'
import TodoItem from '../TodoItem/TodoItem'

class TodoList extends React.Component {
    constructor() {
        super()
        this.state = {
            todos: [],
            activeUser: 1
        }
    }
    
    handleChangeUser = (event) => {
        this.setState({activeUser: Number(event.target.value)})
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(r => r.json())
        .then(d => this.setState({todos: d}))
    }

    render() {
        const todoItems = this.state.todos.map(
            todo => todo.userId === this.state.activeUser ?
            <TodoItem key={todo.id} todo={todo}/> : null
        )
        return (
            <div>
                <div className="form">
                    <input
                            type="number"
                            name="activeUser"
                            value={this.state.activeUser}
                            onChange={this.handleChangeUser}
                    />
                </div>
                <div className="todo-list">
                    {/* <button onClick={this.handleFormChange}>Change User</button> */}
                    {todoItems}
                </div>
            </div>
        )
    }
}

export default TodoList