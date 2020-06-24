import React from 'react'
import './TodoItem.css'

class TodoItem extends React.Component {
    constructor() {
        super()
        this.state = {
            todo: {},
            user: {}
        }
        this.toggleCompleted = this.toggleCompleted.bind(this)
    }

    componentDidMount() {
        fetch(`https://jsonplaceholder.typicode.com/users/${this.props.todo.userId}`)
        .then(r => r.json())
        .then(d => this.setState({user: d}))
        this.setState({ todo: this.props.todo })
    }

    toggleCompleted() {
        this.setState(p => {
            return {
                todo: {...p.todo, completed: !p.todo.completed}
            }
        })
    }

    render() {
        return (
            <div className="todo-item">
                <h4>@{this.state.user.username}</h4>
                <h3>{this.state.todo.title}</h3>
                <h5>Id: {this.state.todo.id} / User Id: {this.state.todo.userId}</h5>
                <span>{this.state.todo.completed ? "✔️" : "❌"}</span>
                <button onClick={this.toggleCompleted}>
                    Mark as {this.state.todo.completed ? "incompleted" : "completed"}
                </button>
            </div>
        )
    }
}

export default TodoItem