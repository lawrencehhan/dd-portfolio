"use client"
import Link from 'next/link';
import {motion} from 'framer-motion';
import Square from '../../../components/Square';
import '../home.css';


export default function Intro() {
    return (
        <div className='intro-container'>
            <div className='intro-col intro-col-media'>
                <Square color="#B5C3DC" width={466} height={355} animated={true}></Square>
            </div>
            <div className='intro-col intro-col-blurb'>
                <div className='textbox'>
                    <div className='text-heading-l title'>Hi, I'm Danielle!</div>
                    <div className='text-body-m'>I am a Business Analyst with over three years of experience on an Agile government project. I am skilled in creating innovative solutions and leading a development team to ensure delivery of satisfactory products. Outside of work, I enjoying designing and developing creative and responsive web applications.</div>
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
                            Portfolio
                        </Link>
                    </motion.button>
                </div>
            </div>
            
        </div>
    )
}