import SingleComponent from "./SingleComponent"


export const AllComponents = () => {
  return (
    <div className="mt-10 flex flex-col gap-3">
      <SingleComponent />
      <SingleComponent />
      <SingleComponent />
    </div>
  )
}