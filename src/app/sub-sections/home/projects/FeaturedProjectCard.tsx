import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
interface FeaturedProjectCard {
    id: number;
    title: string;
    text: string;
    image?: string;
    isMobile?: boolean;
    link?: string;
}

export default function FeaturedProjectCard(props:FeaturedProjectCard) {
    const {id, title, text, image, link} = props;
    
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
        <motion.div 
            // className="project-card"
            key={id}
            whileHover={{
                scale: 1.01,
                transition: {
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                }
            }}
            whileTap={{
                scale: .99,
                transition: {
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                }
            }}
            variants={cardVariants}
        >
            <Link
                href={`/work/${link}`}
                className="project-card"
            >
                <div className="card-image-container">
                    <Image 
                        className='card-thumbnail'
                        src={`/${image}`}
                        alt={title}
                        width={266}
                        height={258}
                    />
                </div>
                <div className='card-title'>{title}</div>
                <div className='card-text text-body-m'>{text}</div>
            </Link>
        </motion.div>
    )
}