import React, {Component} from 'react';
import './Bio.css';

class Bio extends Component {
  render() {
    return (
      <div className="bio-container">
        
        <h1>Biography</h1>
        <p className="bio" id ="bio-intro">
          I am a software and systems engineer looking for new opportunities to problem 
          solve and put my skills to use in a full time software development or DevOps 
          role. I am most interested in DevOps orchestration and automation, but would 
          be open to other positions where I can grow as an engineer and work with a 
          good team.
        </p>
        <br/>
        <p className="bio" id="bio-education">
          I graduated from the University of Wisconsin-Madison in December of 
          '19 with a double major in both Computer Science and Industrial Engineering, 
          and earned a Business Certificate. I decided to add the Computer Science 
          major after I realized how much I enjoy solving problems through coding.
        </p>
        <br/>
        <p className="bio" id="bio-raytheon">
          Since graduating I've been a software engineer for Raytheon Intellgience & 
          Space on the GPS OCX program. While working with Raytheon I've learned a ton 
          about DevOps, and have gained valuable experience works with DevOps tools 
          such as Jenkins, Artifactory, and the Atlassian tools suite. After about a 
          year at Raytheon I was promoted due to my effective communication across 
          teams, technical skills, and drive to learn and I've been taking on senior 
          engineer tasking while working with more independence since. My time at 
          Raytheon has been awesome and rewarding, but I am looking for a new role 
          where I can gain new skills and become a better engineer.
        </p>
        <br/>
        <p className="bio" id="bio-ie">
          I've found the optimization analysis and design thinking aspects of
          Industrial Engineering are very useful when problem solving in software
          development.  The combination of these disciplines helps me see problems
          from new angles, and efficienctly work toward effective solutions.
        </p>
        <br/>
        <p className="bio" id="bio-interests">
          Outside of programming I really enjoy writing and producing music. I play
          the guitar, keys, sing a little, and I just put out my first songs ever
          this year! I also like going to shows, camping, biking, longboarding, 
          frisbee, and exploring new places.
        </p>
      </div>
    )

  }
}

export default Bio;