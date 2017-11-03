import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DownArrows from './images/d-arrow.svg'
import Skills from './components/skills/Skills'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Projects from './components/projects/Projects'
import animateScrollTo from 'animated-scroll-to';





class App extends Component {
  constructor() {
    super();
  }

  componentDidMount() {


  }
  render() {



    return (
      <div className='app-height'>
      <div className="App">

        <div className="App-header">
          <div className='app-nav'>
            <div className='app-nav-item-white' onClick={()=>animateScrollTo(0, {element: document.querySelector('.contactlink')})}>Home</div>
            <div className='app-nav-item-white' onClick={()=>animateScrollTo(800, {element: document.querySelector('.skillslink')})}>Skills</div>
            <div className='app-nav-item-white' onClick={()=>animateScrollTo(1150, {element: document.querySelector('.projectslink')})}>Projects</div>
            <div className='app-nav-item-white' onClick={()=>animateScrollTo(1700, {element: document.querySelector('.aboutlink')})}>About</div>
            <div className='app-nav-item-white' onClick={()=>animateScrollTo(2000, {element: document.querySelector('.contactlink')})}>Contact</div>
          </div>
        </div>
        {/* END OF HEADER */}
        <div className='app-main-title-lg-container'>
          <div className='app-main-title-lg-container-images'>
          <div className='app-main-title-layout'>
            <div className='app-main-title-lg'>WEB</div>
            <div className='app-main-title-developer-container'>
              <div className='app-main-title-lg'>DEVELOPER.</div>
            </div>
            <img src={DownArrows} className="app-dashboard-down-arrow" />
          </div>
          </div>
        </div>
        {/* END OF TITLE */}
      <Skills  className='skillslink'/>
      <Projects  className='projectslink'/>
      <About  className='aboutlink'/>
      <Contact className='contactlink'/>
      </div>
      </div>
    );
  }
}

export default App;


//   let typed = new Typed('.typed-strings', {
//     strings: ["My name is Chandler", "I am a Web Developer"],
//     typeSpeed: 150, loop: true, smartBackspace: true, backSpeed: 100,
//   });
// }

{/* <div className='first-part'>
        
          <div className='typed-strings'> </div>
          </div> */}