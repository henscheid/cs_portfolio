import React, {Component} from 'react';
import levelUpLogo from '../../assets/images/leveluplogo.png';
import levelUpAvatar from '../../assets/images/levelupavatar.png';
import legoev3 from '../../assets/images/lego-ev3.png';
import viessman from '../../assets/images/viessman.png';
import './Projects.css';

class Projects extends Component {
  render(){
    return(
      <a class="anchor" id="projects_section">
      <div className="projects-container">
        <h1>Projects</h1>

        <div className="projects-content">

          <div id="levelup-card" className="project-card">
            <div className="project-card-inner">
              <div className="project-card-front">
                <img src={levelUpLogo} className="project-card-image"></img>
                <img src={levelUpAvatar} className="project-card-image"></img>
              </div>
              <div className="project-card-back">
                <h2>LevelUp</h2>
                <p>experience with React Native, HTML, CSS</p>
                <p>software lifecycle, agile, sprints</p>
                <p>working with a team and dividing responsibilites</p>
                <p>experience with React Native, HTML, CSS</p>
              </div>
            </div>
          </div>

          <div id="lego-card" className="project-card">
            <div className="project-card-inner">
              <div className="project-card-front">
                <h2>Lego Ev3 Inventory Management</h2>
                <img src={legoev3} className="project-card-image"></img>
              </div>
              <div className="project-card-back">
                <h2>Inventory Management (Junior Design Project)</h2>
                <ul className="list-temp">
                  <li>design thinking and problem oriented thinking</li>
                  <li>working with a team and playing to strengths</li>
                  <li>experience with software and hardware integration</li>
                  <li>using python</li>
                </ul>
              </div>
            </div>
          </div>

          <div id="levelup-card" className="project-card">
            <div className="project-card-inner">
              <div className="project-card-front">
                <img src={viessman} className="project-card-image"></img>
                <img src={levelUpAvatar} className="project-card-image"></img>
              </div>
              <div className="project-card-back">
                <h2>Viessman</h2>
                <ul className="list-temp">
                  <li>fast paced design thinking environment</li>
                  <li>working with a team, and language barrier</li>
                  <li>presenting ideas to executives, public speaking</li>
                </ul>
              </div>
            </div>
          </div>
                  
        </div>
      </div>
      </a>
    )
  }
}

export default Projects;