"use client";
import React from 'react'
import { IoLocationOutline } from "react-icons/io5";

const Place = () => {

    const IconComponent = IoLocationOutline as unknown as React.FC;
  return (
    <div className='Place flex items-center gap-1'>
        <i><IconComponent /></i> 
        <b>Los Angeles</b>, California
    </div>
  )
}

export default Place