"use client";
import React, {useState, useEffect} from 'react'
import { IoSettingsOutline } from "react-icons/io5";
import { TbSunMoon } from "react-icons/tb";

const Settings = () => {

    const SettingsIcon = IoSettingsOutline as unknown as React.FC;
    const LightDarkToggle = TbSunMoon as unknown as React.FC;

    const [isDark, setIsDark] = useState(true);


    useEffect(() => {
          if(isDark) {
            document.documentElement.classList.add("dark");
          } else {
            document.documentElement.classList.remove("dark")
          }
        }, [isDark]);

  return (
    <div className='Settings'>
        <div className='theme-toggler'>
            <div className='theme-buttons'>
                <div className='light-theme-btn'>
                    <span onClick={() => setIsDark(!isDark)} className="p-2 border border-borderColor"><LightDarkToggle /></span>
                </div>
            </div>
        </div>
        <div className='settings-btn'>
            <i><SettingsIcon /></i>
        </div>
    </div>
  )
}

export default Settings