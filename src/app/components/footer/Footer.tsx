import Image from 'next/image'
import Email from '../../assets/email.png';
import LinkedIn from '../../assets/linkedin.png';
import Github from '../../assets/github.png';
interface Footer {
    darkMode: boolean;
}

export default function Footer(props:Footer) {
    const {darkMode} = props;
    return (
        <div className={`footer ${darkMode && "dark"}`}>
            <a href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=danie.gd12@gmail.com" className="icon-wrapper" target="_blank">
                <Image 
                    // src={require(`../../assets/footer/${darkMode ? "githubDM.png" : "github.png"}`)} 
                    src={Email}
                    alt="Email"
                    width={24}
                    height={24}
                    className='footer-icon' 
                />
            </a>
            <a href="https://www.linkedin.com/in/danielle-dacanay-9385aa143/" className="icon-wrapper" target="_blank">
                <Image 
                    // src={require(`../../assets/footer/${darkMode ? "githubDM.png" : "github.png"}`)} 
                    src={LinkedIn}
                    alt="LinkedIn"
                    width={24}
                    height={24}
                    className='footer-icon' 
                />
            </a>
            <a href="https://github.com/DanielleDacanay" className="icon-wrapper" target="_blank">
                <Image 
                    // src={require(`../../assets/footer/${darkMode ? "githubDM.png" : "github.png"}`)} 
                    src={Github}
                    alt="Github"
                    width={24}
                    height={24}
                    className='footer-icon' 
                />
            </a>
        </div>
    )
}