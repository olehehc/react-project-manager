import ProjectButton from "./ProjectButton";

export default function Menu({
  projects,
  selectedProjectId,
  onAddProject,
  onSelectProject,
}) {
  return (
    <nav className="menu">
      <h1>Your Projects</h1>
      <button onClick={onAddProject}>+ Add Project</button>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <ProjectButton
              onSelect={() => onSelectProject(project.id)}
              isSelected={project.id === selectedProjectId}
            >
              {project.projectTitle}
            </ProjectButton>
          </li>
        ))}
      </ul>
    </nav>
  );
}
