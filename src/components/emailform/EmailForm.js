import React, {Component} from 'react';
import emailjs from 'emailjs-com';
import './EmailForm.css';



class EmailForm extends Component {
  render(){
    function sendEmail(e) {
    
      e.preventDefault();
      
      emailjs.sendForm(
        'gmail', 
        'portfolio-email', 
        e.target,
        "user_oHKEUiJNqkGdmu9gLwmu5")

        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
        alert("Your message has been sent!");
    }
    return (
      <div id="email-form" className="email-form-container email-form-text">
        <form onSubmit={sendEmail}>
          <input className="contact" type="text" id="name" name="name" placeholder="Your name"/><br/>
          <input className="contact" type="email" id="email" name="email" placeholder="Your email"/><br/>
          <textarea className="contact" type="text" id="message" name="message" placeholder="Message"/>
          <br/><br/>
          <div id="submit-button">
            <input className="send-button" type="submit" value="Send Message"></input>
          </div>
          
          
        </form>
      </div>
    )
  }
}

export default EmailForm;