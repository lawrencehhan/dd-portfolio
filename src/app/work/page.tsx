'use client'
import {useState} from 'react';
import {motion} from 'framer-motion';
import { filterOptions, ProjectData } from '../assets/projectData';
import WorkHeader from '../sub-sections/work/header/WorkHeader';
import WorkBody from '../sub-sections/work/body/WorkBody';
import '../sub-sections/work/work.css';

export default function Work() {

  const [selectedFilter, setSelectedFilter] = useState(filterOptions[0])
  const handleFilterChange = (event:React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    setSelectedFilter(event.target.id)
  }

  return (
    <main className="main page-work">
      <WorkHeader 
        selectedFilter={selectedFilter} 
        handleFilterChange={handleFilterChange} 
      />
      <WorkBody 
        selectedFilter={selectedFilter}
      />
    </main>
  )
}
