import Tasks from "./Tasks";

export default function Project({
  project,
  tasks,
  onAddTask,
  onRemoveTask,
  onDelete,
}) {
  return (
    <>
      <header className="project-header">
        <h1>{project.projectTitle}</h1>
        <button className="delete-button" onClick={onDelete}>
          Delete
        </button>
      </header>
      <p className="date">{project.projectDueDate}</p>
      <p>{project.projectDescription}</p>
      <hr />
      <Tasks tasks={tasks} onAddTask={onAddTask} onRemoveTask={onRemoveTask} />
    </>
  );
}
