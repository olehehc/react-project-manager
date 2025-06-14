import { useState } from "react";

import Menu from "./components/Menu";
import Project from "./components/Project";
import AddProject from "./components/AddProject";

function App() {
  const [projects, setProjects] = useState([]);

  const [selectedProjectId, setSelectedProjectId] = useState(null);

  const [isAdding, setIsAdding] = useState(false);

  const handleAddProject = () => {
    setIsAdding(true);
    setSelectedProjectId(null);
  };

  const handleSaveProject = (newProject) => {
    const id = Date.now().toString();
    const projectToAdd = {
      id,
      projectTitle: newProject.projectTitle,
      projectDescription: newProject.projectDescription,
      projectDueDate: newProject.projectDueDate,
      projectTasks: newProject.projectTasks,
    };
    setProjects((prev) => [projectToAdd, ...prev]);
    setSelectedProjectId(id);
    setIsAdding(false);
  };

  const handleCancelAdd = () => {
    setIsAdding(false);
  };

  const handleDeleteProject = (projectId) => {
    setProjects((prev) => prev.filter((p) => p.id !== projectId));
  };

  const handleSelectProject = (id) => {
    setSelectedProjectId(id);
    setIsAdding(false);
  };

  const lastProject = projects[0];

  const projectToShow = selectedProjectId
    ? projects.find((p) => p.id === selectedProjectId)
    : lastProject;

  const handleAddTask = (projectId, task) => {
    setProjects((prev) =>
      prev.map((p) =>
        p.id !== projectId
          ? p
          : { ...p, projectTasks: [...(p.projectTasks || []), task] }
      )
    );
  };

  const handleRemoveTask = (projectId, index) => {
    setProjects((prev) =>
      prev.map((p) =>
        p.id !== projectId
          ? p
          : {
              ...p,
              projectTasks: p.projectTasks.filter((_, i) => i !== index),
            }
      )
    );
  };

  return (
    <div className="app">
      <Menu
        projects={projects}
        selectedProjectId={selectedProjectId}
        onAddProject={handleAddProject}
        onSelectProject={handleSelectProject}
      />
      <main className="project">
        {projects.length === 0 || isAdding ? (
          <AddProject onSave={handleSaveProject} onCancel={handleCancelAdd} />
        ) : (
          <Project
            onDelete={() => handleDeleteProject(projectToShow.id)}
            project={projectToShow}
            tasks={projectToShow.projectTasks}
            onAddTask={(task) => handleAddTask(projectToShow.id, task)}
            onRemoveTask={(idx) => handleRemoveTask(projectToShow.id, idx)}
          />
        )}
      </main>
    </div>
  );
}

export default App;
