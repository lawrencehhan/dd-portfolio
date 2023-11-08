'use client'
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Square from './Square';
import { motion, usePresence } from 'framer-motion';

interface ProjectCard {
    id: number;
    featured: boolean;
    title: string;
    text: string;
    thumbnail?: string;
    link?: string;
}

export default function ProjectCard(props:ProjectCard) {
    const {id, title, featured, text, thumbnail} = props;
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
            duration: .5,
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
                  duration: .4,
                  delay: (id * 0.1),
                }
            }}
            whileHover={{
                // scale: 0.94,
                scale: 1.01,
                border: '20px solid #e8c4c4',
                // transition: { 
                //     duration: .4,
                //     ease: 'easeInOut',
                // }
                transition: {
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                }
            }}
            variants={cardVariants}
        >
            <div className="card-thumbnail-container">
                <Image 
                    className='card-thumbnail'
                    src={`/${thumbnail}`}
                    alt={title}
                    width={isMobile?266.5:332}
                    height={isMobile?245.6:306}
                />
                {/* <Square extraClass='card-thumbnail' color='#C4CEDF' width={isMobile?266.5:332} height={isMobile?245.6:306} animated={false} /> */}
            </div>
        </motion.div>
    )
}