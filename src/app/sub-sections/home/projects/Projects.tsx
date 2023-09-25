"use client"
import FeaturedProjectCard from './FeaturedProjectCard';
import ProjectData from '../../../assets/projectData';
import {motion} from 'framer-motion';
import '../home.css';


export default function Projects() {

    // Cards containing text only for each project
    const cards = ProjectData().map((proj) => {

        const featuredCards = proj.featured ? 
                                <FeaturedProjectCard
                                    key={proj.id}
                                    id={proj.id}
                                    title={proj.title}
                                    text={proj.desc}
                                    link={proj.link}
                                /> : null;

        return (
            featuredCards
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