import Checkbox from '@mui/material/Checkbox';
import { useEffect, useRef, useState } from "react"
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
import { ContentCopy, DoneAll } from '@mui/icons-material';
import toast from 'react-hot-toast';




const SingleComponent = ({ component }: { component: Component}) => {

  const { 
    allProjectsObject: { allProjects, setAllProjects },
    selectedProjectObject: { selectedProject, setSelectedProject },
    openDropDownObject: { openDropDown, setOpenDropDown },
    dropDownPositionsObject: { dropDownPositions, setDropDownPositions },
    selectedComponentObject: { selectedComponent, setSelectedComponent },
    openComponentEditorObject: { openComponentEditor, setOpenComponentEditor },
  } = useAppContext();

  const iconRef = useRef<HTMLDivElement>(null);

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

  const [copySuccess, setCopySuccess] = useState(false);

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

  useEffect(() => { 
    const updatedComponent = selectedProject?.components.find(comp => comp._id === component._id); // Busca el componente actualizado en el proyecto seleccionado
    if (updatedComponent) {
      setFavorite(updatedComponent.isFavorite);                                                    // Y si lo encuentra, sincroniza el valor de isFavorite con los cambios más recientes en allProjects.                            
    }
  }, [allProjects, selectedProject, component._id]);

  // const updateFavoriteState = () => {
   
  //   const newAllProjects = allProjects.map((project: Project) => {              // Mapeamos (creamos copia) allProjects y para cada proyecto

  //     // Actualización de componentes dentro de cada proyecto:
  //     const updatedComponents = project.components.map((comp: Component) => {   // Mapeamos los componentes del proyecto
  //       if (comp._id === component._id) {                                       // Si el componente es el actual seleccionado
  //         return {
  //           ...comp,
  //           isFavorite: !comp.isFavorite                                        // Cambiamos el estado de isFavorite
  //         }
  //       }
  //       return comp;                                                            // Si no es el componente actual, no hacemos nada                       
  //     });

  //     // Condicional para verificar si los componentes han cambiado:
  //     if (updatedComponents !== project.components) {                           // Si el estado de isFavorite cambió,   
  //       return { ...project, components: updatedComponents }                    // retorna una copia del proyecto, pero actualizando su propiedad components con updatedComponents.
  //     }
  //     return project;                                                           // Si no cambió, no hacemos nada
  //   });

  //   // Actualización del proyecto seleccionado 
  //   if (selectedProject) {                                                       // Si el proyecto seleccionado existe
  //     const updatedSelectedProject = newAllProjects.find(                       // busca el proyecto actualizado dentro de newAllProjects usando el método .find(), comparando los IDs del proyecto actual con el del seleccionado. 
  //       (project: Project) => project._id === selectedProject._id
  //     );

  //     if (updatedSelectedProject) {                                              // Si el proyecto actualizado existe
  //       setSelectedProject(updatedSelectedProject);                            // Actualizamos el proyecto seleccionado con los nuevos datos
  //     }
  //   }
  //   setFavorite(!isFavorite);
  //   setAllProjects(newAllProjects);                                             // Actualizamos allProjects con los nuevos datos
  // }

  const updateFavoriteState = async () => {
    if (selectedProject && allProjects) {
      // Encuentra el componente actual en el proyecto seleccionado
      const updatedComponent = {
        ...component,
        isFavorite: !isFavorite
      };

      try {
        // Actualiza el estado en la base de datos
        const response = await fetch(
          `/api/projects?projectId=${selectedProject._id}&componentId=${component._id}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              action: "updateFavorite",
              component: updatedComponent,
              isFavorite: updatedComponent.isFavorite
            }),
          }
        );

        if (!response.ok) {
          throw new Error("Failed to update favorite state");
        }

        const { project: updatedProject } = await response.json();

        // Actualiza allProjects con el proyecto actualizado
        const newAllProjects = allProjects.map((project: Project) =>
          project._id === selectedProject._id ? updatedProject : project
        );

        // Actualiza los estados locales
        setFavorite(!isFavorite);
        setSelectedProject(updatedProject);
        setAllProjects(newAllProjects);

        toast.success("Favorite state updated successfully");
      } catch (error) {
        console.error("Error updating favorite state:", error);
        toast.error("Failed to update favorite state");
        // Revierte el cambio local si la actualización en DB falla
        setFavorite(isFavorite);
      }
    } else {
      console.error("Selected project or all projects is null");
      toast.error("Cannot update favorite state: No project selected");
    }
  };

  const openTheDropDown = (event:React.MouseEvent) => {
    event.stopPropagation();
    if(iconRef.current){                                    // Si el elemento referenciado tiene un valor (porque se ha pulsado en el icono)
      const rect = iconRef.current.getBoundingClientRect(); // Obtenemos el rectángulo del elemento como coordenadas
      const top = rect.top;                                 // Obtenemos la posición vertical del elemento
      const left = rect.left;                               // Obtenemos la posición horizontal del elemento

      //Open the drop down
      setOpenDropDown(true);
      //Update the drop down positions
      setDropDownPositions({
        top: top,
        left: left,
      });
      setSelectedComponent(component);
    }
    //Get the top and the left position of the icon
  }

  const openTheComponentEditor = () => {
    setSelectedComponent(component);
    setOpenComponentEditor(true);
  }

  const truncateString = (str: string, num: number) => {
    if (str.length <= num) {
      return str
    }
    return str.slice(0, num)  + "..."
  }

  const copyTheCode = (code:string) => {
    // Copy the code to the clipboard
    setCopySuccess(true)
    toast.success("Code has been copied to the clipboard");
    setTimeout(() => {
      navigator.clipboard.writeText(code);
      setCopySuccess(false);
    }, 1400);
  }

  return (
    <div className="bg-white w-full rounded-lg p-8 pt-8 pb-10 mb-3">
      {/* Compponent title  and checkbox to favorite*/}
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <span 
            onClick={openTheComponentEditor}
            className="font-bold text-[19px] cursor-pointer"
          >
            {component.name}
          </span>
          <Checkbox
            checked={isFavorite}
            onChange={updateFavoriteState}
            icon={<FavoriteBorderIcon className="text-slate-400 text-[20px]" />}
            checkedIcon={<FavoriteIcon className="text-red-500 text-[20px]" />}
          />  
        </div>
        {/* Icon to open the dropdown */}
        <div
          ref={iconRef}
          onClick={openTheDropDown}
        >
          <IconButton>
            <MoreVertIcon className="text-slate-400 text-[20px]" />
          </IconButton>
        </div>
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
        <div className="border rounded-md mt-6 w-full relative">
          <div className='absolute top-4 right-4 z-50 rounded-full bg-slate-200'>
            <IconButton
              onClick={() => copyTheCode(component.code)}
            >
              {!copySuccess ? (
                <ContentCopy sx={{ fontSize: 16 }} />
              ):(
                <DoneAll sx={{ fontsize: 16 }} />
              )}
            </IconButton>

          </div>
          <SyntaxHighlighter
            language={"javascript"}
            style={atelierSulphurpoolLight}
            wrapLines={true}
            wrapLongLines={true}
          >
            {truncateString(component.code, 600)}
          </SyntaxHighlighter>
        </div>
      )}

    
    
    </div>


  )
}

export default SingleComponent