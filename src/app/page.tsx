"use client";
import { useState, useEffect } from 'react';
import { TbSunMoon } from "react-icons/tb";
import Image from "next/image";
import Header from "./components/Header";
import Main from "./components/Main";


export default function Home() {

  // forces Typescript to view this as a React Component
  const IconComponent = TbSunMoon as unknown as React.FC;

   // Functionality may exist outside of the header but for now it will live here
    const [isDark, setIsDark] = useState(false);
  
    useEffect(() => {
      if(isDark) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark")
      }
    }, [isDark]);

  return (
    <>
    <div className={`${isDark ? "dark" : ""} min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white`}>
    <div className="Header">
      <Header />
      </div>
      <button onClick={() => setIsDark(!isDark)} className="p-2 border border-borderColor">
        <IconComponent />
        </button>
      <div className="Main">  
        <Main />
      </div>
      <div></div>
      <div></div>
      <div></div>
      </div>
    
    </>
  );
}
