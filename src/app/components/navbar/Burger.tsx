'use client'
import { motion, AnimatePresence } from 'framer-motion';
interface NavbarBurger {
    darkMode: boolean;
    isOpen: boolean;
    handleOpen: ()=>void;
}

export default function Burger(props:NavbarBurger) {
    const {isOpen, handleOpen} = props;
    const svgVariants = {
        hidden: { 
            opacity: 0, 
        },
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
        }
    }

    // Motion Components
    const variants = isOpen ? "openBurger" : "closedBurger"
    const burgerTop = {
        closedBurger: {
            rotate: 0,
            y: 0,
        },
        openBurger: {
            rotate: 45,
            y: 1
        }
    }
    const burgerCenter = {
        closedBurger: {
            opacity: 1,
        },
        openBurger: {
            opacity: 0,
        }
    }
    const burgerBottom = {
        closedBurger: {
            rotate: 0,
            y: 0,
        },
        openBurger: {
            rotate: -45,
            y: -1
        }
    }
    const transition = {
        type: "spring",
        stiffness: 260,
        damping: 20,
    }
    // Burger Line Props
    const burgerProps = {
        stroke: "#CE7777",
        strokeWidth: 2,
        vectorEffect: "non-scaling-stroke",
        initial: "closed",
        animate: variants,
        transition,
    }
    const width = 24
    const height = 44
    const unitHeight = 6
    const unitWidth = (unitHeight * (width as number)) / (height as number);

    return (
        <motion.svg
            onClick={() => handleOpen()}
            viewBox={`0 0 ${unitWidth} ${unitHeight}`}
            overflow="visible"
            preserveAspectRatio="none"
            width={width}
            height={height}
            variants={svgVariants} 
            className="burger-svg"
            initial="hidden"
            animate="visible"
            exit="hide"
            // exit="hide"
            key="li-svg">
                <motion.line
                    x1="0"
                    x2={unitWidth}
                    y1="2"
                    y2="2"
                    variants={burgerTop}
                    {...burgerProps}
                />
                <motion.line
                    x1="0"
                    x2={unitWidth}
                    y1="3"
                    y2="3"
                    variants={burgerCenter}
                    {...burgerProps}
                />
                <motion.line
                    x1="0"
                    x2={unitWidth}
                    y1="4"
                    y2="4"
                    variants={burgerBottom}
                    {...burgerProps}
                />
        </motion.svg>
    )
}