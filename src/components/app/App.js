import React from 'react';
import '../../index.css';
import NavBar from '../nav/NavBar';
import About from '../about/About';
import Skills from '../skills/Skills';
import Projects from '../projects/Projects';


function App() {
  return (
    <body id="ian henscheid">
      <div className="page-wrapper">
          <NavBar/>
          <About/>
          <Skills/>
          <Projects/>
      </div>
    </body>
  );
}

export default App;
