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
        <div className="user-research">
            l
        </div>
    </main>
  )
}
