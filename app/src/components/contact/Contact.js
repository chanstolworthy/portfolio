import React from 'react';
import './contact.css'
import GITHUB from './images/git.png'
import LINKEDIN from './images/linkedin.png'
import INSTA from './images/insta.png'
import FACEBOOK from './images/facebook.png'
import EMAIL from './images/email.png'

export default function () {
    return (
        <div className='contact-body'>
            <div className='contain-main-container'>
                <div className='contact-main-title'>Contact</div>
                <div>
                    <div>
                        <form action="https://formspree.io/chan.stolworthy@gmail.com"
                            method="POST">
                            <div className='contact-submit-email'>
                                <div className='contact-submit-name-email-cont'>
                                    <input type="text" name="name" placeholder='Name' />
                                    <input type="email" name="_replyto" placeholder='Email' />
                                </div>
                                <div className='contact-submit-textarea'>
                                    <textarea placeholder='Message' ></textarea>
                                </div>
                                <input type="submit" value="Send" className='contact-submit-button'/>
                            </div>
                        </form>
                    </div>
                </div>
                <div>
                    <a href='https://github.com/chanstolworthy' target="_blank">
                        <img src={GITHUB} alt='' className='contact-contact-icons' />
                    </a>
                    <a href='https://www.linkedin.com/in/chanstolworthy/' target="_blank">
                        <img src={LINKEDIN} alt='' className='contact-contact-icons' />
                    </a>
                    <a href='https://www.instagram.com/chanstolworthy/?hl=en' target="_blank">
                        <img src={INSTA} alt='' className='contact-contact-icons' />
                    </a>
                    <a href='https://www.facebook.com/chandler.stolworthy' target="_blank">
                        <img src={FACEBOOK} alt='' className='contact-contact-icons' />
                    </a>
                    <a href='mailto:chan.stolworthy@gmail.com'>
                        <img src={EMAIL} alt='' className='contact-contact-icons' />
                    </a>
                </div>
            </div>
        </div>
    )
}