'use client'
import { useState, useEffect } from 'react';
import Square from '../../../components/Square';
import { motion, usePresence } from 'framer-motion';
interface ProjectCard {
    id: number;
    featured: boolean;
    title: string;
    text: string;
    image?: string;
    link?: string;
}

export default function ProjectCard(props:ProjectCard) {
    const {id, title, featured, text} = props;
    // const [isPresent, safeToRemove] = usePresence()
    // useEffect(() => {
    //     !isPresent && setTimeout(safeToRemove, 3000)
    // }, [isPresent])
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

    const cardVariants = {
        hidden: { x: -10, y: -10, opacity: 0 },
        visible: {
          x: 0,
          y: 0,
          opacity: 1,
          transition: {
            ease: "easeInOut",
            duration: 1.2,
          }
        },
    }

    return(
        <motion.div className="project-card"
            key={id}
            exit={{
                opacity: 0,
                y: 20,
                x: 20,
                transition: {
                  ease: "easeIn",
                  duration: .5,
                  delay: (id * 0.1),
                }
            }}
            whileHover={{
                scale: 1.01,
                transition: { 
                    duration: .4,
                    ease: 'easeInOut',
                }
            }}
            variants={cardVariants}
        >
            <div className="card-image-container">
                <Square extraClass='card-image' color='#C4CEDF' width={isMobile?266.5:332} height={isMobile?245.6:306} animated={false} />
                <div>{title}</div>
            </div>
            {/* <div className='card-title text-heading-m'>{title}</div>
            <div className='card-text text-body-m'>{text}</div>
            <div></div> */}
        </motion.div>
    )
}