import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink
} from 'react-router-dom';
import MainList from './components/main_list';
import Home from './components/detail';
import './App.css';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<MainList/>}>
          </Route>
          <Route path="/detail" element={<Home/>}>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}
export default App;