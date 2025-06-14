import { useState } from "react";

export default function AddProject({ onSave, onCancel }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");

  const [errors, setErrors] = useState({});

  const handleSave = () => {
    const newErrors = {};
    if (!title.trim()) {
      newErrors.title = "Title is required";
    }

    if (!dueDate) newErrors.dueDate = "Due date required";
    else if (new Date(dueDate) < new Date())
      newErrors.dueDate = "The date cannot be in the past";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const projectObj = {
      projectTitle: title.trim(),
      projectDescription: description.trim(),
      projectDueDate: dueDate,
      projectTasks: [],
    };

    onSave(projectObj);

    setTitle("");
    setDescription("");
    setDueDate("");
    setErrors({});
  };

  const handleCancel = () => {
    setTitle("");
    setDescription("");
    setDueDate("");
    setErrors({});
    onCancel();
  };

  return (
    <>
      <header className="add-project">
        <button type="button" className="button-cancel" onClick={handleCancel}>
          Cancel
        </button>
        <button type="button" className="button-save" onClick={handleSave}>
          Save
        </button>
      </header>
      <p>
        <label>TITLE</label>
        <input
          className="add-project-input"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></input>
        {errors.title && <div style={{ color: "red" }}>{errors.title}</div>}
      </p>
      <p>
        <label>DESCRIPTION</label>
        <textarea
          className="add-project-textarea"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </p>
      <p>
        <label>DUE DATE</label>
        <input
          className="add-project-input"
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        ></input>
        {errors.dueDate && <div style={{ color: "red" }}>{errors.dueDate}</div>}
      </p>
    </>
  );
}
