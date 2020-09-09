import React, {Component} from 'react';
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
            <li className='nav-item'>
              Bio
            </li>
            <li className='nav-item'>
              Experience
            </li>
            <li className='nav-item'>
              Projects
            </li>
            <li className='nav-item'>
              Resume
            </li>
            <li className='nav-item'>
              Contact
            </li>
          </ul>
        </div>
      </div>
      

      </div>
    )
  }
}

export default NavBar;