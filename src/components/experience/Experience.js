import React, {Component} from 'react';
import './Experience.css';
import walgreensLogo from '../../assets/images/walgreens.png';
import pcwpLogo from '../../assets/images/pollock-logo.png';
import ssecLogo from '../../assets/images/ssec-logo.png';
import bascom from '../../assets/images/bascom-hall.jpg';

class Experience extends Component {
  render(){
    return(
      <a class= "anchor" id="experience_section">
      <div className="experience-container">
        <h1>Experience</h1>
        <div className="experience-content">
          <div className="ind-experience-container" id="ssec-exp">
            <div>
              <div className="exp-logo-container">
                <img 
                  src={ssecLogo} 
                  alt="UW Madison SSEC" 
                  className="exp-logo" 
                  style={{margin: "40px auto"}}/>
              </div>
            </div>
            <div className="exp-info">
              <p className="exp-company">UW-Madison Space Science and Engineering Center</p>
              <p className="exp-role">Shipping and Receiving/Building Manager Assistant, February 2017-2020</p>
              <p className="exp-location">Madison, WI</p>
              <br/>
              <p className="exp">
                
              </p>
            </div>
            
          </div>
          <div className="ind-experience-container" id="walgreens-exp">
            <div>
              <div className="exp-logo-container">
                <img src={walgreensLogo} alt="Walgreens" className="exp-logo"/>
              </div>
            </div>
            <div className="exp-info">
              <p className="exp-company">Walgreens</p>
              <p className="exp-role">Operations and Supply Chain Intern, Summer 2018</p>
              <p className="exp-location">Windsor, WI</p>
              <br/>
              <p className="exp">
                As a new intern working at Walgreens' massive Windsor distribution center 
                I had no idea what to expect, but I quickly found our summer project would focus 
                on improving Reset Item Slotting which had hindered efficiency and workflow for over 20 years.
                <br/><br/>
                By consolidating and using queries on past data, engaging constantly with 
                team members on the floor and management, and organizing multiple Kaizen and 
                improvement events, we were able to find a solution. We piloted our solution, 
                which management and team members were happy with, and it showed an increase
                in overall efficiency.<br/><br/>
                I am grateful for experience with Walgreens, and I feel like it was a very 
                valuable experience in design thinking, optimization, teamwork, and communication
                between various levels of management that I will be able to use in any field.
              </p>
            </div>
            
          </div>

          <div className="ind-experience-container" id="pcwp-exp">
            <div>
              <div className="exp-logo-container">
                <img 
                  src={pcwpLogo} 
                  alt="Pollock Community Water Park" 
                  className="exp-logo" 
                  style={{margin: "10px auto"}}/>
              </div>
            </div>
            <div className="exp-info">
              <p className="exp-company">Pollock Community Water Park</p>
              <p className="exp-role">Head Lifeguard/Facility Manager, Summer 2013-2017</p>
              <p className="exp-location">Oshkosh, WI</p>
              <br/>
              <p className="exp">
                
              </p>
            </div>
            
          </div>

          <div className="ind-experience-container" id="uw-exp">
            <div>
              <div className="exp-logo-container">
                <img 
                  src={bascom} 
                  alt="Bascom Hall" 
                  className="exp-logo" 
                  style={{margin: "10px auto"}}/>
              </div>
            </div>
            <div className="exp-info">
              <p className="exp-company">University of Wisconsin - Madison</p>
              <p className="exp-role">B.S. Computer Science, Industrial Engineering, earned December 2019</p>
              <p className="exp-location">Madison, WI</p>
              <br/>
              <p className="exp">
                
              </p>
            </div>
            
          </div>
          
        </div>
      </div>
      </a>
    )
  }
}

export default Experience;