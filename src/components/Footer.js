import { NavLink } from 'react-router-dom';

const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const offsetTop = section.offsetTop;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

function Footer() {
    return (
        <footer>
            <ul className="inner">
                <li className="info">
                    <h1 className="logo"><NavLink exact to="/portfolio" className="logo-color">Branden</NavLink></h1>
                    <h1 className="logo"><NavLink exact to="/portfolio" className="logo-color">Min</NavLink><span>.</span></h1>
                    <p>Junior Software Developer & Data Analyst</p>
                    <div className="sns">
                        <a href="https://www.linkedin.com/in/brandenmin/" target='_blank'><i class="fa-brands fa-linkedin"></i></a>
                        <a href="https://github.com/Gemnnn" target='_blank'><i class="fa-brands fa-github"></i></a>
                        <a href="#"><i class="fa-brands fa-facebook"></i></a>
                    </div>
                </li>
                <li className="nav">
                    <h2>Links</h2>
                    <ul className="list">
                        <li><a><NavLink onClick={() => scrollToSection("body2")} to="/portfolio#body2">ABOUT</NavLink></a></li>
                        <li><a><NavLink onClick={() => scrollToSection("projects")} to="/portfolio#projects">PROJECTS</NavLink></a></li>
                        <li><a><NavLink onClick={() => scrollToSection("experiences")} to="/portfolio#experiences">EXPERIENCES</NavLink></a></li>
                        <li><a><NavLink onClick={() => scrollToSection("interests")} to="/portfolio#interests">INTERESTS</NavLink></a></li>
                        <li><a><NavLink onClick={() => window.open('/portfolio/BrandenMin.pdf.pdf', '_black')} to="portfolio/#cv">CV</NavLink></a></li>
                        <li><a><NavLink onClick={() => scrollToSection("contact")} to="/portfolio#contact">Contact</NavLink></a></li>
                    </ul>
                </li>
                <li className="nav">
                    <h2>Legal</h2>
                    <ul className="list">
                        <li><NavLink to="/privacy">Privacy Policy</NavLink></li>
                        <li><NavLink to="/terms">Terms of Conditions</NavLink></li>
                        <li><NavLink to="/faq">Faq</NavLink></li>
                        <li><NavLink to="/help">Help</NavLink></li>
                    </ul>
                </li>
                <li className="contactMe">
                    <ul className="list">
                        <li>DM me on: <span><a href="mailto:Brandenmin@gmail.com">brandenmin@gmail.com</a></span></li>
                    </ul>
                </li>
                <li className="copy">&copy; Nothing is impossible</li>
            </ul>
        </footer>
    )
}

export default Footer;