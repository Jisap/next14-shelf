"use client"

import React, { useEffect, useRef } from 'react'
import RoundedArrowIcon from '../components/RoundedArrowIcon'

import LogoSidebar from '../components/LogoSidebar'
import Links from '../components/Links'
import LogoutButton from '../components/LogoutButton'
import { useAppContext } from '../ContextApi'

const Sidebar = () => {

  const { 
    openSideBarObject: { openSideBar, setOpenSideBar },
    isMobileViewObject: { isMobileView },
    showSideBarObject: { showSideBar, setShowSideBar },
  } = useAppContext();

  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if(
        menuRef.current && 
        !menuRef.current.contains(event.target as Node) &&
        isMobileView
      ){
        setShowSideBar(false)
      }
    }

    if(showSideBar){
      document.addEventListener("mousedown", handleClickOutside)
    }else{
      document.removeEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  },[showSideBar, setShowSideBar, isMobileView]);

  useEffect(() => {
    if(isMobileView){
      setOpenSideBar(true)
      setShowSideBar(false)
    }else{
      setShowSideBar(true)
    }
  },[isMobileView])

  return (
    <div 
      ref={menuRef}
      style={{ position: isMobileView ? "fixed" : "relative"}}
      className={`
        ${openSideBar ? "w-[320px] p-6" : "w-[100px] p-4"} h-screen pt-12 relative transition-all duration-300 z-50 bg-white ${showSideBar ? "block" : "hidden"}
      `}
    >
      <RoundedArrowIcon />
      <LogoSidebar />
      <Links />
      <LogoutButton />
    </div>
  )
}

export default Sidebar