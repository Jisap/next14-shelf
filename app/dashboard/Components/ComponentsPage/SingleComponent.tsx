import Checkbox from '@mui/material/Checkbox';
import { useState } from "react"
import PreviewIcon from '@mui/icons-material/Preview';
import CodeIcon from '@mui/icons-material/Code';
import { IconButton } from "@mui/material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { LiveError, LivePreview, LiveProvider } from "react-live";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atelierSulphurpoolLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { Component, Project } from "@/app/allData";
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useAppContext } from "@/app/ContextApi";



const SingleComponent = ({ component }: { component: Component}) => {

  const { 
    allProjectsObject: { allProjects, setAllProjects },
    selectedProjectObject: { selectedProject, setSelectedProject },
  } = useAppContext();

  const[code, setCode] = useState(``)

  const [theme, setTheme] = useState('github')
  const [tabMenu, setTabMenu] = useState([
    {
      id: 1,
      icon: <PreviewIcon className="text-[19px]" />,
      name: "Preview",
      isSelected: true
    },
    {
      id: 2,
      icon: <CodeIcon className="text-[19px]" />,
      name: "Jsx",
      isSelected: false,
    }
  ]);

  const changeTabState = (index: number) => {         // Cambia el estado de isSelected de un item de tabMenu
    setTabMenu((prevTabMenu) => {                     
      return prevTabMenu.map((singleItem, i) => {
        return i === index
          ? { ...singleItem, isSelected: true }
          : { ...singleItem, isSelected: false }
      });
    });
  }

  const [isFavorite, setFavorite] = useState(component.isFavorite);

  const updateFavoriteState = () => {
    const newAllProjects = allProjects.map((project: Project) => {              // Mapeamos (creamos copia) allProjects y para cada proyecto

      // Actualización de componentes dentro de cada proyecto:
      const updatedComponents = project.components.map((comp: Component) => {   // Mapeamos los componentes del proyecto
        if (comp._id === component._id) {                                       // Si el componente es el actual seleccionado
          return {
            ...comp,
            isFavorite: !comp.isFavorite                                         // Cambiamos el estado de isFavorite
          }
        }
        return comp;                                                            // Si no es el componente actual, no hacemos nada                       
      });
      
      // Condicional para verificar si los componentes han cambiado:
      if(updatedComponents !== project.components) {                            // Si el estado de isFavorite cambió,   
        return { ...project, components: updatedComponents }                    // retorna una copia del proyecto, pero actualizando su propiedad components con updatedComponents.
      }
      return project;                                                           // Si no cambió, no hacemos nada
    });
    
    // Actualización del proyecto seleccionado 
    if(selectedProject) {                                                       // Si el proyecto seleccionado existe
      const updatedSelectedProject = newAllProjects.find(                       // busca el proyecto actualizado dentro de newAllProjects usando el método .find(), comparando los IDs del proyecto actual con el del seleccionado. 
        (project: Project) => project._id === selectedProject._id               
      );

      if(updatedSelectedProject){                                              // Si el proyecto actualizado existe
        setSelectedProject(updatedSelectedProject);                            // Actualizamos el proyecto seleccionado con los nuevos datos
        console.log("updatedSelectedProject", updatedSelectedProject);
      }
    }
    setFavorite(!isFavorite);
    setAllProjects(newAllProjects);                                             // Actualizamos allProjects con los nuevos datos
  }

  return (
    <div className="bg-white w-full rounded-lg p-8 pt-8 pb-10 mb-3">
      {/* Compponent title */}
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <span className="font-bold text-[19px]">
            {component.name}
          </span>
          <Checkbox
            checked={isFavorite}
            onChange={updateFavoriteState}
            icon={<FavoriteBorderIcon className="text-slate-400 text-[20px]" />}
            checkedIcon={<FavoriteIcon className="text-red-500 text-[20px]" />}
          />  
        </div>
        <IconButton>
          <MoreVertIcon className="text-slate-400 text-[20px]" />
        </IconButton>
      </div>
    
      {/* Component Preview and Code Buttons */}
      <div className="flex gap-2 mt-8 text-[13px]">     
        {/* Preview */}
        {tabMenu.map((item, index) => (
          <div
            key={index}
            onClick={() => changeTabState(index)}
            className={`
              flex gap-1 items-center cursor-pointer select-none text-slate-400 px-3 py-[4px] rounded-md
              ${item.isSelected ? "bg-sky-500 text-white" : "hover:bg-slate-100"}
            `}
          >
            {item.icon}
            <span className="mt-[2px]">{item.name}</span>
          </div>
        ))} 
      </div>
    
      {/* The component */}
      {tabMenu[0].isSelected ? (
        <div className="w-full border rounded-md border-slate-200 mt-6">
          <LiveProvider 
            code={component.code}
            noInline={false}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <LiveError className="rounded-lg border-gray-200 p-4 text-red-600" />
              <LivePreview className="rounded-lg border-gray-200 p-4" />
            </div>
          </LiveProvider>
        </div>
      ):(
        <div className="border rounded-md mt-6 w-full">
          <SyntaxHighlighter
            language={"javascript"}
            style={atelierSulphurpoolLight}
            wrapLines={true}
            wrapLongLines={true}
          >
            {component.code}
          </SyntaxHighlighter>
        </div>
      )}

    
    
    </div>


  )
}

export default SingleComponent