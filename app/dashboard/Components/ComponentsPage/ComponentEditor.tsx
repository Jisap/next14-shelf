"use client"

import { useEffect, useRef, useState } from "react"
import CloseIcon from '@mui/icons-material/Close';
import { LiveProvider, LiveError, LivePreview } from "react-live";
import FormatShapesIcon from "@mui/icons-material/FormatShapes"
import CodeIcon from "@mui/icons-material/Code"
import AppsIcon from "@mui/icons-material/Apps"
import TextFieldsIcon from "@mui/icons-material/TextFields"
import AceEditor from "react-ace";
import prettier from "prettier/standalone";
import babelPlugin from "prettier/plugins/babel";
import estreetPlugin from "prettier/plugins/estree";
import "ace-builds/src-noconflict/mode-jsx";
import "ace-builds/src-noconflict/theme-tomorrow";
import "ace-builds/src-noconflict/theme-dreamweaver"
import "ace-builds/src-noconflict/ext-language_tools";
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useAppContext } from "@/app/ContextApi";
import { Save } from "@mui/icons-material";
import toast from "react-hot-toast";
import { Component } from "@/app/allData";
import { v4 as uuidv4 } from 'uuid';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { IconButton } from "@mui/material";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import DoneIcon from '@mui/icons-material/Done';

export const ComponentEditor = () => {
  const [code, setCode] = useState(``);
  const [inputName, setInputName] = useState<string>("");
  const [copySuccess, setCopySuccess] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const aceEditorRef = useRef<AceEditor | null>(null);
  const editorInstanceRef = useRef<any>(null);

  const { 
    openComponentEditorObject: { openComponentEditor, setOpenComponentEditor },
    allProjectsObject: { allProjects, setAllProjects },
    selectedProjectObject: { selectedProject, setSelectedProject },
    selectedComponentObject: { selectedComponent, setSelectedComponent },
  } = useAppContext();

  

  const formatCode = async (codeToFormat: string) => {
    if (aceEditorRef.current) {                                 // Comprueba si existe una referencia válida al componente del editor Ace
      try {
        const formatted = await prettier.format(code, {         // Se utiliza Prettier para formatear el código almacenado en la variable code
          parser: "babel",
          plugins: [babelPlugin, estreetPlugin],
          singleQuote: true,
          trailingComma: "all",
        });

        setCode(formatted);                                     // actualiza la variable code con el nuevo código formateado

            
        const editor = aceEditorRef.current.editor;             // obtiene la instancia de Ace desde ReactAce, permitiéndote acceder al método setValue.
        if (editor) {
          editor.setValue(formatted, 1);                        // 1 mueve el cursor al principio del archivo
        }

      } catch (error) {
        console.log("Formatting error:", error);
      }
    }
  }

  const handleChange = (newValue: string) => {
    setCode(newValue);
  }

  const saveComponent = () => {
    // Check if the project name is not empty
    if(inputName.trim() === ""){
      toast.error("Please enter a name a component name");
      inputRef.current?.focus();
      return;
    }

    //Check id code is not empty
    if(code.trim() === ""){
      toast.error("Please enter a code");
      aceEditorRef.current?.editor.focus();
      return;
    }

    if(code.trim() === ""){
      toast.error("Please enter a code");
      aceEditorRef.current?.editor.focus();
      return;
    }

    if(!selectedProject){
      toast.error("No project selected");
      return;
    }

    if(!selectedComponent){
      const newComponent: Component = {
        _id: uuidv4(),
        name: inputName,
        code: code,
        isFavorite: false,
        createdAt: new Date().toISOString(),
        projectName: selectedProject.name,
      }

      // Check if the component name already exists in the current project
      if(
        selectedProject.components.some(
          (component) => 
            component.name.toLowerCase() === inputName.toLowerCase()
        )
      ){
        toast.error("Component name already exists in this project");
        return;
      }

      addNewComponent(newComponent);
      setSelectedComponent(newComponent);
      toast.success("Component has been added successfully");
      formatCode(newComponent.code);
    }else{
      // Updating an existing component
      const updateComponent: Component = {
        ...selectedComponent,
        name: inputName,
        code: code,
      }

      // Check if the new name conflicts with other components (excluding the current one)
      if(
        selectedProject.components.some(
          (component) => 
            component._id !== selectedComponent._id &&
            component.name.toLowerCase() === inputName.toLowerCase()
        )
      ){
        toast.error("Component name already exists in this project");
        return;
      }
     
      updateExistingComponent(updateComponent);
      setSelectedComponent(updateComponent);
      toast.success("Component has been updated successfully");
    }
  }

  const addNewComponent = (newComponent: Component) => {
    if(selectedProject && allProjects){
      const updateProject = {
        ...selectedProject,
        components: [...selectedProject.components, newComponent],
      }

      const updateAllProjects = allProjects.map((project) => 
        project._id === selectedProject._id ? updateProject : project
      );

      setSelectedProject(updateProject);
      setAllProjects(updateAllProjects);
    } 
  }
  
  const updateExistingComponent = (updatedComponent: Component) => {
    if(selectedProject && allProjects){
      const updatedComponents = selectedProject.components.map((component) => 
        component._id === updatedComponent._id ? updatedComponent : component
      );
    
      const updatedProject = {
        ...selectedProject,
        components: updatedComponents,
      };

      const updatedAllProjects = allProjects.map((project) => 
        project._id === selectedProject._id ? updatedProject : project
      );

      setSelectedProject(updatedProject);
      setAllProjects(updatedAllProjects);
    }
  }

  const copyTheCode = () => {
    // Copy the code to the clipboard
    setCopySuccess(true)
    toast.success("Code has been copied to the clipboard");
    setTimeout(() => {
      navigator.clipboard.writeText(code);
      setCopySuccess(false);
    }, 1400);
  }


  useEffect(() => {
    if(openComponentEditor){
      inputRef.current?.focus();
      if(!selectedComponent){
        resetEditor()
      }else{
        setInputName(selectedComponent.name);
        setCode(selectedComponent.code);
        if(editorInstanceRef.current){
          editorInstanceRef.current.setValue( selectedComponent.code, -1 );
          formatCode(selectedComponent.code);
        }
      }
    }else{
      resetEditor();
    }
  }, [openComponentEditor, selectedComponent])

  const resetEditor = () => {
    setCode("");
    setInputName("");
    if(editorInstanceRef.current){
      editorInstanceRef.current.setValue("", -1);
    }
  }


  return (
    <div
      style={{ display: openComponentEditor ? "flex" : "none" }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4"
    >
      <div className="bg-white w-full h-full sm:w-[95vw] sm:h-[95vh] rounded-2xl shadow-md flex flex-col overflow-hidden">
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <div className="flex items-center gap-2">
            <div className="w-[30px] h-[30px] bg-sky-200 rounded-full flex items-center justify-center">
              <FormatShapesIcon sx={{ fontSize: 17 }} className="text-sky-400" />
            </div>
            <span className="font-semibold">Component Editor</span>
          </div>
          <CloseIcon
            onClick={() => {
              setOpenComponentEditor(false)
              setSelectedComponent(null);
              resetEditor();
            }}
            sx={{ fontSize: 16 }}
            className="text-slate-400 cursor-pointer"
          />
        </div>

        {/* Main content */}
        <div className="flex flex-1 overflow-hidden flex-col sm:flex-row">
          {/* Left Part */}
          <div className="w-full sm:w-1/2 flex flex-col p-4 overflow-auto h-1/2"  >
            {/* Component Name Input */}
            <div className="mb-4">
              <div className="flex items-center gap-2 mb-2">
                <TextFieldsIcon className="text-[15px]" />
                <span className="text-sm">Component Name</span>
                <Checkbox 
                  icon={<FavoriteBorderIcon sx={{ fontSize: 19 }} />} 
                  checkedIcon={
                    <FavoriteIcon 
                      sx={{ fontSize: 19 }} 
                      className="text-red-500"  
                    />
                  }  
                />
              </div>
              <input
                ref={inputRef}
                value={inputName}
                onChange={(e) => setInputName(e.target.value)}
                placeholder="Enter Component Name"
                className="p-2 text-sm w-full rounded-md border outline-none"
              />
            </div>

            {/* JSX Code Editor */}
            <div className="flex-1 flex flex-col">
              <div className="flex justify-between items-center mb-2">
                <span className="flex items-center gap-1 text-sm">
                  <CodeIcon className="text-[15px]" />
                  <span>JSX Code</span>
                </span>
                <div className="flex gap-2 items-center">
                <IconButton onClick={copyTheCode}>
                  {!copySuccess ? (
                    <ContentCopyIcon sx={{ fontSize: 17}} />
                  ) : (
                    <DoneIcon sx={{ fontSize: 17}} />
                  )}
                </IconButton>
                <button
                  onClick={saveComponent}
                  className="bg-sky-500 hover:bg-sky-600 text-white text-xs p-2 rounded-md transition-all"
                >
                  <Save sx={{ fontSize: 17 }} />
                </button>
                </div>
              </div>

              <div className="flex-1 border rounded-md overflow-hidden h-full">
                <AceEditor
                  ref={aceEditorRef}
                  onLoad={(editorInstance) => {
                    editorInstanceRef.current = editorInstance;
                  }}
                  mode="jsx"
                  theme="dreamweaver"
                  onChange={handleChange}
                  name="jsxEditor"
                  value={code}
                  editorProps={{ $blockScrolling: true }}
                  setOptions={{
                    enableBasicAutocompletion: true,
                    enableLiveAutocompletion: true,
                    enableSnippets: true,
                    showLineNumbers: true,
                    tabSize: 2,
                  }}
                  fontSize={14}
                  width="100%"
                  height="440px"
                />
              </div>
            </div>
          </div>

          {/* Right Part */}
          <div className="w-full sm:w-1/2 border-l p-4 overflow-auto">
            <LiveProvider code={code} noInline={false}>
              <LiveError className="rounded-lg border-gray-200 p-4 text-red-600 mb-4" />
              <LivePreview className="rounded-lg border-gray-200 p-4" />
            </LiveProvider>
          </div>
        </div>
      </div>
    </div>
  )
}