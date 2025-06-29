import React, { useState } from "react";
import "./Todo.css";
import "../CardSection.css";

function Todo() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const handleAdd = (e) => {
    e.preventDefault();
    if (input.trim()) {
      setTasks([...tasks, { text: input, done: false }]);
      setInput("");
    }
  };

  const handleToggle = (idx) => {
    setTasks(tasks.map((task, i) => i === idx ? { ...task, done: !task.done } : task));
  };

  const handleDelete = (idx) => {
    setTasks(tasks.filter((_, i) => i !== idx));
  };

  return (
    <section className="todo-section card-section" aria-labelledby="todo-heading">
      <h2 className="todo-title" id="todo-heading">To-Do List</h2>
      <form className="todo-form" onSubmit={handleAdd}>
        <input
          className="todo-input"
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Add a new task..."
          aria-label="Add a new task"
        />
        <button className="todo-add-btn" type="submit">Add</button>
      </form>
      <ul className="todo-list">
        {tasks.length === 0 && <li className="todo-empty">No tasks yet!</li>}
        {tasks.map((task, idx) => (
          <li key={idx} className={"todo-item" + (task.done ? " done" : "") }>
            <span onClick={() => handleToggle(idx)}>{task.text}</span>
            <button className="todo-del-btn" onClick={() => handleDelete(idx)} title="Delete">✕</button>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Todo;
