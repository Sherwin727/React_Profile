// Navigation.js
import React from 'react';
import { Link } from 'react-router-dom';
const Navigation = () => {
return (
<div>  
    <div class="sidebar">
        <nav>
            <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Me</Link></li>
            <li><Link to="/skill">My Skills</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/submission">submissionSystem</Link></li>
            </ul>
        </nav>
    </div>
</div>
);
}
export default Navigation;