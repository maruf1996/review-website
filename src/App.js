import logo from '../src/images/logo.png';
import logo2 from '../src/images/logo-footer.png';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Home from './component/Home/Home';
import Lyricist from './component/Lyricist/Lyricist';
import About from './component/About/About';
import Contact from './component/Contact/Contact';
import NotFound from './component/NotFound/NotFound';


function App() {
  return (
    <div className="App">
      <Router>
            <div className="container mt-5 bg-success p-4">
            <img src={logo} class="img-fluid" alt="logo"></img>
            <NavLink to="/home" className="text-light text-decoration-none ps-5 fs-3">Home</NavLink>
            <NavLink to="/lyricist" className="text-light text-decoration-none ps-5 fs-3">Lyricist</NavLink>
            <NavLink to="/about" className="text-light text-decoration-none ps-5 fs-3">About</NavLink>
            <NavLink to="/contact" className="text-light text-decoration-none ps-5 fs-3">Contact</NavLink>
            </div>
               <Switch>
                <Route exact path="/">
                    <Home></Home>
                </Route>
                <Route path="/home">
                    <Home></Home>
                </Route>
                <Route path="/lyricist">
                    <Lyricist></Lyricist>
                </Route>
                  <Route path="/about">
                    <About></About>
                </Route>
                <Route path="/contact">
                    <Contact></Contact>
                </Route>
                <Route>
                    <NotFound></NotFound>
                </Route>
               </Switch>
            <div className="container mt-5 p-4 bg-dark">
              <div className="py-4 fs-4">
                <NavLink to="/home" className="text-light text-decoration-none ps-5">Home</NavLink>
                <NavLink to="/lyricist" className="text-light text-decoration-none ps-5">Lyricist</NavLink>
                <NavLink to="/about" className="text-light text-decoration-none ps-5">About</NavLink>
                <NavLink to="/contact" className="text-light text-decoration-none ps-5">Contact</NavLink>
              </div>
              <div className="text-light fs-4">
                <img src={logo2} class="img-fluid mt-5 mb-3" alt="logo"></img>
                <p>Madrasah Road, JatraBari, Dhaka</p>
                <p>Mobile: +880 1821 767893</p>
                <p>Email: lyrichousebd@gmail.com</p>
              </div>
              <p className="text-light mt-5 fs-5">lyrichousebd.com © 2021</p>
            </div>
           </Router>
    </div>
  );
}

export default App;
