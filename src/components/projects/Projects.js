import React, {Component} from 'react';
import './Projects.css';

class Projects extends Component {
  render(){
    return(
      <div className="projects-container">
        <h1>Projects</h1>

        <div className="projects-content">

          <div className="ind-project-container">
            <h2>LevelUp</h2>
            <ul className="list-temp">
              <li>experience with React Native, HTML, CSS</li>
              <li>software lifecycle, agile, sprints</li>
              <li>working with a team and dividing responsibilites</li>
            </ul>
          </div>
          <div className="ind-project-container">
            <h2>Inventory Management (Junior Design Project)</h2>
            <ul className="list-temp">
              <li>design thinking and problem oriented thinking</li>
              <li>working with a team and playing to strengths</li>
              <li>experience with software and hardware integration</li>
              <li>using python</li>
            </ul>
          </div>
          <div className="ind-project-container">
            <h2>Viessman</h2>
            <ul className="list-temp">
              <li>fast paced design thinking environment</li>
              <li>working with a team, and language barrier</li>
              <li>presenting ideas to executives, public speaking</li>
            </ul>
          </div>
          

        </div>
      </div>
    )
  }
}

export default Projects;