import React, {Component} from 'react';
import './Skills.css';
import lang_graphic from '../../assets/icons/language.svg';

class Skills extends Component {
  render(){
    return(
      <div className="skills-container">
        <h1>Skills</h1>
        <div className="skills-content">
          <div className="skills-skill">
            <div className="individual-skill">
              <img src={lang_graphic} alt="Language graphic" className="skill-graphic">
              </img> 
              <h2>
                Languages
              </h2>
              <p className="skills">
                Java, Python, JavaScript, HTML, CSS
              </p>
            </div>
            <div className="individual-skill">
              <img 
                src={lang_graphic} 
                alt="Language graphic" 
                className="skill-graphic">
              </img> 
              <h2>
                Frameworks
              </h2>
              <p className="skills">
                ReactJS, React Native, Bootstrap, django
              </p>
            </div>
            <div className="individual-skill">
              <img 
                src={lang_graphic} 
                alt="Language graphic" 
                className="skill-graphic">
              </img> 
              <h2>
                Tools
              </h2>
              <p className="skills">
                Git, Linux, MATLAB, JupyterNotebook, Microsoft
                Office Suite
              </p>
            </div>
            <div className="individual-skill">
              <img 
                src={lang_graphic} 
                alt="Language graphic" 
                className="skill-graphic">
              </img> 
              <h2>
                Soft Skills
              </h2>
              <p className="skills">
                Confident, Team Oriented, Problem Solver,
                Performs well under pressure
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Skills;