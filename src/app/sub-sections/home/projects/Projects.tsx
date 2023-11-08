"use client"
import { useState, useEffect } from 'react';
import FeaturedProjectCard from './FeaturedProjectCard';
import ProjectData from '../../../assets/projectData';
import Carousel from '../../../sub-sections/home/projects/Carousel';
import '../home.css';


export default function Projects() {

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

    // Cards containing text only for each project
    const cards = ProjectData().map((proj) => {

        const featuredCards = proj.featured ? 
                                <FeaturedProjectCard
                                    key={proj.id}
                                    id={proj.id}
                                    title={proj.title}
                                    text={proj.desc}
                                    isMobile={isMobile}
                                    image={proj.thumbnail}
                                    link={proj.link}
                                /> : null;

        return (
            featuredCards
        )
    })
    
    const cardTracker = <Carousel projectData={ProjectData()}/>;

    return (
        <div className='projects-container'>
            <div className='projects-col projects-col-blurb'>
                <div className='textbox'>
                    <div className={`${isMobile ? 'text-heading-s' : 'text-heading-l'} projects-title`}>Featured Projects</div>
                </div>
            </div>
            <div className='projects-col projects-col-media'>
                {cards}
                {/* {isMobile && cardTracker} */}
            </div>
        </div>
    )
}