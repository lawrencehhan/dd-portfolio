"use client"
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
interface ContactButton {
    link: string;
    image: StaticImport;
    imageSize: number;
    animated?: boolean;
    extraClass?: string;
}
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

export default function ContactButton(props:ContactButton) {
    const {link, image, imageSize, animated, extraClass} = props;
    
    const buttonTransition = {
        duration: 1,
        ease: "easeInOut",
    }
    const buttonVariant = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: buttonTransition,
        }
    }

    
    return (
        // <motion.svg className={`contact-button ${extraClass ? extraClass : ''}`} height={height} width={width}
        //     viewBox={`0 0 ${width} ${height}`}
        //     initial="hidden"
        //     animate="visible"
        //     variants={!animated ? undefined : buttonVariant}
        // >
        //     <motion.rect
        //         width={width}
        //         height={height}
        //         fill={color}
        //     >
        //         <a href={link} className="contact-icon-wrapper" target="_blank">
        //             <Image 
        //                 // src={require(`../../assets/footer/${darkMode ? "githubDM.png" : "github.png"}`)} 
        //                 src={image}
        //                 alt="ContactButton"
        //                 width={imageSize}
        //                 height={imageSize}
        //                 className='button-icon' 
        //             />
        //         </a>
        //     </motion.rect>

        // </motion.svg>
        <motion.button className={`contact-button ${extraClass ? extraClass : ''}`}
            whileHover={{ 
                scale: 1.04, 
                transition: {
                    duration: .12,
                    ease: 'easeOut'
                } 
            }}
            whileTap={{ scale: 0.92, opacity: .3 }}
        >

            <Link
                className="contact-icon-wrapper"
                href={link}
                key={'Email'}
            >
                <Image 
                    src={image}
                    alt="ContactButton"
                    width={imageSize}
                    height={imageSize}
                    className='button-icon' 
                />
            </Link>
        </motion.button>
        
    )
}