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

export const ComponentEditor = () => {
  const [code, setCode] = useState(`
    <div>
      <>
        <h1>Direct SVG Example</h1>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
        </svg>
      </>
    </div>   
  `);

  const aceEditorRef = useRef<AceEditor | null>(null);

  const { 
    openComponentEditorObject: { openComponentEditor, setOpenComponentEditor },
    isMobileViewObject: { isMobileView }
  } = useAppContext();
  

  const formatCode = async () => {
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
    formatCode();
  }


  useEffect(() => {
    formatCode();
  }, [])


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
            onClick={() => setOpenComponentEditor(false)}
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
                <Checkbox icon={<FavoriteBorderIcon sx={{ fontSize: 19 }} />} />
              </div>
              <input
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
                <button
                  onClick={saveComponent}
                  className="bg-sky-500 hover:bg-sky-600 text-white text-xs p-2 rounded-md transition-all"
                >
                  <Save sx={{ fontSize: 17 }} />
                </button>
              </div>

              <div className="flex-1 border rounded-md overflow-hidden h-full">
                <AceEditor
                  ref={aceEditorRef}
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