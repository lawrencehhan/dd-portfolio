"use client"
import ProjectCard from './ProjectCard';
import ProjectData from '../../../assets/projectData';
import {motion} from 'framer-motion';
import '../home.css';


export default function Projects() {

    // Cards containing text only for each project
    const cards = ProjectData().map((proj) => {
        return (
            // Previous Version included images with mapping,
            // However, having useInView ref vals within the mapping
            // caused infinite renderings - will return for updates
            <ProjectCard 
                key={proj.id}
                id={proj.id}
                title={proj.title}
                text={proj.desc}
                // blob={proj.blob}
                // isVector={proj.isVector}
                // image={proj.image}
                link={proj.link}
            />
        )
    })



    return (
        <div className='projects-container'>
            <div className='projects-col projects-col-blurb'>
                <div className='textbox'>
                    <div className='text-heading-l projects-title'>Featured Projects</div>
                </div>
            </div>
            <div className='projects-col projects-col-media'>
                {cards}
            </div>
        </div>
    )
}