import React, { useReducer, useContext, useEffect, createContext, useState } from "react";

// Create Context
const TodoContext = createContext();

// Reducer Function
const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, { id: Date.now(), text: action.payload }];
    case "DELETE_TODO":
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
};

// Provider Component
const TodoProvider = ({ children }) => {
  const [todos, dispatch] = useReducer(
    todoReducer,
    JSON.parse(localStorage.getItem("todos")) || []
  );

  // Persist in localStorage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoContext.Provider value={{ todos, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};

// Main Component
const TodoApp = () => {
  const { todos, dispatch } = useContext(TodoContext);
  const [text, setText] = useState("");

  const handleAdd = () => {
    if (text.trim()) {
      dispatch({ type: "ADD_TODO", payload: text });
      setText("");
    }
  };

  return (
    <div style={{ padding: 30 }}>
      <h2>🧠 Advanced React Hooks Todo</h2>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter a todo"
      />
      <button onClick={handleAdd}>Add</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}{" "}
            <button onClick={() => dispatch({ type: "DELETE_TODO", payload: todo.id })}>
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

// App Entry
export default function App() {
  return (
    <TodoProvider>
      <TodoApp />
    </TodoProvider>
  );
}
