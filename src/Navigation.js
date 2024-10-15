// Navigation.js
import React from 'react';
import {Container, Nav, Navbar} from 'react-bootstrap';
const Navigation = () => {
return (
<div id="Dashboard">
    <Navbar>
        <Container>
            <strong>
            <Nav.Link href="/" id="lCol">Home      &nbsp;</Nav.Link>
            <Nav.Link href="/about" id="lCol">About Me     &nbsp;</Nav.Link>
            <Nav.Link href="/skill" id="lCol">My Skills    &nbsp;</Nav.Link>
            <Nav.Link href="/contact" id="lCol">Contact Me     &nbsp;</Nav.Link>
            </strong>
        </Container>
    </Navbar>
</div>
);
}
export default Navigation;