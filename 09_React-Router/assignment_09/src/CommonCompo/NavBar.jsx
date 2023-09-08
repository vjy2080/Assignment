import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Logo from './Images/logo.png';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import { BsSearch } from "react-icons/bs";

export default function NavBar() {

    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container >
                    <Navbar.Brand to="/">
                        <img className='logo' src={Logo} alt="Logo" />
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Link className='nav-link' to="/">Home</Link>
                        <Link className='nav-link' to="/about">About</Link>
                        <Link className='nav-link' to="/bike">Bike</Link>
                        <Form inline>
                            <InputGroup>
                                <Form.Control
                                    placeholder="Search"
                                    aria-label="Search"
                                    aria-describedby="basic-addon1"
                                />
                                <Button type="search"><BsSearch /></Button>
                            </InputGroup>
                        </Form>
                        <Link className='nav-link' to="/login">Sign-In</Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}
