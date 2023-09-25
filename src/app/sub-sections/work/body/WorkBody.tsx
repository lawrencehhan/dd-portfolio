'use client'
import { filterOptions } from '@/app/assets/projectData';
import {AnimatePresence, motion} from 'framer-motion';
import ProjectCard from './ProjectCard';
import ProjectData from '../../../assets/projectData';
interface WorkBody {
    selectedFilter: string;
}

export default function pWorkBody(props:WorkBody) {
    const { selectedFilter } = props;
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


    const container = {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.2
          },
        },
        hide: { opacity: 0 }
    }

    return (
        <AnimatePresence>
            <motion.div className='work-body'
                initial='hidden'
                animate='visible'
                exit='hide'
                variants={container}
            > 
                {filteredCards}
            </motion.div>
        </AnimatePresence>
    )
}