'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import '../workPages.css'
import Image from 'next/image'
import DesignCard from '@/app/components/DesignCard'
import DesignCardData from '@/app/assets/designCardData'

export default function Bookd() {

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

    const designCards = DesignCardData().map((data) => {
        const targetProject = data.designProject === 'bookd'
        const card = targetProject ? <DesignCard
                                    id={data.sub_id}
                                    title={data.title}
                                    text={data.text}
                                    image={data.image}
                                /> : null;
            return (
                card
    )})
   
  return (
    <main className="main work-page bookd">
        <Image
            className='banner'
            src={'/projectImages/bookd_banner.png'}
            alt={'Bookd-Banner'}
            width={1440}
            height={349}
        />
        <div className="project-overview">
            <div className="project-overview-col project-overview-col-thumbnail">
                <Image
                    className='thumbnail'
                    src={'/projectImages/bookd_thumbnail.png'}
                    alt={'Bookd-Thumbnail'}
                    width={466}
                    height={432}
                />
            </div>
            <div className="project-overview-col project-overview-col-text">
                <div className='textbox'>
                    <div className={`${isMobile ? 'text-heading-s' : 'text-heading-l' } title`}>
                        Simplifying Reservations 
                    </div>
                    <div className={`${isMobile ? 'text-body-s' : 'text-body-xl' } sub-title`}>
                        Project Overview 
                    </div>
                    <div className={`${isMobile ? 'text-body-s' : 'text-body-m'} body`}>
                        Book’d is an appointment calendar app that helps restaurants and other businesses in the food industry manage dining reservations. Many restaurants still rely on handwritten appointment books to manage reservations. This can be overwhelming and at times unreliable.
                        <br></br>
                        <br></br>
                        As part of the Google UX Design course through Coursera, the challenge was to design an app that streamlines reservation management tasks and allows users to easily add, update and find reservations.
                        <br></br>
                        <br></br>
                        Role: UX Researcher, UI Designer | Duration: November 2021 - January 2022 (8 weeks)
                    </div>
                    <motion.button className={'btn'}
                        whileHover={{ 
                            scale: 1.04, 
                            transition: {
                                duration: .12,
                                ease: 'easeOut'
                            } 
                        }}
                        whileTap={{ scale: 0.92, opacity: .3 }}
                    >
                        <a
                            className="btn-link"
                            href="https://www.figma.com/proto/AAQ02CXF4IE1f6XFC64Eny/Restaurant-Reservation-App?node-id=118%3A14&scaling=scale-down&page-id=118%3A2&starting-point-node-id=118%3A14"
                            target="_blank"
                        >
                            View Prototype
                        </a>
                    </motion.button>
                </div>
            </div>
        </div>
        <div className="container-accent">
            <div className="user-research">
                <div className="user-research-col">
                    <div className={`${isMobile ? 'text-heading-s' : 'text-heading-m' } title full-length`}>
                        Understanding the users
                    </div>
                    <div className={`${isMobile ? 'text-body-s' : 'text-body-xl' } sub-title full-length`}>
                        User Research
                    </div>
                </div>
                <div className="user-research-col-full">
                    <div className='textbox'>
                        <div className='text-heading-xs textbox-title'>
                            Method
                        </div>
                        <div className='text-body-m textbox-body'>
                            I conducted interviews and created empathy maps to better understand the users and their needs. A primary user group identified during the research was busy restaurant hosts who had more than one role on the staff. This user group confirmed some initial assumptions about restaurant hosts, but further research revealed that time constraints were only part of the causes for finding difficulty with bookkeeping.
                        </div>
                    </div>
                    <div className='textbox textbox-pain'>
                        <div className='text-heading-xs textbox-title'>
                            Pain Points
                        </div>
                        <ul className='text-body-m textbox-body'>
                            <li>
                                <span className='pain-point'>Time</span> — Employees often have multiple to perform roles, such as setting tables and answering phone calls, while guests wait at the entrance for their table
                            </li>
                            <li>
                                <span className='pain-point'>Inconsistency</span> — The amount of information that is noted down for a reservation varies from employee to employee
                            </li>
                            <li>
                                <span className='pain-point'>Legibility</span> — Some employees have a difficult time reading the handwriting of others, which makes it challenging to find reservations quickly
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className='container'>
            <div className="user-rep">
                <div className="user-rep-col">
                    <div className={`${isMobile ? 'text-heading-s' : 'text-heading-m' } title full-length`}>
                        Representing the user groups
                    </div>
                    <div className={`${isMobile ? 'text-body-s' : 'text-body-xl' } sub-title full-length`}>
                        Personas
                    </div>
                </div>
                <div className="user-rep-col col-images">
                    <div className='imagebox'>
                        <div className='text-heading-xs imagebox-title'>
                            Header
                        </div>
                        <Image
                            className='imagebox-image'
                            src={'/projectImages/bookd_thumbnail.png'}
                            alt={'Bookd-Thumbnail'}
                            width={533}
                            height={574}
                        />
                    </div>
                    <div className='imagebox'>
                        <div className='text-heading-xs imagebox-title'>
                            Header
                        </div>
                        <Image
                            className='imagebox-image'
                            src={'/projectImages/bookd_thumbnail.png'}
                            alt={'Bookd-Thumbnail'}
                            width={533}
                            height={574}
                        />
                    </div>
                </div>
                <div className="user-rep-col col-mapping">
                    <div className={`${isMobile ? 'text-heading-s' : 'text-heading-m' } title full-length`}>
                        Mapping out the journey
                    </div>
                    <div className={`${isMobile ? 'text-body-s' : 'text-body-xl' } sub-title full-length`}>
                        User Journey
                    </div>
                </div>
                <div className="user-rep-col">
                    <Image
                        className='mapping-image'
                        src={'/projectImages/bookd_mapping.png'}
                        alt={'Bookd-Mapping'}
                        width={1199}
                        height={574}
                    />
                </div>
            </div>
        </div>
        <div className="container-accent">
            <div className="solution">
                <div className="solution-col-full">
                    <div className={`${isMobile ? 'text-heading-s' : 'text-heading-m' } title full-length`}>
                        Building an initial solution
                    </div>
                    <div className={`${isMobile ? 'text-body-s' : 'text-body-xl' } sub-title full-length`}>
                        Wireframes & Lo-fi Prototype
                    </div>
                </div>
                <div className="solution-col-full">
                    <div className='image-textbox'>
                        <Image 
                           src={'/projectImages/bookd_wireframe.png'}
                           alt={'Bookd-Wireframe'}
                           width={533}
                           height={410} 
                        />
                        <div className='text-heading-xs image-textbox-title'>
                            Paper Wireframes
                        </div>
                        <div className='text-body-m image-textbox-body'>
                            When iterating on the home screen, I prioritized ease of access and minimalistic design to allow for easy navigation. When choosing the elements to include in the refined version, I opted for elements that were easy to understand and gave quick access to the most-used features.
                        </div>
                    </div>
                    <div className='image-textbox'>
                        <Image 
                            src={'/projectImages/bookd_prototype.png'}
                            alt={'Bookd-Prototype'}
                            width={533}
                            height={410}
                        />
                        <div className='text-heading-xs image-textbox-title'>
                            Low-fidelity Prototype
                        </div>
                        <div className='text-body-m image-textbox-body'>
                            Designs included in the digital wireframes prioritized minimalistic elements that allowed users to take common actions quickly and easily. The low-fidelity prototype created in Figma from the digital wireframes focused on the Add Reservation user flow, which is the core feature of the app.
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='container'>
            <div className="user-needs">
                <div className="user-needs-col">
                    <div className={`${isMobile ? 'text-heading-s' : 'text-heading-m' } title full-length`}>
                        Verifying User Needs
                    </div>
                    <div className={`${isMobile ? 'text-body-s' : 'text-body-xl' } sub-title full-length`}>
                        Usability Testing
                    </div>
                    <div className='textbox'>
                        <div className='text-body-m textbox-body'>
                                Two rounds of usability studies were conducted – one moderated and one unmoderated. Findings from the first study helped uncover major pain points with the initial design. The second study used a high-fidelity prototype and revealed what elements still needed refinement.
                            <br></br>
                            <br></br>
                            <span className="list-title">
                                Round 1 Findings
                            </span>
                            <br></br>
                            <br></br>
                            <ul className='text-body-m textbox-body'>
                                <li>
                                    Users wanted to filter information
                                </li>
                                <li>
                                    Users wanted a less cluttered calendar design
                                </li>
                                <li>
                                    Users wanted an edit option
                                </li>
                            </ul>
                            <br></br>
                            <span className="list-title">
                                Round 2 Findings
                            </span>
                            <br></br>
                            <br></br>
                            <ul className='text-body-m textbox-body'>
                                <li>
                                    Users were confused by the “Guest Book” label
                                </li>
                                <li>
                                    Users wanted a way to know which guests had arrived or had been seated
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="user-needs-col user-needs-carousel">
                    <div className={`${isMobile ? 'text-heading-s' : 'text-heading-m' } title full-length carousel-title`}>
                        Refining the design
                    </div>
                    {designCards}
                </div>
                
            </div>
        </div>
    </main>
  )
}
