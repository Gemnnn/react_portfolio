import { NavLink } from 'react-router-dom';

function Footer() {
    return (
        <footer>
            <ul className="inner">
                <li className="info">
                    <h1 className="logo"><NavLink exact to="/">Branden</NavLink></h1>
                    <h1 className="logo"><NavLink exact to="/">Min</NavLink><span>.</span></h1>
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
                        <li><NavLink to="/projects">Projects</NavLink></li>
                        <li><NavLink to="/experiences">Experiences</NavLink></li>
                        <li><NavLink to="/skills">Skills</NavLink></li>
                        {/* <li><NavLink to="/youtube">Youtube</NavLink></li> */}
                        <li><NavLink to="/vc">CV</NavLink></li>
                        <li><NavLink to="/Contact">Contact</NavLink></li>
                    </ul>
                </li>
                <li className="nav">
                    <h2>Legal</h2>
                    <ul className="list">
                        <li><NavLink to="/privacy">Privacy Policy</NavLink></li>
                        <li><NavLink to="/terms">Terms of Conditions</NavLink></li>
                        <li><NavLink to="/faq">Faq</NavLink></li>
                        <li><NavLink to="/help">Help Center</NavLink></li>
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