import {NavLink} from 'react-router-dom';

function Header() {

    const clickStyle = {color: "red"};
    return(
        <header>
            <ul className="gnb">
                <li><NavLink exact activeStlye={clickStyle} to="/Community">Community</NavLink></li>
                <li><NavLink exact activeStlye={clickStyle} to="/Department">Department</NavLink></li>
                <li><NavLink exact activeStlye={clickStyle} to="/Youtube">Youtube</NavLink></li>
                <li><NavLink exact activeStlye={clickStyle} to="/Coffee">Coffee</NavLink></li>
                <li><NavLink exact activeStlye={clickStyle} to="/Location">Location</NavLink></li>
                <li><NavLink exact activeStlye={clickStyle} to="/Join">Join</NavLink></li>

            </ul>
        </header>
    )
}

export default Header;