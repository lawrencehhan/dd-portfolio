import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image'
import Logo from '../../assets/logo.png';
import Burger from './Burger';
import NavbarMobile from './NavbarMobile';
interface Navbar {
    darkMode: boolean;
    isMobile: boolean;
    isOpen: boolean;
    handleOpen: ()=>void;
    handleDarkToggle: React.ChangeEventHandler<HTMLInputElement>;
}

export default function Navbar(props:Navbar) {
    const {darkMode, isMobile, isOpen, handleOpen, handleDarkToggle} = props;
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
                            <a className="nav-logo">
                                <Image 
                                    src={Logo}
                                    alt="Logo"
                                    width={145}
                                    height={111}
                                />
                            </a>
                    </motion.li>     
                    {!isMobile && 
                        <motion.li  initial="hidden" animate="visible" exit="hide" variants={liVariants} key="nav-home">
                            <a className="nav-item">home</a>
                        </motion.li>
                    }
                    {/* Standard Navbar LIs */}
                    {!isMobile && 
                        <motion.li  initial="hidden" animate="visible" exit="hide" variants={liVariants} key="nav-work">
                            <a className="nav-item">work</a>
                        </motion.li>
                    }
                    {!isMobile &&
                        <motion.li initial="hidden" animate="visible" exit="hide" variants={liVariants} key="nav-contact">
                            <a className="nav-item nav-item-contact">contact</a>
                        </motion.li>
                    }
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