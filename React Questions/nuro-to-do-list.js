// https://codesandbox.io/s/nameless-architecture-qewtzk?file=/src/App.js:0-1519
import { useEffect, useState, useCallback } from "react";
import axios from "axios";
import "./styles.css";

export const getItems = async (id) => {
  try {
    const url = `https://jsonplaceholder.typicode.com/users/${id}/todos`;
    const response = await axios.get(url);
    return response.data;
  } catch (e) {
    console.log(e);
    return [];
  }
};

export default function App() {
  const [id, setId] = useState(3);
  const [completeTodos, setCompleteTodos] = useState([]);
  const [incompleteTodos, setIncompleteTodos] = useState([]);

  const handleSetTodos = (todos) => {
    setCompleteTodos(todos.filter((todo) => todo.completed === true));
    setIncompleteTodos(todos.filter((todo) => todo.completed === false));
  };

  const handleCheck = (id) => {
    let list = [...incompleteTodos, ...completeTodos];
    for (let todo of list) {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
    }
    handleSetTodos(list);
  };

  useEffect(() => {
    const getTodos = async (id) => {
      const list = await getItems(id);
      handleSetTodos(list);
    };
    getTodos(id);
  }, [id]);

  return (
    <div className="App">
      <ul>
        {[...incompleteTodos, ...completeTodos].map((val) => (
          <li key={val.id}>
            <input
              type="checkbox"
              checked={val.completed}
              onChange={() => handleCheck(val.id)}
            />
            <label>{val.title}</label>
          </li>
        ))}
      </ul>
    </div>
  );
}
