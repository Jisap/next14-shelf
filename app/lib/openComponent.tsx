import { Component, Project } from "../allData";

interface openComponentProps {
  component: Component;
  allProjects: Project[];
  setSelectedComponent: (component: Component) => void;
  setSelectedProject: (project: Project) => void;
  setOpenComponentEditor: (openComponentEditor: boolean) => void;
  setOpenAllFavoriteWindow: (openAllFavoriteWindow: boolean) => void;
}

export const openComponent = ({
  component,
  allProjects,
  setSelectedComponent,
  setSelectedProject,
  setOpenComponentEditor,
  setOpenAllFavoriteWindow
}: openComponentProps) => {

  setSelectedComponent(component);
  setOpenComponentEditor(true)

  const project = allProjects.find(                                           // Get the project and set it in the selectedProject state                      
    (project) =>
      project.name.toLowerCase() === component.projectName.toLowerCase()
  );

  if (project) {
    setSelectedProject(project);
    setOpenAllFavoriteWindow(false)
  } else {
    console.log(`Project not found for component: ${component.name}`);
  }

  window.scrollTo({ top: 0, behavior: "smooth" });                             // Scroll to the top of the page or to the component editor
}