'use client'
import Image from 'next/image';
import { motion } from 'framer-motion';
import ContactButton from '../../../components/ContactButton';
import mailIcon from '@/app/assets/contact-email-new.png';
import linkedInIcon from '@/app/assets/contact-linkedin.png';
import githubIcon from '@/app/assets/contact-github.png';
import codingGraphic from '@/app/assets/contact-coding-graphic.png';

export default function QuickActions() {
    const parentVariants = {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: .2,
          },
        },
    }
    const imageVariants = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: {
                duration: 1,
                ease: 'easeInOut',
            }
        },
    }
    return (
        <div className='contact-actions'>
            <div className='contact-actions-card'>
                <motion.div 
                    className='actions-col actions-col-icons'
                    initial='hidden'
                    animate='visible'
                    variants={parentVariants}
                >
                    <ContactButton
                        link = 'https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=danie.gd12@gmail.com'
                        image = {mailIcon}
                        imageSize = {42}
                        extraClass='contact-button-mail'
                    ></ContactButton>
                    <ContactButton
                        link = 'https://www.linkedin.com/in/danielle-dacanay-9385aa143/'
                        image = {linkedInIcon}
                        imageSize = {42}
                        extraClass='contact-button-linkedin'
                    ></ContactButton>
                    <ContactButton
                        link = 'https://github.com/DanielleDacanay'
                        image = {githubIcon}
                        imageSize = {42}
                        extraClass='contact-button-github'
                    ></ContactButton>
                </motion.div>
                <motion.div 
                    className='actions-col actions-col-graphic'
                    initial='hidden'
                    animate='visible'
                    variants={imageVariants}
                >
                        <Image 
                            src={codingGraphic}
                            alt="DanielleCoding"
                            width={365}
                            height={365}
                            className='coding-graphic' 
                        />
                </motion.div>
            </div>
        </div>
    )
}