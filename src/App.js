import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import Todos from "./components/Todos";
import Header from "./components/Header";
import AddTodo from "./components/AddTodo";
import About from "./components/pages/About";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, title: "Ponoviti nauceno", completed: false },
    { id: 2, title: "Zavrsiti maturski", completed: false },
    { id: 3, title: "Prosetati sa porodicom", completed: false },
  ]);
  const markComplete = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  };
  const delTodo = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)]);
  };
  const addTodo = (title) => {
    const newTodo = { id: uuidv4(), title, completed: false };
    setTodos([...todos, newTodo]);
  };
  return (
    <Router>
      <div className="App">
        <div className="container">
          <Header />
          <Route
            exact
            path="/"
            render={(props) => (
              <>
                <AddTodo addTodo={addTodo} />
                <Todos
                  todos={todos}
                  markComplete={markComplete}
                  delTodo={delTodo}
                />
              </>
            )}
          />
          <Route path="/about" component={About} />
        </div>
      </div>
    </Router>
  );
}

export default App;
