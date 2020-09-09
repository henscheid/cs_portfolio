import React, {Component} from 'react';
import './Bio.css';

class Bio extends Component {
  render() {
    return (
      <div className="bio-container">
        <h1 className="bio">Biography</h1>
        <p className="bio" id ="bio-intro">
          I am eager college graduate looking to secure
          a full time software development position! I am most
          interested in front-end development, but I am open
          to any role where I can problem solve and put my skills to use.
        </p>
        <br/>
        <p className="bio" id="bio-education">
        I graduated from the University of Wisconsin-Madison in December of 
        '19 with a double major in Computer Science and Industrial Engineering, 
        as well as a Business Certificate. I decided to add the Computer Science 
        major after I realized how much I enjoy solving problems through coding.
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
        this year! I also like going to shows, biking, longboarding, frisbee, and
        exploring new places.
        </p>
      </div>
    )

  }
}

export default Bio;