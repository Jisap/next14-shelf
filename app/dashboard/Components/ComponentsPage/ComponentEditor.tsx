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
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
        </svg>
      </>
    </div>   
  `);

  const aceEditorRef = useRef<AceEditor | null>(null);

  const { openComponentEditorObject: { openComponentEditor, setOpenComponentEditor } } = useAppContext();

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
      className="w-[96%] h-[735px] max-sm:h-[90%] max-sm:flex-col border-slate-100 flex-row overflow-hidden bg-white absolute lef-1/2 top-2 rounded-2xl shadow-md  -translate-x-1/2"
    >
      {/* Left Part */}
      <div className="w-1/2 masa-sm:w-full h-full">
        {/* Header */}
        <div className="flex justify-between items-center p-7 px-8">
          <div className="flex items-center gap-2">
            {/* Category Icon */}
            <div className="w-[30px] h-[30px] bg-sky-200 rounded-full flex items-center justify-center">
              <FormatShapesIcon
                sx={{ fontSize: 17 }}
                className="text-sky-400 text-[17px]"
              />
            </div>
            {/* Category Header */}
            <span className="font-semibold">Component Editor</span>
          </div>
          <CloseIcon
            onClick={() => setOpenComponentEditor(false)}
            sx={{ fontSize: 16 }}
            className="text-slate-400 text-[18px] cursor-pointer"
          />
        </div>


        {/* Input Name */}
        <div className="flex flex-col gap-2 pt-14 px-8">
          {/* Input Label */}
          <div className="flex gap-3">
            <span className="flex gap-1 items-center text-[13px]">
              <TextFieldsIcon className="text-[15px]" />
              <span>Component Name</span>
            </span>
            <div>
              <Checkbox
                icon={<FavoriteBorderIcon sx={{ fontSize: 19 }} />}
              />
            </div>
          </div>

          {/* Input  */}
          <div className="flex gap-3">
            <input
              placeholder="Enter Component Name"
              className="p-[10px] text-[12px] w-full rounded-md  border outline-none"
            />
          </div>
        </div>

        {/* Input Code */}
        <div className="flex flex-col gap-2 pt-6 px-8">
          <div className="flex justify-between">
            {/* Input Label */}
            <span className="flex gap-1 items-center text-[13px]">
              <CodeIcon className="text-[15px] font-bold" />
              <span>JSX Code</span>
            </span>

            <button
              onClick={saveComponent}
              className="bg-sky-500 hover:bg-sky-600 text-white text-[12px] p-2 rounded-md transition-all"
            >
              <Save sx={{ fontSize: 17 }} />
            </button>
          </div>

          <div className="border border-slate-200 rounded-md relative mt-1">
            {/* Copy Button */}
            <AceEditor
              ref={aceEditorRef}
              mode="jsx"
              theme="Dreamweaver"
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
      <div className="w-1/2 max-sm:w-full max-sm:border-t border-1 max-sm:mt-5 border-slate-100 h-full">
        <LiveProvider
          code={code}
          noInline={false}
        >
          <div>
            <LiveError className="rounded-lg border-gray-200 p-4 text-red-600" />
            <LivePreview className="rounded-lg border-gray-200 p-4" />
          </div>
        </LiveProvider>
      </div>
    </div>
  )
}