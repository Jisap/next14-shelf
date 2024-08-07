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

export default function Home() {
  return (
   <div className="poppins">
      <Navbar />
   </div>
  );
}
