import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Skill from './Skill';
import Navigation from './Navigation';
import Submission from './SubmissionContent';
import './App.css';


const App = () => {
return (

<BrowserRouter>
<style>{'body { background-color: rgb(216, 216, 216); }'}</style>
<div>
<Navigation/>
<Routes>
<Route exact path="/" element={<Home/>} />
<Route path="/about" element={<About/>} />
<Route path="/skill" element={<Skill/>} />
<Route path="/contact" element={<Contact/>} />
<Route path="/submission" element={<Submission/>} />
</Routes>
</div>
</BrowserRouter>
);
}
export default App;