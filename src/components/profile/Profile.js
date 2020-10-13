import React, {Component} from 'react';
import '../profile/Profile.css';
import avatar from '../../assets/images/avatar.png';
import uwLogo from '../../assets/images/uwLogo.png';
import Resume from '../../assets/resume.pdf';


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
        <h1>Ian Henscheid</h1>  
        <div>
          <h3 className="profile">
            B.S. Computer Science, <br/>
            Industrial and Systems Engineering<br/> 
            <i>Earned December '19</i>
          </h3>
          <img 
            src={uwLogo} 
            alt="UW-Madison"
            style={{height:"auto", width:"275px", margin: "auto"}}></img>
          

        </div>
        <div className="profile-links"> 
          <a href="https://github.com/henscheid" target="_blank">
            <svg id="github-icon" className="profile-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12 .5c-6.63 0-12 5.28-12 11.792 0 5.211 3.438 9.63 8.205 11.188.6.111.82-.254.82-.567 0-.28-.01-1.022-.015-2.005-3.338.711-4.042-1.582-4.042-1.582-.546-1.361-1.335-1.725-1.335-1.725-1.087-.731.084-.716.084-.716 1.205.082 1.838 1.215 1.838 1.215 1.07 1.803 2.809 1.282 3.495.981.108-.763.417-1.282.76-1.577-2.665-.295-5.466-1.309-5.466-5.827 0-1.287.465-2.339 1.235-3.164-.135-.298-.54-1.497.105-3.121 0 0 1.005-.316 3.3 1.209.96-.262 1.98-.392 3-.398 1.02.006 2.04.136 3 .398 2.28-1.525 3.285-1.209 3.285-1.209.645 1.624.24 2.823.12 3.121.765.825 1.23 1.877 1.23 3.164 0 4.53-2.805 5.527-5.475 5.817.42.354.81 1.077.81 2.182 0 1.578-.015 2.846-.015 3.229 0 .309.21.678.825.56 4.801-1.548 8.236-5.97 8.236-11.173 0-6.512-5.373-11.792-12-11.792z"/></svg>
          </a>
          <a href="https://www.linkedin.com/in/ian-henscheid/" target="_blank">
            <svg id="linkedin-icon" className="profile-icon" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m475.074219 0h-438.148438c-20.394531 0-36.925781 16.53125-36.925781 36.925781v438.148438c0 20.394531 16.53125 36.925781 36.925781 36.925781h438.148438c20.394531 0 36.925781-16.53125 36.925781-36.925781v-438.148438c0-20.394531-16.53125-36.925781-36.925781-36.925781zm-293.464844 387h-62.347656v-187.574219h62.347656zm-31.171875-213.1875h-.40625c-20.921875 0-34.453125-14.402344-34.453125-32.402344 0-18.40625 13.945313-32.410156 35.273437-32.410156 21.328126 0 34.453126 14.003906 34.859376 32.410156 0 18-13.53125 32.402344-35.273438 32.402344zm255.984375 213.1875h-62.339844v-100.347656c0-25.21875-9.027343-42.417969-31.585937-42.417969-17.222656 0-27.480469 11.601563-31.988282 22.800781-1.648437 4.007813-2.050781 9.609375-2.050781 15.214844v104.75h-62.34375s.816407-169.976562 0-187.574219h62.34375v26.558594c8.285157-12.78125 23.109375-30.960937 56.1875-30.960937 41.019531 0 71.777344 26.808593 71.777344 84.421874zm0 0"/></svg>
          </a>
          <a className="anchor" href="#contact_section">
            <svg id="mail-icon" className="profile-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M467 61H45C20.218 61 0 81.196 0 106v300c0 24.72 20.128 45 45 45h422c24.72 0 45-20.128 45-45V106c0-24.72-20.128-45-45-45zm-6.214 30L256.954 294.833 51.359 91h409.427zM30 399.788V112.069l144.479 143.24L30 399.788zM51.213 421l144.57-144.57 50.657 50.222c5.864 5.814 15.327 5.795 21.167-.046L317 277.213 460.787 421H51.213zM482 399.787L338.213 256 482 112.212v287.575z"/></svg>
          </a>
          <a href = {Resume} target = "_blank" rel="noopener noreferrer">
            <svg id="cv-icon" className="profile-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M333.205 34.213L330.799 0 9.545 22.591l30.318 431.118 29-2.04V79.817H420.93V478.34l35.255 3.795 46.27-429.697z"/><path d="M98.884 109.838V512H390.91V109.838H98.884zm96.206 68.448c18.508 0 33.097 6.755 42.418 18.912l-20.128 17.966c-5.539-7.025-12.157-11.078-20.668-11.078-13.239 0-22.154 9.186-22.154 23.64s8.916 23.64 22.154 23.64c8.511 0 15.13-4.053 20.668-11.078l20.128 17.966c-9.321 12.157-23.911 18.912-42.418 18.912-30.395 0-52.684-20.398-52.684-49.442 0-29.04 22.29-49.438 52.684-49.438zm147.705 270.285H146.998V418.55h195.797v30.021zm0-53.399H146.998v-30.021h195.797v30.021zm0-53.399H146.998v-30.021h195.797v30.021zm-35.039-66.764h-31.341l-39.986-94.562h34.313l22.56 55.251 23.101-55.251h31.339l-39.986 94.562z"/></svg>
          </a>
        </div>
      </div>
    )
  }
}

export default Profile;