import React, {Component} from 'react';
import Resume from '../../assets/resume.pdf';
import '../nav/NavBar.css';



class NavBar extends Component {

  render(){
    return(
      <div className="navbar-padding">
      <div className='navbar'>
        <div className='navbar-brand'>
          <a className='navbar-brand' href="/">
            Ian Henscheid
          </a>
        </div> 
        <div className='navbar-content justify-content-end'>
          <ul className='navbar-nav'>
            <a href="#bio_section">
              <li className='nav-item'>
                Bio
              </li>
            </a>
            <a href="#skills_section">
              <li className='nav-item'>
                Skills
              </li>
            </a>
            <a href="#projects_section">
              <li className='nav-item'>
                Projects
              </li>
            </a>
            <a href="#experience_section">
              <li className='nav-item'>
                Experience
              </li>
            </a>
            <a href="#contact_section">
              <li className='nav-item'>
                Contact
              </li>
            </a>
            <li className='nav-item'>
              <a className='nav-item' href = {Resume} target = "_blank" rel="noopener noreferrer">Resume</a>
            </li>
            
          </ul>
        </div>
      </div>
      

      </div>
    )
  }
}

export default NavBar;