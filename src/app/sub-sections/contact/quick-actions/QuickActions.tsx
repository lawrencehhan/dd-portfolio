"use client"
import React from 'react'; // is this needed
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
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        View Portfolio
                    </motion.button>
                </div>
            </div>
            
        </div>
    )
}