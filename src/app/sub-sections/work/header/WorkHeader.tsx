'use client'
import {useState, useEffect} from 'react';
import { filterOptions } from '@/app/assets/projectData';
import {motion} from 'framer-motion';
import DropDownMenu from './DropDownMenu';
interface WorkHeader {
    selectedFilter: string;
    handleFilterChange: (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
}

export default function WorkHeader(props:WorkHeader) {
    const {selectedFilter, handleFilterChange} = props;

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

    const variants = {
        hover: { 
            scale: 1.05,
            // color: '#CE7777',
            opacity: 0.8,
            transition: { 
                duration: 0.1,
                ease: "easeInOut",
             }
        },
        tap: {
            opacity: 0.9,
            scale: 0.98,
        }
    }
    const headerFilters = filterOptions.map((filter) => (
        <motion.li 
            className={filter === selectedFilter ? 'selected text-heading-s work-filter' : 'text-heading-s work-filter'}
            key={filter}
            id={filter}
            whileHover='hover'
            variants={variants}
            onClick={(event) => {
                handleFilterChange(event)
            }}
            style={filter===selectedFilter ? {color:'#CE7777'}:{}}
            >
                {filter}
                {filter === selectedFilter ? (
                    <motion.div className={`${filter.toLowerCase()}-underline`} layoutId="underline" />
                    ) : null}
        </motion.li>  
    ))

    return (
        <div className='work-header'>
            <div className={`${isMobile?'text-heading-s':'text-heading-l'} title`}>Portfolio</div>
            {!isMobile && 
                <ul className='work-filters'>
                    {headerFilters}
                </ul>
            }
            {isMobile && <DropDownMenu selectedFilter={selectedFilter} handleFilterChange={handleFilterChange} />}
      </div>
    )
}