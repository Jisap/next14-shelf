import Image from "next/image";
import Link from "next/link";
import { SiReact } from "react-icons/si";

export const Navbar = () => {
  return (
    <nav className="flex m-5 max-sm:mt-9 mx-8 items-center justify-between max-sm:flex-col">
      <Logo />
      <Buttons />
    </nav>
  )
}

export const Logo = () => {
  return(
    <div className="flex gap-2 items-center">
      {/* Icon Container */}
      <div className={`bg-sky-500 flex items-center justify-center p-[6px] rounded-md`}>
        {/* Icon */}
        <div className="w-[26px] h-[26px] items-center justify-center flex">
          <SiReact className="text-white text-[22px" />
        </div>
      </div>

      {/* App Name */}
      <div className="flex gap-1 text-[22px]">
        <span className={`font-bold text-sky-500`}>
          React
        </span>
        <span className="text-slate-600">
          Shelf
        </span>
      </div>
    </div>
  )
}

export const Buttons = () => {
  return (
    <div className="flex gap-2 max-sm:flex-col max-sm:w-full max-sm:mt-8">
      <Link href="/sign-up">
        <button className={`max-sm:w-full text-sm border border-sky-500 text-white bg-sky-500 p-[8px] px-6 rounded-md`}>
          Sign In
        </button>
      </Link>

      <Link href="/sing-up">
        <button className={`max-sm:w-full text-sm border border-sky-500 text-sky-500 hover:bg-sky-500 hover:text-white p-[8px] px-6 rounded-md`}>
          Sing Up
        </button>
      </Link>
    </div>
  )
}

export const CTASection = () => {
  return(
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

export default function Home() {
  return (
   <div className="poppins">
      <Navbar />
      <CTASection />
   </div>
  );
}
