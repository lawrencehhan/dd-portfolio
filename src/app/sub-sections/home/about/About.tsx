"use client"
import { useState, useEffect } from 'react';
import Square from '../../../components/Square';
import '../home.css';
import AchievementData from '../../../assets/achievementsData';


export default function About() {
    // Check for device width
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
    const achievementsCount = AchievementData().length
    const achievementsListingDates = AchievementData().map((achievement) => {
        return (
            <div className='listing-dates listing'>
                <span>{achievement.date}</span>
                {(achievement.id < achievementsCount) && 
                    <>
                        <br></br>
                        <br></br>
                    </>
                }
            </div>
        )})
    const achievementsListingTitles = AchievementData().map((achievement) => {
        return (
            <div className='listing-titles listing'>
                <span>{achievement.title}</span>
                {(achievement.id < achievementsCount) && 
                    <>
                        <br></br>
                        <br></br>
                    </>
                }
            </div>
        )})
    return (
        <div className='about-container'>
            <div className='about-col about-col-blurb'>
                <div className='textbox textbox-about'>
                    <div className= {`${isMobile ? 'text-heading-s' : 'text-heading-l'} about-title`}>
                        about me
                    </div>
                    <div className='text-body-m about-text'>
                        I am a Business Analyst with over 5 years of experience on Agile government projects. I am also an aspiring UX Designer, working under the UX Design Lead and supporting design efforts each sprint.
                        <br></br>
                        <br></br>
                        I am skilled in creating innovative solutions and leading a development team to ensure delivery of satisfactory products.
                    </div>
                </div>
                <div className='textbox textbox-accolades'>
                    <div className= {`${isMobile ? 'text-heading-s' : 'text-heading-m'} about-title`}>
                        achievements
                    </div>
                    <div className='text-body-m about-text'>
                        <div className='listing-wrap-dates'>
                            {achievementsListingDates}
                        </div>
                        <div className='listing-wrap-titles'>
                            {achievementsListingTitles}
                        </div>
                    </div>
                </div>
            </div>
            <div className='about-col about-col-media'>
                <Square extraClass="square-01" color="#515B6C" width={isMobile ? 295 : 490} height={isMobile ? 239 : 386} animated={true}></Square>
                <Square extraClass="square-02" color="#8D97A8" width={329} height={329} animated={true}></Square>
                <Square extraClass="square-03" color="#C4CEDF" width={184} height={361} animated={true}></Square>
            </div>
        </div>
    )
}