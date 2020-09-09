import React, {Component} from 'react';
import '../profile/Profile.css';
import avatar from '../../assets/images/avatar.png';

class Profile extends Component {
  render(){
    return(
      <div className="profile-wrapper">
        <div className="profile-avatar">
          <img 
          src={avatar} 
          alt="Ian Henscheid" 
          className="img">
          </img>
        </div>
        <h1 className="profile">Ian Henscheid</h1>  
        <h2 className="profile">Web Developer</h2>
        <h3 className="profile">University of Wisconsin - Madison '19 Graduate</h3>
      </div>
    )
  }
}

export default Profile;