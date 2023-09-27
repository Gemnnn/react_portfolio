import {Route} from 'react-router-dom';


import Header from "./common/Header";
import Footer from "./common/Footer";
import Main from './components/Main';
import Community from './components/Community';
import Department from './components/Department';
import Join from './components/Join';
import Youtube from './components/Youtube';
import Location from './components/Location';
import Coffee from './components/Coffee';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Route exact path="/" component={Main}></Route>
      <Route exact path="/community" component={Community}></Route>
      <Route exact path="/department" component={Department}></Route>
      <Route exact path="/coffee" component={Coffee}></Route>
      <Route exact path="/join" component={Join}></Route>
      <Route exact path="/location" component={Location}></Route>
      <Route exact path="/youtube" component={Youtube}></Route>


      <Footer></Footer>
    </div>
  );
}

export default App;
