import Image from "next/image";
import Link from "next/link";
import { SiReact } from "react-icons/si";
import StorageRoundedIcon from '@mui/icons-material/StorageRounded';
import CodeRoundedIcon from '@mui/icons-material/CodeRounded';
import ChangeHistoryRoundedIcon from '@mui/icons-material/ChangeHistoryRounded';

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

export const Features = () => {
  const features = [
    {
      id: 1,
      name: "Centralized Component Library",
      icon: <StorageRoundedIcon className="text-sky-500 text-[32px]" />,
      description: "Organize all your React components in a centralized library. Easily browse, search, adn access your saved components whenever you need them"
    },
    {
      id: 2,
      name: "Reusable Components",
      icon: <CodeRoundedIcon className = "text-sky-500 text-[32px]" />,
      description: "Create and edit your react components directly within our intuitive editor. Write JSX code with syntax highlighting and instant previews."
    },
    {
      id: 3,
      name: "Version Control and History",
      icon: <ChangeHistoryRoundedIcon className="text-sky-500 text-[32px]" />,
      description: "Track changes and maintain different versions of your components. Revert to previous versions if needed and keep a history of modifications."
    },
  ];

  return (
    <section className="features-section py-12 bg-slate-50 mt-12">
      <div className="mx-auto px-4">
        <h2 className="text-2xl font-bold text-center">
          Key Features
        </h2>

        <div className="mt-12 grid grid-cols-1  md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              className="p-6 bg-white rounded-lg shadow-sm flex flex-col items-center"
              key={index}
              >
              <div className="w-20 h-20 rounded-full items-center justify-center flex bg-sky-100">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-sky-500 mt-6 text-center">
                {feature.name}
              </h3>
              <p className="text-slate-600 text-[13px] mt-2 text-center w-[80%]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
   <div className="poppins">
      <Navbar />
      <CTASection />
      <Features />
   </div>
  );
}
