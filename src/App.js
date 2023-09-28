import {Route} from 'react-router-dom';
import { useState } from 'react';
import './css/style.css';

import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from './components/Main';
import Projects from './components/Projects';
import Experiences from './components/Experiences';
import Skills from './components/Skills';
import Youtube from './components/Youtube';
import Mymap from './components/Mymap';
import Cv from './components/Cv';
import Contact from './components/Contact';


function App() {

  const [commuFirstContsIsActive, setCommuFirstContsIsActive] = useState(null);
  const [menuMobile,setMenuMobile] = useState('');

  return (
    <div className="App">
      {/* <Switch> */}
          {/* <Route exact path="/"> */}
            {/* <Header menuMobile={menuMobile} setMenuMobile={setMenuMobile} frame="main" setCommuFirstContsIsActive={setCommuFirstContsIsActive}></Header> */}
            {/* <Main></Main> */}
            {/* <Pop></Pop> */}
          {/* </Route> */}
          {/* <Route path="/"> */}
            {/* <Header menuMobile={menuMobile} setMenuMobile={setMenuMobile} frame="sub" setCommuFirstContsIsActive={setCommuFirstContsIsActive}></Header> */}
        {/* </Route> */}
      {/* </Switch> */}
      {/* <Main></Main> */}
      <Header></Header>
      <Route exact path="/" component={Main}></Route>
      {/* <Route exact path="/projects" component={Projects}></Route> */}
      <Route exact path="/projects" render={() => <Projects setCommuFirstContsIsActive={setCommuFirstContsIsActive} commuFirstContsIsActive={commuFirstContsIsActive}/>}></Route>
      <Route exact path="/experiences" component={Experiences}></Route>
      <Route exact path="/skills" component={Skills}></Route>
      <Route exact path="/youtube" component={Youtube}></Route>
      <Route exact path="/mymap" component={Mymap}></Route>
      <Route exact path="/cv" component={Cv}></Route>
      <Route exact path="/contact" component={Contact}></Route>
      <Footer></Footer>
    </div>
  );
}

export default App;
