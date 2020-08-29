import React, { useState } from "react";
import "./App.css";
import Todos from "./components/Todos";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, title: "Ponoviti nauceno", completed: false },
    { id: 2, title: "Zavrsiti maturski", completed: false },
    { id: 3, title: "Prosetati sa porodicom", completed: false },
  ]);
  return (
    <div className="App">
      <Todos todos={todos} />
    </div>
  );
}

export default App;
