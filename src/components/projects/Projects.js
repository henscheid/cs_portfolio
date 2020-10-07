import React, {Component} from 'react';
import Collapsible from 'react-collapsible';
import levelUpLogo from '../../assets/images/leveluplogo.png';
import viessmanLogo from '../../assets/images/viessmann.png';

import './Projects.css';

class Projects extends Component {
  render(){
    return(
      <a className="anchor" id="projects_section">
      <div className="projects-container">
        <h1>Projects</h1>

        <div className="projects-content">

          <div className="ind-project-container">
            <Collapsible trigger={<img src={levelUpLogo} alt="Level Up" className="project-logo"/>}>
              <ul className="list-temp">
                <li>experience with React Native, HTML, CSS</li>
                <li>software lifecycle, agile, sprints</li>
                <li>working with a team and dividing responsibilites</li>
              </ul>
            </Collapsible>
          </div>
          <div className="ind-project-container">
            <Collapsible trigger={<h2>Inventory Management (Junior Design Project)</h2>}>
              <ul className="list-temp">
                <li>design thinking and problem oriented thinking</li>
                <li>working with a team and playing to strengths</li>
                <li>experience with software and hardware integration</li>
                <li>using python</li>
              </ul>
            </Collapsible>
          </div>
          <div className="ind-project-container" style={{border:"none"}}>
            <Collapsible trigger={<img src={viessmanLogo} alt="Level Up" className="project-logo"/>}>
              <ul className="list-temp">
                <li>fast paced design thinking environment</li>
                <li>working with a team, and language barrier</li>
                <li>presenting ideas to executives, public speaking</li>
              </ul>
            </Collapsible>
          </div>
          

        </div>
      </div>
      </a>
    )
  }
}

export default Projects;