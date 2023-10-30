"use client"
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
interface ContactButton {
    link: string;
    image: StaticImport;
    imageSize: number;
    extraClass?: string;
}
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

export default function ContactButton(props:ContactButton) {
    const {link, image, imageSize, extraClass} = props;
    
    const buttonVariants = {
        hidden: {
            opacity: 0,
            y: -40,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 240,
                damping: 12,
            }
        },
    }

    
    return (
        <motion.button className={`contact-button ${extraClass ? extraClass : ''}`}
            id={link}
            key={link}
            whileHover={{ 
                scale: 1.04, 
                transition: {
                    duration: .12,
                    ease: 'easeOut'
                } 
            }}
            whileTap={{ scale: 0.92, opacity: .3 }}
            variants={buttonVariants}
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