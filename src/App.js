import React, { Component } from "react";
import TodoList from "./components/todo-list";
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <main className="container">
        <TodoList />
      </main>
    );
  }
}
