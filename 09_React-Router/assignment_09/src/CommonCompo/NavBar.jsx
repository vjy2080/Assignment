import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import Logo from './Images/logo.png';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import { BsSearch } from "react-icons/bs";

export default function NavBar() {
    const navigate = useNavigate()
    return (
        <>
            <Navbar className='sticky-top py-0 ' bg="dark" data-bs-theme="dark">
                <Container >
                    <Navbar.Brand to="/">
                        <img className='logo' src={Logo} alt="Logo" />
                    </Navbar.Brand>
                    <Nav className="ml-auto">
                        <Form inline='true'>
                            <InputGroup>
                                <Form.Control
                                    placeholder="Search"
                                    aria-label="Search"
                                    aria-describedby="basic-addon1"
                                />
                                <Button type="search"><BsSearch /></Button>
                            </InputGroup>
                        </Form>
                        <Link className='nav-link mx-3' to="/">Home</Link>
                        <Link className='nav-link ' to="/about">About</Link>
                        <Link className='nav-link mx-3' to="/bike">Bike's-specs</Link>
                        <Link className='nav-link text-primary px-4' to="/signup">Login</Link>


                        {localStorage.getItem('userEmail') ? (
                            <Link
                                className='nav-link text-danger'
                                onClick={() => {
                                    localStorage.removeItem('userEmail');
                                    localStorage.removeItem('userPassword');
                                    navigate('/signup')
                                }}
                            >
                                Logout
                            </Link>
                        ) : null}



                        {/* <Link
                            className={`nav-link text-danger${!localStorage.getItem('userEmail') ? ' disabled' : ''}`}
                            onClick={() => {
                                localStorage.removeItem('userEmail')
                                localStorage.removeItem('userPassword')
                            }}
                        >
                            Logout
                        </Link> */}
                        {/* 

                        <Link className='nav-link text-danger'
                            onClick={() => {
                                localStorage.removeItem('userEmail')
                                localStorage.removeItem('userPassword')
                            }}>Logout</Link> */}
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}
