import { useState } from "react";

export default function Tasks({ tasks, onAddTask, onRemoveTask }) {
  const [newTask, setNewTask] = useState("");

  const add = () => {
    const t = newTask.trim();
    if (!t) return;
    onAddTask(t);
    setNewTask("");
  };

  return (
    <>
      <h2>Tasks</h2>
      <header className="task-header">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="New task"
        />
        <button type="button" className="add-task" onClick={add}>
          Add Task
        </button>
      </header>
      {(tasks && tasks.length) > 0 && (
        <ul>
          {tasks.map((task, i) => (
            <li key={i} className="task-header">
              <p>{task}</p>
              <button type="button" onClick={() => onRemoveTask(i)}>
                Clear
              </button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
