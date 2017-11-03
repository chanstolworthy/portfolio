import React from 'react';
import Picture from './images/picture.png'
import './about.css'

export default function () {
    return (
        <div className='about-container'>
            <div className='about-body'>
                <div className='about-main-title'>About</div>
                <div>
                    <img src={Picture} alt='' className='about-portfolio-image' />
                </div>
            </div>
            <div className='about-me-container'>
                <div className='about-me-paragraph'>
                    My name is Chandler Stolworthy, I am a graduate of DevMountain and Brigham Young University. Through my years of education and work experience I’ve adapted to thrive in fast paced professional environments. I’ve become more creative, organized, learned to collaborate effectively in a team setting, and developed the confidence to be a leader.
                </div>
                <div className='about-me-paragraph'>
                    I am energetic and eager to learn. I seek creative solutions, develop strategy and pursue innovation. My goal is to acquire skills to improve my own career, and help others on their career path.
</div>
                <div className='about-me-paragraph'>
                    I think reading is one of the most important keys to success because you can understand what someone learned in a lifetime in less than 300 pages.
                </div>
            </div>
        </div>
    )
}