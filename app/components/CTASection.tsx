


export const CTASection = () => {
  return (
    <div className="flex flex-col mx-16 items-center mt-[120px] gap-6">
      <h2 className="font-bold text-2xl text-center">
        Manage and Create Your React Components
        <span className={`text-sky-500`}>Effortlessly</span>
      </h2>
      <p className="text-center text-[15px] w-[510px] max-sm:w-full text-slate-500 leading-relaxed tracking-wide">
        Save time reusing your favorite components. Store them in a centralized
        database and create new components with ease. Enhance your development
        workflow by having quick acces to a library of reusable components and
        ensure consistency across your projects.
      </p>
      <button className={`block bg-sky-500 rounded-md px-9 py-3 text-sm font-medium text-white hover:bg-sky-600`} type="button">
        {`let's get started!`}
      </button>
    </div>
  )
}