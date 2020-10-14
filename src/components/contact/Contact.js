import React, {Component} from 'react';
import EmailForm from "../emailform/EmailForm";
import './Contact.css';

class Contact extends Component {
  render(){
    return(
      <div id="contact_section">
        <div id="contact-container" className="contact-container">
          <h1>Contact</h1>
          <EmailForm/>
        </div>
      </div>
    )
    
  }
}

export default Contact;