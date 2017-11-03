import React from 'react';
import './skills.css'
import HTML from './images/html.svg'
import JS from './images/js.svg'
import CSS_ICON from './images/css.svg'
import NODE from './images/node.svg'
import POSTGRES from './images/post.svg'
import ADOBE from './images/adobe.svg'
import WORD from './images/wp.svg'
import API from './images/api.svg'
import REACT_ICON from './images/react.svg'


export default function () {
    return (
        <div className='skills-main-container'>
            <div className='skills-main-title'>Skills</div>
            <div class="">
                <div className="skills-icon-list-layout">
                    <div className='skills-icon-container'>
                        <img src={REACT_ICON} className='app-skills-icons' />
                        <div>React</div>
                    </div>
                    <div className='skills-icon-container'>
                        <img src={NODE} className='app-skills-icons' />
                        <div>NodeJS</div>
                    </div>
                    <div className='skills-icon-container'>
                        <img src={POSTGRES} className='app-skills-icons' />
                        <div>PostgreSQL</div>
                    </div>
                    <div className='skills-icon-container'>
                        <img src={HTML} className='app-skills-icons' />
                        <div>HTML5</div>
                    </div>
                    <div className='skills-icon-container'>
                        <img src={CSS_ICON} className='app-skills-icons' />
                        <div>CSS</div>
                    </div>
                    <div className='skills-icon-container'>
                        <img src={JS} className='app-skills-icons' />
                        <div>JavaScript</div>
                    </div>
                    <div className='skills-icon-container'>
                        <img src={ADOBE} className='app-skills-icons' />
                        <div>Adobe</div>
                    </div>
                    <div className='skills-icon-container'>
                        <img src={API} className='app-skills-icons' />
                        <div>RESTful API</div>
                    </div>
                    <div className='skills-icon-container'>
                        <img src={WORD} className='app-skills-icons' />
                        <div>Wordpress</div>
                    </div>
                </div>
            </div>
        </div>
    )
}