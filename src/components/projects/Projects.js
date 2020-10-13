import React, {Component} from 'react';
import Collapsible from 'react-collapsible';
import levelUpLogo from '../../assets/images/leveluplogo.png';
import viessmanLogo from '../../assets/images/viessmann.png';

import './Projects.css';

class Projects extends Component {
  render(){
    return(
      <a className="anchor" id="projects_section">
      <div className="projects-container">
        <h1>Projects</h1>

        <div className="projects-content">

          <div className="ind-project-container">
            <Collapsible trigger={<img src={levelUpLogo} alt="Level Up" className="project-logo"/>}>
              <p className="projects">
                LevelUp is the first major application I helped create that went through the entire
                software development lifecycle, starting from a rough idea and ending with a final 
                launched product. My team wanted to create an application that incorporated both our 
                passion for Role Playing Games and our desire to improve real-world skills, hence
                LevelUp was born.<br/><br/>
                LevelUp is a mobile application created for both iOS and Android that allows users
                to create custom skills, such as playing an instrument or coding skills, and then 
                create their own "Quests" to complete in order to "LevelUp" their skills. By allowing
                plenty of user customizaiton in skills and quests, we believe anyone could use the 
                application as a motivator to improve at their own pace.<br/><br/>
                Complete with features such as login, character customization, backend
                incorpation using Google's Firebase database, and a RESTful API, LevelUp securely
                stores user data so they can access it from any device without using valuable device
                storage.<br/><br/>
                My team created LevelUp using the Agile development method in three main sprints
                with careful planning at each stage. In the process I learned a ton about React Native,
                the MaterialUI framework, Axios, JSON, connecting frontend to backend, general design 
                techniques, how to plan ahead and meet deadlines, and how to work with a team and play 
                to my teammates strengths.<br/><br/>
                I'm very proud of what we accomplished in creating LevelUp and it is one of the main 
                reasons I am so excited about pursuing a career in software development!
              </p>              
            </Collapsible>
          </div>
          <div className="ind-project-container">
            <Collapsible trigger={<h2>Automated Inventory Management (Design Project)</h2>}>
              <p className="projects">
                As a design project, my team and I were assigned to create an automated 
                inventory management system that would accurately and efficiently transport
                packages between the shipping and receiving dock and the inventory storage
                location based on shipping data.  We simulated the situation by using a LegoEV3
                robot programmed in Python, color coded blocks, and a scaled down storage and 
                inventory setting that we designed.<br/><br/>
                We used root cause analysis and several idea generation techniques to come up 
                with facility layouts, robot designs, and programming methods that could improve
                the current system. We then rated each design based on client requirements, weighting
                each factor based on importance as indicated by the client, in order to choose the 
                best overall design.<br/><br/>
                My main role in the project was programming the robot in the Python programming 
                language. I was able to create a fully functional inventory management system that
                was very accurate by taking a text file as input, and utilizing a color sensor to 
                determine when the robot should turn and retrieve product.<br/><br/>
                This project was a great exercise in integrating software and hardware, and working 
                with a team to solve a client problem through design thinking.
                I also gained some valuable experience in working under pressure; we worked right up
                until the deadline to create a solution our client was ultimately very happy with!
              </p>
             
              
            </Collapsible>
          </div>
          <div className="ind-project-container" style={{border:"none"}}>
            <Collapsible trigger={<img src={viessmanLogo} alt="Level Up" className="project-logo"/>}>
              <p className="projects">
                In the Summer of 2018 I had the opportunity to visit Germany with a group
                of classmates on a trip sponsored by the German manufacturing company Viessmann.
                The trip was two weeks; we spent the first week in Berlin learning about German 
                culture and history including WWII and the Soviet occupation, and the second week
                we spent on Viessmann's campus in Allendorf where we worked with German interns 
                on a design thinking project.
                <br/><br/>
                Viessmann specializes in efficient heating and solar products, so our project focused
                on coming up with a potential new product that combined both sustainability and smart 
                home technology. We worked in a very fast paced environment with mentors to generate
                ideas that could harvest natural energy and reduce natural resource consumption. After
                settling on an idea involving a smart home network to better predict the weather, my 
                group created a presentation which we delivered to Viessmann employees and executives.
                <br/><br/>
                I learned so much in my time at Viessmann. I became more comfortable working in a fast 
                paced environment, I learned how to communicate effectively with the German students
                who's primary language wasn't English, and I had the opportunity to work on my public 
                speaking in a professional environment.  I also found that the time we spent in Berlin
                learning about German and world history was extremely valuable in broadening my perspective
                and becoming a more well-rounded person, not to mention I made some great friends along 
                the way! 

              </p>
              
            </Collapsible>
          </div>
          

        </div>
      </div>
      </a>
    )
  }
}

export default Projects;