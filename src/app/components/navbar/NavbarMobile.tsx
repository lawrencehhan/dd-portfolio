import React from 'react';
import { motion, useAnimation } from 'framer-motion';
interface NavbarMobile {
    darkMode: boolean;
    handleOpen: ()=>void;
}

export default function Navbar(props:NavbarMobile) {
    const {darkMode, handleOpen} = props;
    const navbarVariants = {
        hidden: {opacity: 0, y: -20, },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeInOut"
            }
        },
        hide: {
            opacity: 0,
            y: -200,
            transition: {
                duration: 1,
                ease: "easeInOut"
            }
        }
    }

    return (
            <motion.ul className={`navbar-mobile ${darkMode && "dark"}`}
            initial="hidden"
            animate="visible"
            exit="hide"
            variants={navbarVariants}
            key="something"
            >  
                {/* Navbar Items */}
                <motion.li onClick={() => {
                    handleOpen()
                    }} key="nav-home">
                    <motion.a className="nav-item-mobile">home</motion.a>
                </motion.li>
                <motion.li onClick={() => {
                    handleOpen()
                    }} key="nav-about">
                    <motion.a className="nav-item-mobile">about</motion.a>
                </motion.li>
                <motion.li onClick={() => {

                    handleOpen()
                    }} key="nav-projects">
                    <motion.a className="nav-item-mobile">experience / projects</motion.a>
                </motion.li>
                <motion.li onClick={() => {
                    handleOpen()
                    }} key="nav-contact">
                    <motion.a className="nav-item-mobile">contact</motion.a>
                </motion.li>
                

            </motion.ul>
    )
}