'use client'
import Image from 'next/image';
import { motion } from 'framer-motion';

interface DesignCard {
    id: number;
    title: string;
    text: string;
    image?: string;
    isMobile?: boolean;
}

export default function DesignCard(props:DesignCard) {
    const {id, title, text, image, isMobile} = props;


    return(
        <motion.div className="design-card" key={id}>
            <Image 
                className='design-mockup-image'
                src={`/projectImages/${image}`}
                alt={title}
                width={isMobile?266.5:533}
                height={isMobile?245.6:403}
            />
            <div className='textbox'>
                <div className='text-heading-xs textbox-title'>
                    {title}
                </div>
                <div className='text-body-m textbox-body'>
                    {text}
                </div>
            </div>
        </motion.div>
    )
}