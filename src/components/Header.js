
// version 4 

import { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  const [isNavVisible, setNavVisibility] = useState(false);

  const toggleNav = () => {
    setNavVisibility(!isNavVisible);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const offsetTop = section.offsetTop;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
      setNavVisibility(false); // Close navigation after clicking on a link
    }
  };

  return (
    <header>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
      />
      <div className="inner">
        <h1 className="logo">
          <NavLink exact to="/portfolio">
            Branden Min
          </NavLink>
        </h1>
        {/* <div className='nav'> */}
          <div className={`mobile-menu ${isNavVisible ? 'open' : ''}`}>
            <span className="toggle-button" onClick={toggleNav}>
              <i className={`fas ${isNavVisible ? 'fa-times' : 'fa-bars'}`}></i>
            </span>
            <ul className={`gnb ${isNavVisible ? 'open' : ''}`}>
              <a><NavLink onClick={() => scrollToSection("body2")} to="/portfolio#body2">ABOUT</NavLink></a>
              <a><NavLink onClick={() => scrollToSection("projects")} to="/portfolio#projects">PROJECTS</NavLink></a>
              <a><NavLink onClick={() => scrollToSection("experiences")} to="/portfolio#experiences">EXPERIENCES</NavLink></a>
              <a><NavLink onClick={() => scrollToSection("skills")} to="/portfolio#skills">SKILLS</NavLink></a>
              <a><NavLink onClick={() => window.open('/BrandenMin.pdf', '_black')} to="portfolio/#cv">CV</NavLink></a>
            </ul>
          </div>
          <div className='pc-menu'>
            <ul className='web'>
              <a><NavLink onClick={() => scrollToSection("body2")} to="/portfolio#body2">ABOUT</NavLink></a>
              <a><NavLink onClick={() => scrollToSection("projects")} to="/portfolio#projects">PROJECTS</NavLink></a>
              <a><NavLink onClick={() => scrollToSection("experiences")} to="/portfolio#experiences">EXPERIENCES</NavLink></a>
              <a><NavLink onClick={() => scrollToSection("skills")} to="/portfolio#skills">SKILLS</NavLink></a>
              <a><NavLink onClick={() => window.open('/BrandenMin.pdf', '_black')} to="/portfolio#cv">CV</NavLink></a>
            </ul>
          </div>
          <div className="snsContact">
            <a href="https://www.linkedin.com/in/brandenmin/" target="_blank">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="https://github.com/Gemnnn" target="_blank">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="#">
              <i className="fa-brands fa-facebook"></i>
            </a>
          </div>
        {/* </div> */}
      </div>
    </header>
  );
}

export default Header;