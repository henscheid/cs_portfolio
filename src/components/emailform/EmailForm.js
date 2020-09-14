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
    }
    return (
      <div id="email-form" className="email-form-container email-form-text">
        <form onSubmit={sendEmail}>
          <input className="input" type="text" id="name" name="name" placeholder="name"/><br/>
          <input type="email" id="email" name="email" placeholder="email"/><br/>
          <input type="text" id="message" name="message" placeholder="message"/>
          <br/><br/>
          <input type="submit" value="Send Message"></input>
          
        </form>
      </div>
    )
  }
}

export default EmailForm;