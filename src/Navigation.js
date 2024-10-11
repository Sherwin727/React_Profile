// Navigation.js
import React from 'react';
import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Navigation = () => {
return (
<div id="Sidebar">
    
    <Navbar>
        <Container>
            <Nav.Link href="/" id="lCol">Home</Nav.Link><br></br>
            <Nav.Link href="/about" id="lCol">About Me</Nav.Link><br></br>
            <Nav.Link href="/skill" id="lCol">My Skills</Nav.Link><br></br>
            <Nav.Link href="/contact" id="lCol">Contact</Nav.Link><br></br>
            <Nav.Link href="/submission" id="lCol">SubmissionSystem</Nav.Link><br></br>
        </Container>
    </Navbar>
    
</div>
);
}
export default Navigation;