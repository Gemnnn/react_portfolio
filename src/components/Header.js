import {NavLink} from 'react-router-dom';

function Header() {

    const clickStyle = {color: "red"};
    return(
        <header>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
            <div className='inner'>
                <h1 className="logo"><NavLink exact to="/">Branden Min</NavLink></h1>
                <ul className="gnb">
                    <li><NavLink exact activeStlye={clickStyle} to="/Projects">PROJECTS</NavLink></li>
                    <li><NavLink exact activeStlye={clickStyle} to="/Experiences">EXPERIENCES</NavLink></li>
                    <li><NavLink exact activeStlye={clickStyle} to="/Skills">SKILLS</NavLink></li>
                    {/* <li><NavLink exact activeStlye={clickStyle} to="/Youtube">Youtube</NavLink></li> */}
                    {/* <li><NavLink exact activeStlye={clickStyle} to="/MyMap">MyMap</NavLink></li> */}
                    {/* <li><NavLink exact activeStlye={clickStyle} to="/Cv">CV</NavLink></li> */}
                    <li><NavLink onClick={() => window.open('/react_portfolio/BrandenMin.pdf', '_black')} to="/Cv">CV</NavLink></li>
                </ul>
                <NavLink className="contact" exact activeStlye={clickStyle} to='/Contact'>Contact</NavLink>
            </div>
        </header>
    )
}

export default Header;