"use client"
import { useState, useEffect } from 'react';
import Image from 'next/image';
import introGraphic from '@/app/assets/intro-graphic.png';
import Link from 'next/link';
import {motion} from 'framer-motion';
import Square from '../../../components/Square';
import '../home.css';


export default function Intro() {
    // Check for device width
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
        <div className='intro-container'>
            <div className='intro-col intro-col-media'>
                <Image
                    src={introGraphic}
                    alt="IntroGraphic"
                    width={isMobile? 239 : 358} 
                    height={isMobile ? 239 : 358}
                />
            </div>
            <div className='intro-col intro-col-blurb'>
                <div className='textbox'>
                    <div className={`${isMobile ? 'text-heading-s' : 'text-heading-l' } title`}>Hi, I'm Danielle!</div>
                    <div className={`${isMobile ? 'text-body-m' : 'text-body-s'} body`}>
                        I am a Business Analyst with over three years of experience on an 
                        Agile government project. I am skilled in creating innovative solutions 
                        and leading a development team to ensure delivery of satisfactory products. 
                        Outside of work, I enjoying designing and developing creative and responsive 
                        web applications.
                    </div>
                    <motion.button className={'btn-portfolio'}
                        whileHover={{ 
                            scale: 1.04, 
                            transition: {
                                duration: .12,
                                ease: 'easeOut'
                            } 
                        }}
                        whileTap={{ scale: 0.92, opacity: .3 }}
                    >
                        <Link
                            className="btn-portfolio-link"
                            href={'/work'}
                            key={'Work'}
                        >
                            View Profile
                        </Link>
                    </motion.button>
                </div>
            </div>
            
        </div>
    )
}