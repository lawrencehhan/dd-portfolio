'use client'
import {useState} from 'react';
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

  return (
    <main className="main page-work">
      <WorkHeader 
        selectedFilter={selectedFilter} 
        handleFilterChange={handleFilterChange} 
      />
      <WorkBody 
        selectedFilter={selectedFilter}
        endFilterChange={endFilterChange}
        changingFilter={changingFilter}
      />
    </main>
  )
}
