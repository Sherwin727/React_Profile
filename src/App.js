import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Navigation from './Navigation';

const App = () => {
return (
<BrowserRouter>
<div>
<Navigation />
<Routes>
<Route exact path="/" element={<Home/>} />
<Route path="/about" element={<About/>} />
<Route path="/contact" element={<Contact/>} />
</Routes>
</div>
</BrowserRouter>
);
}
export default App;