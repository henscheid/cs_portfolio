import React from 'react';
import '../../index.css';
import NavBar from '../nav/NavBar';
import About from '../about/About';
import Skills from '../skills/Skills';
import Projects from '../projects/Projects';
import Experience from '../experience/Experience';
import Contact from '../contact/Contact';


function App() {
  return (
    <body id="ian henscheid">
      <div className="page-wrapper">
          <NavBar/>
          <About/>
          <Skills/>
          <Projects/>
          <Experience/>
          <Contact/>
      </div>
    </body>
  );
}

export default App;
