import {NavLink} from 'react-router-dom';

function Header() {

    const clickStyle = {color: "red"};
    return(
        <header>
            <div className='inner'>
                <h1 className="logo"><NavLink exact to="/">Branden Min</NavLink></h1>
                <ul className="gnb">
                    <li><NavLink exact activeStlye={clickStyle} to="/Projects">Projects</NavLink></li>
                    <li><NavLink exact activeStlye={clickStyle} to="/Experiences">Experiences</NavLink></li>
                    <li><NavLink exact activeStlye={clickStyle} to="/Skills">Skills</NavLink></li>
                    {/* <li><NavLink exact activeStlye={clickStyle} to="/Youtube">Youtube</NavLink></li> */}
                    {/* <li><NavLink exact activeStlye={clickStyle} to="/MyMap">MyMap</NavLink></li> */}
                    <li><NavLink exact activeStlye={clickStyle} to="/Cv">CV</NavLink></li>
                </ul>
                <NavLink className="contact" exact activeStlye={clickStyle} to='/Contact'>Contact</NavLink>
            </div>
        </header>
    )
}

export default Header;