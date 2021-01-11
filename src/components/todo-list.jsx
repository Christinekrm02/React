import React, { Component } from "react";
import { getItems } from "../items/todos";

class TodoList extends Component {
  state = {
    todos: getItems(),
  };
  handleDelete = todo => {
    //Create a new array of items to avoid working with state directly
    //Get all todo items EXCEPT the one being selected
    const todos = this.state.todos.filter(t => t._id !== todo._id);
    //make the new state your new array
    this.setState({
      todos,
    });
    //console.log("HandleDelete", todo);
  };
  render() {
    const { length: count } = this.state.todos;
    if (count === 0) return <p>Success! You have completed all your todos!</p>;
    return (
      <div>
        <p>Showing {this.state.todos.length} tasks to complete </p>
        <table className="table">
          <thead>
            <tr>
              <th>Item</th>
              <th>Type</th>
              <th>Completed</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.state.todos.map(todo => (
              <tr key={todo._id}>
                <td>{todo.title}</td>
                <td>{todo.type}</td>
                <td>Yes</td>
                <td>
                  <button
                    onClick={() => this.handleDelete(todo)}
                    className="btn btn-danger btm-sm">
                    Delete Task
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default TodoList;
