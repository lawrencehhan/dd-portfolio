'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import '../workPages.css'
import Image from 'next/image'

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
    </main>
  )
}
