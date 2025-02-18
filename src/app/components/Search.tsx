"use client";
import React from 'react'
import { IoMdSearch } from "react-icons/io";

const Search = () => {

    const IconComponent = IoMdSearch as unknown as React.FC;

  return (
    <div className='search-container'>
        <div className='search-icon'>
            <i><IconComponent /></i>
        </div>
        <div className='search-input'>
            <input 
                type='text'
                name='search-city'
                placeholder='Search city...'
            />
        </div>
    </div>
  )
}

export default Search