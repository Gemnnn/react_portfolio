
import {NavLink} from 'react-router-dom';

function Header() {

    const clickStyle = {color: "red"};
    return(
        <header>
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
            <div className='inner'>
                <h1 className="logo"><NavLink exact to="/react_portfolio">Branden Min</NavLink></h1>
                <ul className="gnb">
                    <li><NavLink exact activeStyle={clickStyle} to="/react_portfolio">About</NavLink></li>
                    <li><NavLink exact activeStyle={clickStyle} to="/Projects">PROJECTS</NavLink></li>
                    <li><NavLink exact activeStyle={clickStyle} to="/Experiences">EXPERIENCES</NavLink></li>
                    <li><NavLink exact activeStyle={clickStyle} to="/Skills">SKILLS</NavLink></li>

                    <li><NavLink onClick={() => window.open('/react_portfolio/BrandenMin.pdf', '_black')} to="/Cv">CV</NavLink></li>
                </ul>
                <div><NavLink className="contact" exact activeStyle={clickStyle} to='/Contact'>Contact</NavLink></div>
            </div>
        </header>
    )
}

export default Header;


// import React, { useState } from 'react';
// import { NavLink } from 'react-router-dom';

// function Header() {
//   const clickStyle = { color: 'red' };
//   const [menuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   return (
//     <header>
//       <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
//       <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
//       <div className="inner">
//         <h1 className="logo">
//           <NavLink exact to="/react_portfolio">
//             Branden Min
//           </NavLink>
//         </h1>
//         <div className="menu-toggle" onClick={toggleMenu}>
//           <i className="fas fa-bars" />
//         </div>
//         <ul className={`gnb ${menuOpen ? 'open' : ''}`}>
//           <li>
//             <NavLink exact activeStyle={clickStyle} to="/react_portfolio">
//               About
//             </NavLink>
//           </li>
//           <li>
//             <NavLink exact activeStyle={clickStyle} to="/Projects">
//               PROJECTS
//             </NavLink>
//           </li>
//           <li>
//             <NavLink exact activeStyle={clickStyle} to="/Experiences">
//               EXPERIENCES
//             </NavLink>
//           </li>
//           <li>
//             <NavLink exact activeStyle={clickStyle} to="/Skills">
//               SKILLS
//             </NavLink>
//           </li>
//           <li>
//             <NavLink onClick={() => window.open('/react_portfolio/BrandenMin.pdf', '_black')} to="/Cv">
//               CV
//             </NavLink>
//           </li>
//           <li>
//             <NavLink className="contact" exact activeStyle={clickStyle} to="/Contact">
//               Contact
//             </NavLink>
//           </li>
//         </ul>
//       </div>
//     </header>
//   );
// }

// export default Header;
