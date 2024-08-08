import { useAuth } from "@clerk/nextjs"
import Link from "next/link"



export const Buttons = () => {

  const { userId } = useAuth()

  return (
    <div className="flex gap-2 max-sm:flex-col max-sm:w-full max-sm:mt-8">
      {!userId ? (
        <>
          <Link href="/sign-in">
            <button className={`max-sm:w-full text-sm border border-sky-500 text-white bg-sky-500 p-[8px] px-6 rounded-md`}>
              Sign In
            </button>
          </Link>

          <Link href="/sing-up">
            <button className={`max-sm:w-full text-sm border border-sky-500 text-sky-500 hover:bg-sky-500 hover:text-white p-[8px] px-6 rounded-md`}>
              Sing Up
            </button>
          </Link>
        </>
      ) : (
        <Link href="/dashboard">
          <button className={`max-sm:w-full text-sm border bg-sky-500 text-white hover:bg-sky-600 hover:text-white p-[8px] px-6 rounded-md`}>
            Dashboard
          </button>
        </Link>

      )}
    </div>
  )
}