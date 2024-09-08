import { useAppContext } from "@/app/ContextApi"
import SingleComponent from "./SingleComponent"


export const AllComponents = () => {

  const { selectedProjectObject: { selectedProject } } = useAppContext();


  return (
    <div className="mt-10 flex flex-col gap-3">
      {selectedProject?.components.map((component, index:number) => (
        <div key={index}>
          <SingleComponent component={component} />
        </div>
      ))}
    </div>
  )
}