'use client'
import { useState, useEffect } from 'react';
import {motion} from 'framer-motion';
import { filterOptions } from '../assets/projectData';
import WorkHeader from '../sub-sections/work/header/WorkHeader';
import WorkBody from '../sub-sections/work/body/WorkBody';
import '../sub-sections/work/work.css';

export default function Work() {

  const [selectedFilter, setSelectedFilter] = useState(filterOptions[0])
  const [changingFilter, setChangingFilter] = useState(false)
  const handleFilterChange = (event:React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    if (selectedFilter != event.target.id) {
      setSelectedFilter(event.target.id)
      setChangingFilter(true)
    }
  }
  const endFilterChange = () => {
    setChangingFilter(false)
  }
  const [isMobile, setMobile] = useState<boolean>(false)
    useEffect(() => {
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
    }, [])

  return (
    <main className="main page-work">
      <WorkHeader 
        selectedFilter={selectedFilter} 
        handleFilterChange={handleFilterChange} 
        isMobile={isMobile}
      />
      <WorkBody 
        isMobile={isMobile}
        selectedFilter={selectedFilter}
        endFilterChange={endFilterChange}
        changingFilter={changingFilter}
      />
    </main>
  )
}
