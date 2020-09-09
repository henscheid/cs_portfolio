import React, {Component} from 'react';
import '../about/About.css';
import Profile from '../profile/Profile';
import Bio from '../bio/Bio';


class About extends Component {

  render(){
    return(
      <div className="about-container">
        <Profile/>
        <Bio/>
      </div>
    )
  }
}

export default About;