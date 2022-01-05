import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink
} from 'react-router-dom';
import Contact from './components/somepage';
import Home from './components/detail';
import './App.css';
function App() {
  return (
    <div className="App">
      <Router>
        {/* <nav>
          <ul>
            <li>
              <NavLink 
                exact to="/" 
                activeClassName="selected">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/contact" 
                activeClassName="selected">
                Contact
              </NavLink>
            </li>
          </ul>
        </nav> */}
        <Routes>
          <Route path="/contact" element={<Contact/>}>
          </Route>
          <Route path="/" element={<Home/>}>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}
export default App;