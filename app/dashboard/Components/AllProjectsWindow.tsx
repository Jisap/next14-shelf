import { useAppContext } from "@/app/ContextApi";
import Header from "./Header";
import SearchBar from "./SearchBar";
import SortByComponent from "./SortByComponent";
import ProjecstList from './ProjectsList';
import SearchBarProjectsWindow from "./SearchBarProjectsWindow";




const AllProjectsWindow = () => {

  const {
    openAllProjectsWindowObject: { openAllProjectsWindow , setOpenAllProjectsWindow },
  } = useAppContext();

  return (
    <div
      style={{ display: openAllProjectsWindow ? "block" : "none" }}
      className="w-[70%] max-w-sm:w-[90%] p-9 border border-slate-50 h-[82%] bg-white rouded-xl shadow-md absolute left-1/2 top-8 -translate-x-1/2 z-50"
    >
      <Header />
      <SearchBarProjectsWindow />
      <SortByComponent />
      <ProjecstList />
    </div>
  )
}

export default AllProjectsWindow