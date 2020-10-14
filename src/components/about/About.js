import React, {Component} from 'react';
import '../about/About.css';
import Profile from '../profile/Profile';
import Bio from '../bio/Bio';


class About extends Component {

  render(){
    return(
      <a className="anchor" id="bio_section">
        <div className="about-container">
          <Profile/>
          <Bio/>
        </div>
      </a>
    )
  }
}

export default About;
