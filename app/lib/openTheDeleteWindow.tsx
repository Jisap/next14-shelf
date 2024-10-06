import { Component, Project } from "../allData";

interface openTheDeleteWindowProps {
  component: Component;
  allProjects: Project[];
  setSelectedComponent: (component: Component) => void;
  setSelectedProject: (project: Project) => void;
  setOpenDeleteWindow: (openDeleteWindow: boolean) => void;
}

export const openTheDeleteWindow = (
  { component,
    allProjects,
    setSelectedComponent, 
    setSelectedProject, 
    setOpenDeleteWindow }: openTheDeleteWindowProps
) => {

  const project = allProjects.find(
    (project) =>
      project.name.toLowerCase() === component.projectName.toLowerCase()       // Se busca el proyecto cuyo nombre coincide con el component.projectName
  );

  if (project) {                                                                // Si se encuentra, se establece el proyecto seleccionado
    setSelectedProject(project);
  } else {
    console.log(`Project not found for component: ${component.name}`);
  }

  setSelectedComponent(component);                                             // Se establece el componente seleccionado
  setOpenDeleteWindow(true)                                                    // Se abre la ventana de confirmación de eliminación
}