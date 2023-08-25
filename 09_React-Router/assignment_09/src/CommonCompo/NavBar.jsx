import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function NavBar() {
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand to="/">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link to="/">Home</Nav.Link>
                        <Nav.Link to="/about">About</Nav.Link>
                        <Nav.Link to="/bike">Bike</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

        </>
    );
}
