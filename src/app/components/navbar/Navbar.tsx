'use-client'

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from '../../assets/logo.png';
import Burger from './Burger';
import NavbarMobile from './NavbarMobile';

interface Navbar {
    navLinks: {
        name: string;
        href:string
    }[];
    darkMode: boolean;
    isFirstBoot: boolean;
    isMobile: boolean;
    isOpen: boolean;
    handleOpen: ()=>void;
    handleDarkToggle: React.ChangeEventHandler<HTMLInputElement>;
}

export default function Navbar(props:Navbar) {
    const {navLinks, darkMode, isFirstBoot, isMobile, isOpen, handleOpen, handleDarkToggle} = props;
    
        // {navLinks.map((link) => {
    //     const isActive = pathname === link.href
 
    //     return (
    //       <Link
    //         className={isActive ? 'text-blue' : 'text-black'}
    //         href={link.href}
    //         key={link.name}
    //       >
    //         {link.name}
    //       </Link>
    //     )
    //   })}
    
    const navbarVariants = {
        hidden: {opacity: 0.42 },
        visible: {
            opacity: 0.84,
            transition: {
                delay: 0,
                duration: 1,
                ease: "easeInOut"
            }
        },
        hide: {
            opacity: 0,
            transition: {
                duration: 1,
                ease: "easeInOut"
            }
        }
    }
    const logoRefVariant = {
        hidden: { x: 5, y: 5, opacity: 0 },
        visible: {
          x: 0,
          y: 0,
          opacity: 1,
          transition: {
            ease: "easeOut",
            duration: 1,
          }
        }
    }
    const liVariants = {
        hidden: { opacity: 0, },
        visible: {
            opacity: 1,
            transition: {
                delay: 0,
                duration: 1,
                ease: "easeInOut"
            }
        },
        hide: {
            opacity: 0,
            x: 50,
            transition: {
                duration: 1,
                ease: "easeInOut"
            }
        }
    }

    const pathname = usePathname();
    const links = navLinks.map((link) => {
            const isActive = pathname === link.href

            return (
                <motion.li  initial="hidden" animate="visible" exit="hide" variants={liVariants} key="nav-home">
                    <Link
                        className={isActive ? 'active-nav nav-item' : 'nav-item'}
                        href={link.href}
                        key={link.name}
                    >
                        {link.name}
                    </Link>
                </motion.li>
            )
        })

    return (
            <motion.ul className={`navbar ${darkMode && "dark"}`}
                initial="hidden"
                animate="visible"
                exit="hide"
                variants={navbarVariants}
            >
                <AnimatePresence>
                    {/* Home Button / Logo */}
                    <motion.li className="li-home" 
                        key="nav-home"
                        initial="hidden"
                        animate="visible"
                        variants={logoRefVariant}>
                            <Link 
                                className="nav-logo"
                                href={'/'}
                            >
                                <Image 
                                    src={Logo}
                                    alt="Logo"
                                    width={145}
                                    height={111}
                                    className="home-logo"
                                />
                            </Link>
                    </motion.li>     
                    {/* Standard Navbar LIs */}
                    {!isMobile && links}
                    {/* Burger SVG for Mobile */}
                    {isMobile &&           
                        <Burger 
                            darkMode={darkMode}
                            isOpen={isOpen}
                            handleOpen={handleOpen}
                        />
                    }
                    {isMobile && isOpen &&
                        <NavbarMobile 
                            darkMode={darkMode}
                            handleOpen={handleOpen}
                        />
                    }
                </AnimatePresence>  
            </motion.ul>
    )
}