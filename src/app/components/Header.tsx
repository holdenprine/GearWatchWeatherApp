"use client";
import React, { useEffect, useState } from 'react';
import Place from "./Place";
import Search from './Search';
import Settings from './Settings';


const Header = () => {

  return (
    <>
      <div className='Header'>
        <Place />
        <Search />
        <Settings />
      </div>
    </>
  )
}

export default Header