'use client'
import { useState, useEffect } from 'react';
import './globals.css'
import type { Metadata } from 'next'
import Navbar from './components/navbar/Navbar';
import { Montserrat, Ovo } from 'next/font/google'

// export const metadata: Metadata = {
//   title: 'Danielle Dacanay Portfolio',
//   description: 'Web-portfolio containing the work and experience of Danielle Dacanay.',
// }

// Fonts
const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: '--font-montserrat'
})
const ovo = Ovo({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-ovo'
})


export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {

  // Dark Mode Handling
  const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [darkMode, setDarkMode] = useState<boolean>(isDarkMode)
  const handleDarkToggle = (event:React.ChangeEvent) => {
    setDarkMode( prevDarkMode => !prevDarkMode )
    event.stopPropagation()
  }

  // Check for device width
  const [isMobile, setMobile] = useState<boolean>(false)
  useEffect(() => {
      // Listening for window resizing
      if (window.innerWidth <= 700) {
        setMobile(true)
      }
      window.addEventListener("resize", function() {
        if (window.innerWidth <= 700) {
            setMobile(true)
        } else {
          setMobile(false)
        }
      })
  }, [])

  // Check to see if navbar Burger is open
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const handleOpen = () => {
    setIsOpen(prevIsOpen => !prevIsOpen)
  }

  
  return (
    <html lang="en">
      {/* <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lora">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,300,200">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Bebas+Neue">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Plus+Jakarta+Sans">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Vazirmatn:400,200,100"></link> */}
      {/* <body className={inter.className}>{children}</body> */}
      <body className={`${montserrat.variable} ${ovo.variable}`}>
        <Navbar 
          darkMode={darkMode} 
          isMobile={isMobile} 
          isOpen={isOpen} 
          handleOpen={handleOpen}
          handleDarkToggle={handleDarkToggle}
        />
        {children}
      </body>
    </html>
  )
}
