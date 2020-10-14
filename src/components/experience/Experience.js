import React, {Component} from 'react';
import './Experience.css';
import walgreensLogo from '../../assets/images/walgreens.png';
import pcwpLogo from '../../assets/images/pollock-logo.png';
import ssecLogo from '../../assets/images/ssec-logo.png';
import bascom from '../../assets/images/bascom-hall.jpg';

class Experience extends Component {
  render(){
    return(
      <a className= "anchor" id="experience_section">
        <div className="experience-container">
          <h1>Experience</h1>
          <div className="experience-content">
            <div className="ind-experience-container" id="ssec-exp">
              <div>
                <div className="exp-logo-container">
                  <img 
                    src={ssecLogo} 
                    alt="UW Madison SSEC" 
                    className="exp-logo" 
                    style={{margin: "40px auto"}}/>
                </div>
              </div>
              <div className="exp-info">
                <p className="exp-company">UW-Madison Space Science and Engineering Center</p>
                <p className="exp-role">Shipping & Receiving/Building Manager Assistant, February 2017-2020</p>
                <p className="exp-location">Madison, WI</p>
                <br/>
                <p className="exp">
                  After my freshman year of college I found myself with a little free time and
                  the desire to gain work experience, as well as earn some extra spending money. 
                  I scoured the University job page and stumbled upon a position at the Space 
                  Science and Engineering Center that seemed like it would be a good learning 
                  experience for me.
                  <br/><br/>
                  I worked at SSEC about 20 hours a week for the rest of my time at UW-Madison
                  and it turned out to be a great position. Although my title was in the shipping and 
                  receiving office, I became a general helping hand to researchers and faculty within the 
                  building.  During my time at the SSEC I learned how to match incoming packages to purchase
                  orders within our database, send packages all over the world, and carefully log all of this
                  information into our ERP system.
                  <br/><br/>
                  Not only am I happy with the technical skills I learned while working at the SSEC,
                  I'm also grateful for the time management and team skills I learned by holding
                  this position throughout college.
                </p>
              </div>
              
            </div>
            <div className="ind-experience-container" id="uw-exp">
              <div>
                <div className="exp-logo-container" style={{backgroundColor:"transparent"}}>
                  <img 
                    src={bascom} 
                    alt="Bascom Hall" 
                    className="exp-logo-container" 
                    />
                </div>
              </div>
              <div className="exp-info">
                <p className="exp-company">University of Wisconsin - Madison</p>
                <p className="exp-role">B.S. Computer Science, Industrial Engineering</p>
                <p className="exp-location">Madison, WI</p>
                <br/>
                <p className="exp">
                  I entered UW Madison as an Undecided Engineering Student
                  with no idea what career I wanted to pursue. After two years taking a variety of electives
                  and pursuing an Industrial Engineering degree, I found my Computer Science courses were 
                  providing me with better opportunities to problem solve in a creative way, and more 
                  flexibility in career paths going forward.  This realization prompted me to add the 
                  Computer Science major and I started packing my course schedule so I could still finish
                  my degrees and earn a Business Certificate in four and a half years.
                  <br/><br/>
                  Jumping into the Computer Science major as a Junior humbled me, but also gave me a unique
                  opportunity to dive head first into the material and test my self discipline. I finally felt 
                  like I was learning the skills I wanted to use in my career, and received a broad background
                  from math heavy algorithm courses, to more design oriented courses like Software Engineering
                  where we designed and developed a mobile application from scratch.  I feel like my education 
                  at UW has set me up well to use computer science as a tool to tackle any problem.
                  <br/><br/>
                  Apart from my formal education, I also learned a great deal about myself and gained valuable
                  perspective while away at school. While living in slightly too crowded, rundown apartments, I 
                  taught myself how to cook, play guitar, lean on and support my friends, and even get my less than
                  willing roommates to do their chores!
                  <br/><br/>
                  UW-Madison gave me the opportunity to earn a great education that will no doubt serve me
                  very well in my career going forward, but it also helped me figure out how to navigate the
                  real world and find out what matters most to me.
                </p>
              </div>
              
            </div>
            <div className="ind-experience-container" id="walgreens-exp">
              <div>
                <div className="exp-logo-container">
                  <img src={walgreensLogo} alt="Walgreens" className="exp-logo"/>
                </div>
              </div>
              <div className="exp-info">
                <p className="exp-company">Walgreens</p>
                <p className="exp-role">Operations and Supply Chain Intern, Summer 2018</p>
                <p className="exp-location">Windsor, WI</p>
                <br/>
                <p className="exp">
                  As a new intern working at Walgreens' massive Windsor distribution center 
                  I had no idea what to expect, but I quickly found our summer project would focus 
                  on improving Reset Item Slotting which had hindered efficiency and workflow for over 20 years.
                  <br/><br/>
                  By consolidating and using queries on past data, engaging constantly with 
                  team members on the floor and management, and organizing multiple Kaizen and 
                  improvement events, we were able to find a solution. We piloted our solution, 
                  which management and team members were happy with, and it showed an increase
                  in overall efficiency.
                  <br/><br/>
                  I am grateful for experience with Walgreens, and I feel like it was a very 
                  valuable experience in design thinking, optimization, teamwork, and communication
                  between various levels of management that I will be able to use in any field.
                </p>
              </div>
              
            </div>         
            <div className="ind-experience-container" id="pcwp-exp">
              <div>
                <div className="exp-logo-container">
                  <img 
                    src={pcwpLogo} 
                    alt="Pollock Community Water Park" 
                    className="exp-logo" 
                    style={{margin: "10px auto"}}/>
                </div>
              </div>
              <div className="exp-info">
                <p className="exp-company">Pollock Community Water Park</p>
                <p className="exp-role">Head Lifeguard/Facility Manager, Summer 2013-2017</p>
                <p className="exp-location">Oshkosh, WI</p>
                <br/>
                <p className="exp">
                  My first job was at Pollock Community Water Park as a lifeguard when I was 16.
                  Working at Pollock was a good way for me to keep busy during the summer, learn how 
                  to manage my own schedule, and make some cash to put towards college. Being a 
                  lifeguard also taught me responsibility and how to be an effective communicator
                  as well.
                  <br/><br/>
                  After a few successful summers lifeguarding I was promoted to the Head Lifeguard 
                  position which entailed managing over 40 staff members and their schedules, 
                  coordinating with other managers, and being the main contact for any problems 
                  or concerns visitors had throughout the day.
                  <br/><br/>
                  As a Head Lifeguard and manager I learned many valuable skills. I provided excellent 
                  customer service, problem solved on the spot, communicated with authority, and perhaps 
                  most importantly served as a role model and mentor to a lot of high school students 
                  who were for the most part working their first job! I wouldn't trade my time at Pollock 
                  for anything, I think it really helped me grow as a person and gain valuable life skills.
                </p>
              </div>
              
            </div>
            
            
          </div>
        </div>
      </a>
    )
  }
}

export default Experience;