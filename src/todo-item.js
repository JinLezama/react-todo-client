import React from 'react';
class TodoItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            done: this.props.item.done
        }
    }
    toggleDone = () => {
        fetch(`https://flask-todo-api1.herokuapp.com/${this.props.item.id}`, {
            method: "PATCH",
            headers: {"content-type": "application/json"},
            body: JSON.stringify({
                done: !this.state.done
            })
        })
        .then(() => {
            this.setState({
                done: !this.state.done
            })
        })
        .catch((error) => {
            console.log('Error in toggleDone: ', error)
        })
    }
    render() {
        return (
            <div className="todo-item">
                <input
                    type="checkbox"
                    defaultChecked={this.state.done}
                    onClick={this.toggleDone}
                />
                <p className={this.state.done ? "done" : null}>{this.props.item.title}</p>
            </div>
        )
    }
}
export default TodoItem;