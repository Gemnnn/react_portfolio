import {Route} from 'react-router-dom';


import Header from "./common/Header";
import Footer from "./common/Footer";
import Main from './components/Main';
import Sol from './components/Sol';
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
      <Route exact path="/sol" component={Sol}></Route>
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
