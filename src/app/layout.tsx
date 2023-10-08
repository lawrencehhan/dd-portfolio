'use client'
import Head from 'next/head';
import { useState, useEffect } from 'react';
import './globals.css'
import type { Metadata } from 'next'
import NavLinks from './assets/navLinks';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
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
  const [isFirstBoot, setIsFirstBoot] = useState<boolean>(true)
  useEffect(() => {
      // Check for initial render
      isFirstBoot && setIsFirstBoot(prevIsFirstBoot => !prevIsFirstBoot)
      // Listening for window resizing
      if (window.innerWidth <= 1120) {
        setMobile(true)
      }
      window.addEventListener("resize", function() {
        if (window.innerWidth <= 1120) {
            setMobile(true)
        } else {
          setMobile(false)
        }
      })
      console.log(NavLinks[0])
  }, [])
  console.log(isMobile)
  // Check to see if navbar Burger is open
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const handleOpen = () => {
    setIsOpen(prevIsOpen => !prevIsOpen)
  }

  
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="viewport-fit=cover" />
      </Head>
      <body className={`${montserrat.variable} ${ovo.variable}`}>
        <Navbar 
          navLinks={NavLinks}
          darkMode={darkMode}
          isFirstBoot={isFirstBoot} 
          isMobile={isMobile} 
          isOpen={isOpen} 
          handleOpen={handleOpen}
          handleDarkToggle={handleDarkToggle}
        />
        {children}
        <Footer
          darkMode={darkMode}
        />
      </body>
    </html>
  )
}
