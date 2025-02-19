'use client';
import { useState, useEffect } from 'react';
import { TbSunMoon } from 'react-icons/tb';
import Image from 'next/image';
import Header from './components/Header';
import Main from './components/Main';
import { ThemeProvider } from './context/theme.context';

export default function Home() {
  return (
    <>
    <ThemeProvider>
        <div className="Header">
          <Header />
        </div>
        <div className="Main">
          <Main />
        </div>
      </ThemeProvider>
    </>
  );
}
