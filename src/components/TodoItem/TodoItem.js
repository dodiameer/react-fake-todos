import React from 'react'
import './TodoItem.css'

class TodoItem extends React.Component {
    constructor() {
        super()
        this.state = {
            todo: this.props.todo
        }
        this.toggleCompleted = this.toggleCompleted.bind(this)
    }

    toggleCompleted() {
        console.log("debug")
        this.setState(p => {
            return {
                todo: {...p.todo, completed: !p.todo.completed}
            }
        })
    }

    render() {
        return (
            <div className="todo-item">
                <h3>{this.state.todo.title}</h3>
                <h5>Id: {this.state.todo.id}</h5>
                <span>{this.state.todo.completed ? "✔️" : "❌"}</span>
                <button onClick={this.toggleCompleted}>
                    Mark as {this.state.todo.completed ? "incompleted" : "completed"}
                </button>
            </div>
        )
    }
}

export default TodoItem