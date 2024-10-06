import { useAppContext } from "@/app/ContextApi"





const ComponentsNumber = () => {

  const {
    allFavoriteComponentsObject: { allFavoriteComponents },
  } = useAppContext()

  return (
    <div className="mt-11 mb-[13px] flex gap-2 items-center justify-between text-[13px]">
      <div className="flex gap-1">
        <span className="text-slate-400">You have set</span>
        <span className="text-sky-500 font-semibold">{allFavoriteComponents.length}</span>
        <span className="text-slate-400">components as favorite!</span>
      </div>
    </div>
  )
}

export default ComponentsNumber