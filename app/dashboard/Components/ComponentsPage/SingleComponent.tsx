import { More, Preview } from "@mui/icons-material"
import { useState } from "react"
import PreviewIcon from '@mui/icons-material/Preview';
import CodeIcon from '@mui/icons-material/Code';
import { IconButton } from "@mui/material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { LiveError, LivePreview, LiveProvider } from "react-live";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atelierSulphurpoolLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';


const SingleComponent = () => {

  const[code, setCode] = useState(`
    <div className="p-4 bg-blue-100 rounded-lg">
      <h1 className="text-2xl font-bold text-blue-700">Hello, Tailwind!</h1>
      <p className="mt-2 text-gray-600">Edit this code.</p>
    </div>  
  `)

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
      })
    })
  }

  return (
    <div className="bg-white w-full rounded-lg p-8 pt-8 pb-10 mb-3">
      {/* Compponent title */}
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <span className="font-bold text-[19px]">
            Outline Buttons
          </span>
          <IconButton>
            <FavoriteBorderIcon className="text-slate-400 text-[20px]" />
          </IconButton>
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
            code={code}
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
            {code}
          </SyntaxHighlighter>
        </div>
      )}

    
    
    </div>


  )
}

export default SingleComponent