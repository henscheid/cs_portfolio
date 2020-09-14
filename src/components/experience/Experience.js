import React, {Component} from 'react';
import './Experience.css';

class Experience extends Component {
  render(){
    return(
      <div className="experience-container">
        <h1>Experience</h1>
        <div className="experience-content">
          <div className="ind-experience-container">

            <h2>Walgreens</h2>
            <ul className="list-temp">
              <li>performed root cause analysis, problem focused solution</li>
              <li>led kaizen event to engage team members in warehouse slotting problem</li>
              <li>completed supply chain project and presented results to corporate directors</li>
              <li>communicated between upper management and team members to align strategy</li>
            </ul>
          </div>

          <div className="ind-experience-container">

            <h2>Pollock Community Water Park</h2>
            <ul className="list-temp">
              <li>managed a water park facility with many visitors</li>
              <li>trained, supervised, evaluated and scheduled 40+ staff members</li>
              <li>enforced rules with a professional and friendly attitude</li>
            </ul>
          </div>

          <div className="ind-experience-container">

            <h2>UW Madison SSEC</h2>
            <ul className="list-temp">
              <li>Receive, log and deliver packages in organized and efficient manner</li>
              <li>Match and updated deliveries in inventory management system</li>
              <li>Perform various building services</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Experience;