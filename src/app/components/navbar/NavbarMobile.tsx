import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
interface NavbarMobile {
    navLinks: {
        name: string;
        href:string
    }[];
    darkMode: boolean;
    handleOpen: ()=>void;
}

export default function Navbar(props:NavbarMobile) {
    const {navLinks, darkMode, handleOpen} = props;
    const navbarVariants = {
        hidden: {opacity: 0, y: -20, },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 260,
                damping: 20,
            }
        },
        hide: {
            opacity: 0,
            y: -200,
            transition: {
                type: "spring",
                stiffness: 260,
                damping: 20,
            }
        }
    }

    return (
            <motion.ul 
                className={`navbar-mobile-dropdown ${darkMode && "dark"}`}
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
                    <Link
                        className="nav-item-mobile"
                        href={'/'}
                    >
                        Home
                    </Link>
                </motion.li>
                <motion.li onClick={() => {
                    handleOpen()
                    }} key="nav-work">
                    <Link
                        className="nav-item-mobile"
                        href={'/work'}
                    >
                        Work
                    </Link>
                </motion.li>
                <motion.li onClick={() => {
                    handleOpen()
                    }} key="nav-contact">
                    <Link
                        className="nav-item-mobile"
                        href={'/contact'}
                    >
                        Contact
                    </Link>
                </motion.li>
                
            </motion.ul>
    )
}