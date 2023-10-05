import Image from 'next/image';
import ContactButton from '../../../components/ContactButton';
import mailIcon from '@/app/assets/contact-email-new.png';
import linkedInIcon from '@/app/assets/contact-linkedin.png';
import githubIcon from '@/app/assets/contact-github.png';
import codingGraphic from '@/app/assets/contact-coding-graphic.png';

export default function QuickActions() {
    return (
        <div className='contact-actions'>
            <div className='contact-actions-card'>
                <div className='actions-col actions-col-icons'>
                    <ContactButton
                        link = 'https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=danie.gd12@gmail.com'
                        image = {mailIcon}
                        imageSize = {42}
                        animated = {false}
                        extraClass='contact-button-mail'
                    ></ContactButton>
                    <ContactButton
                        link = 'https://www.linkedin.com/in/danielle-dacanay-9385aa143/'
                        image = {linkedInIcon}
                        imageSize = {42}
                        animated = {false}
                        extraClass='contact-button-linkedin'
                    ></ContactButton>
                    <ContactButton
                        link = 'https://github.com/DanielleDacanay'
                        image = {githubIcon}
                        imageSize = {42}
                        animated = {false}
                        extraClass='contact-button-github'
                    ></ContactButton>
                </div>
                <div className='actions-col actions-col-graphic'>
                    <Image 
                        src={codingGraphic}
                        alt="DanielleCoding"
                        width={365}
                        height={365}
                        className='coding-graphic' 
                    />
                </div>
            </div>
        </div>
    )
}