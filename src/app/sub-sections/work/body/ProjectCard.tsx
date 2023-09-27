import Square from '../../../components/Square';
import { motion } from 'framer-motion';
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
    const cardVariants = {
        hidden: { x: -10, y: 0, opacity: 0 },
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
                y: -20,
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
                <Square extraClass='card-image' color='#C4CEDF' width={332} height={306} animated={false} />
                <div>{title}</div>
            </div>
            {/* <div className='card-title text-heading-m'>{title}</div>
            <div className='card-text text-body-m'>{text}</div>
            <div></div> */}
        </motion.div>
    )
}