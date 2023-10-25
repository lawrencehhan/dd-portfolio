'use client'
import { useState } from 'react';
import { filterOptions } from '@/app/assets/projectData';
import { motion, AnimatePresence } from 'framer-motion';
interface DropDownMenu {
    selectedFilter: string;
    handleFilterChange: (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
}

export default function DropDownMenu(props:DropDownMenu) {
    const {selectedFilter, handleFilterChange} = props;
    // Dropdown Button Management
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const handleFilterButton = () => {
        setIsOpen(prevIsOpen => !prevIsOpen)
    }

    const dropDownOptions = filterOptions.map((filter) => (
        <li 
            className={filter === selectedFilter ? 'selected work-filter' : 'work-filter'}
            key={filter}
            id={filter}
            onClick={(event) => {
                handleFilterChange(event)
                handleFilterButton()
            }}
            style={filter===selectedFilter ? {color:'#CE7777'}:{}}
            >
                {filter}
        </li>  
    ))



    // Dropdown Motion Components
    const dropdownVariants = {
        hidden: {
            opacity: 0,
            y: -50,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 260,
                damping: 20,
            }
        },
        hide: {
            opacity: 0,
            y: -50,
            transition: {
                type: "spring",
                stiffness: 260,
                damping: 20,
            }
        }
    }

    // Arrow Motion Components
    const arrowVariations = isOpen ? "openArrow" : "closedArrow" 
    const arrowVariants = {
        closedArrow: {
            rotate: 0,
        },
        openArrow: {
            rotate: 180,
        }
    }
    const transition = {
        type: "spring",
        stiffness: 260,
        damping: 20,
    }
    // Arrow Line Props
    const arrowProps = {
        initial: "closedArrow",
        animate: arrowVariations,
        transition,
    }


    return (
        <div className='work-filters'>
            <button 
                className="filter-button"
                onClick={handleFilterButton}
            >
                <span className="selected-value">{selectedFilter}</span>
                <motion.svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="19" 
                    height="9" 
                    viewBox="0 0 19 9" 
                    fill="none"
                    className='button-arrow'
                    variants={arrowVariants}
                    {...arrowProps}
                >
                    <path d="M1.71777 1L9.13701 7.58929C9.19117 7.64053 9.25657 7.68138 9.3292 7.7093C9.40182 7.73722 9.48011 7.75163 9.55925 7.75163C9.63838 7.75163 9.71667 7.73722 9.7893 7.7093C9.86192 7.68138 9.92732 7.64053 9.98148 7.58929L17.4007 1" stroke="black" stroke-width="1.71429" stroke-linecap="round" stroke-linejoin="round"/>
                </motion.svg>
            </button>
            <AnimatePresence>
                {isOpen && 
                    <motion.ul 
                        className="work-dropdown"
                        key="dropdown"
                        initial="hidden"
                        animate="visible"
                        exit="hide"
                        variants={dropdownVariants}
                    >
                        {dropDownOptions}
                    </motion.ul>
                }
            </AnimatePresence>
        </div>
    )
}