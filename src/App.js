import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/home';
import Project from './pages/project'
import Contact from './pages/contact';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/project" element={<Project/>}/>
        <Route path ="/contact" element = {<Contact/>}/>
      </Routes>
    </Router>
  );
}

export default App;
