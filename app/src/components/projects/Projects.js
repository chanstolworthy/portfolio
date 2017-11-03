import React, { Component } from 'react';
import './projects.css'
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import M1 from './images/m1.png'
import M2 from './images/m2.png'
import M3 from './images/m3.png'
import W1 from './images/w1.png'
import W2 from './images/w2.png'
import W3 from './images/w3.png'
import M4 from './images/m4.png'
import M5 from './images/m5.png'
import M6 from './images/m6.png'
import MAVLOGO from './images/white_logo.png'
import WRKFLW from './images/wrkflow.png'
const customContentStyle = {
    width: '100%',
    maxWidth: 'none',
    position: 'fixed',
    top: 0,
    left: 0,

  };

class Projects extends Component {
    constructor() {
        super();

        this.state = {
            open1: false,
            open2: false,
            open3: false,
            open4: false,
        }
    }

    handleOpen = (imageNum) => {
        this.setState({
            [imageNum]: true
        });
        console.log(imageNum)
      };
    
      handleClose = () => {
        this.setState({
            open1: false,
            open2: false,
            open3: false,
            open4: false,
        });
      };


    render() {
  
        const actions = [
            <FlatButton
              label="Back"
              primary={true}
              onClick={this.handleClose} 
              />, ];

      
        return(
            <div className='projects-body'>
            <div className='projects-body-layout'>
                <div className='projects-main-title'>Projects</div>
                <div className='projects-projects-container'>

                    <div className='projects-project1-item' onClick={()=>{this.handleOpen('open1')}}> 
                    <img src={MAVLOGO} className='project-project-item-logo' alt='' />
                    </div>

                    <div className='projects-project2-item' onClick={()=>{this.handleOpen('open2')}}> 
                    <img src={WRKFLW} className='project-project-item-logo' alt='' />
                     </div>

                    <div className='projects-project-item' onClick={()=>{this.handleOpen('open3')}}> Project 3 </div>
                    <div className='projects-project-item' onClick={()=>{this.handleOpen('open4')}}> Project 4 </div>
                </div>
            </div>






            
            <Dialog
          title="Tesani - Mavericks Employee Store"
          actions={actions}
          modal={false}
          open={this.state.open1}
          onRequestClose={this.handleClose}
          contentStyle={customContentStyle}
          className='projects-dialog-project1'
         >
         <div className='projects-dialog-image-layout'>
         <img src={M6} alt='' className='projects-m1-image'/>
         <img src={M1} alt='' className='projects-m1-image'/>
         <img src={M3} alt='' className='projects-m1-image'/>
         </div>
         <div>
             <div className='project-project-description'> The Mavericks Store was created for Tesani Companies in Provo UT, to increase employee recognition and inventory management for their internal employee store.</div>
             <div className='project-project-tech'> <strong>Tech Used:</strong> React, NodeJS, PostgreSQL, RESTful API, Auth0, HTML, CSS, Adobe Suite</div>
         </div>
         </Dialog>

         <Dialog
          title="WorkFlow"
          actions={actions}
          modal={false}
          open={this.state.open2}
          onRequestClose={this.handleClose}
          contentStyle={customContentStyle}
         >
         <div className='projects-dialog-image-layout'>
         <img src={W1} alt='' className='projects-m1-image'/>
         <img src={W2} alt='' className='projects-m1-image'/>
         <img src={W3} alt='' className='projects-m1-image'/>
         </div>
         <div>
             <div className='project-project-description'> WorkFlow is a project management tool that uses gantt chart logic to assign users. </div>
             <div className='project-project-tech'> <strong>Tech Used:</strong> React, Redux, NodeJS, PostgreSQL, RESTful API, Material-UI, Recharts, Semantic-UI ,Auth0, HTML, CSS</div>
         </div>
         </Dialog>
         <Dialog
          title="Project 3"
          actions={actions}
          modal={false}
          open={this.state.open3}
          onRequestClose={this.handleClose}
         >
         <div>PROJECT 3</div>
         <div>Tech:</div>
         </Dialog>
         <Dialog
          title="Project 4"
          actions={actions}
          modal={false}
          open={this.state.open4}
          onRequestClose={this.handleClose}
         >
         <div>PROJECT 4</div>
         <div>Tech:</div>
         </Dialog>
        </div>
        )
    }
}

export default Projects;