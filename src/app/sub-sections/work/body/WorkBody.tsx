'use client'
import {useState} from 'react';
import { filterOptions } from '@/app/assets/projectData';
import {AnimatePresence, motion} from 'framer-motion';
import ProjectCard from './ProjectCard';
import ProjectData from '../../../assets/projectData';
import { useEffect } from 'react';
interface WorkBody {
    selectedFilter: string;
    changingFilter: boolean;
    endFilterChange: () => void;
}

export default function WorkBody(props:WorkBody) {
    const { selectedFilter, changingFilter, endFilterChange } = props;
    const filteredCards = ProjectData().map((proj) => {
        const selected = proj.tag.includes(selectedFilter) || (selectedFilter === 'All');
        const card = selected ? <ProjectCard
                                    key={proj.id}
                                    featured={proj.featured}
                                    id={proj.id}
                                    title={proj.title}
                                    text={proj.desc}
                                    link={proj.link}
                                /> : null;
            return (
                card
    )})
    useEffect(() => {
        const timer = setTimeout(() => {
            console.log('This will run after 1.2 second!')
            endFilterChange()
        }, 1400);
        return () => clearTimeout(timer);
        }, [selectedFilter]);

    // Framer Setup - unload and reload items per selection change
    const container = {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
          transition: {
            staggerChildren: .12,
          },
        },
        hide: { 
            opacity: 0,
            transition: {
                staggerDirection: -1,
            }
        }
    }

    return (
            <motion.div className='work-body'
                initial='hidden'
                animate='visible'
                exit='hide'
                variants={container}
            > 
                <AnimatePresence mode='wait'>
                    {!changingFilter && filteredCards}
                </AnimatePresence>
            </motion.div>
    )
}