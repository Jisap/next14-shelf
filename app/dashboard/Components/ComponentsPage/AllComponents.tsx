import { useAppContext } from "@/app/ContextApi"
import SingleComponent from "./SingleComponent"
import { Component } from "@/app/allData";

interface AllComponentsProps {
  searchInput: string;
}

export const AllComponents = ({searchInput}: AllComponentsProps) => {

  const { selectedProjectObject: { selectedProject } } = useAppContext();

  const filteredComponents = selectedProject?.components.filter(
    (component: Component) => 
      searchInput
        ? component.name.toLowerCase().includes(searchInput.toLowerCase())
        : true
  )

  return (
    <div className="mt-10 flex flex-col gap-3">
      {filteredComponents?.map((component, index:number) => (
        <div key={index}>
          <SingleComponent component={component} />
        </div>
      ))}
    </div>
  )
}