import React, {useState, useEffect} from 'react';
import {motion} from 'framer-motion';

import './page.css'

export default function Home() {
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
      if (window.innerWidth <= 672) {
        setMobile(true)
      }
      window.addEventListener("resize", function() {
        if (window.innerWidth <= 672) {
            setMobile(true)
        } else {
          setMobile(false)
        }
      })
  }, [])


  return (
    <main className="main">
      
    </main>
  )
}
