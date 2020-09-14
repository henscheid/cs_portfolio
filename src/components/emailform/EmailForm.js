import React, {Component} from 'react';
import './EmailForm.css';

class EmailForm extends Component {
  render(){
    return (
      <div id="email-form" className="email-form-container email-form-text">
        <form id="contact-form">
          <div id="name-field" className="form-field-container">
            <input type="text" id="name" name="name" placeholder="Name"></input>
          </div>
          <input type="text" id="email" name="email" placeholder="Email"></input><br/>
          <input type="text" id="message" name="message" placeholder="Message"></input>
          <br/><br/>
          <input type="submit" value="Submit"></input>
          
        </form>
      </div>
    )
  }
}

export default EmailForm;