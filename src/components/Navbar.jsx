import React, { useState, useEffect, useContext } from 'react';
import { Badge, Button, Col, Row, NavDropdown } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { formatNumber } from '../scripts.js';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import PizzaLogo from '../assets/pizza-logo.svg';
import Titulo from './Titulo.jsx';
import { Link } from 'react-router-dom';


const MyNavbar = () => {
    const total = 25000;
    const token = false;

    return (
        <Navbar expand="lg" className="bg-dark sticky-top" data-bs-theme="dark">
            <Container>
                <Navbar.Brand as={Link} to="/">

                    <p className='titulo'>  <img src={PizzaLogo} alt="Pizza Logo" height="32px" width="32px" /><Titulo /> </p>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/"><Button variant='ligth'>🍕 Home</Button></Nav.Link>

                        <Nav.Link as={Link} to={token ? '/profile' : '/register'}>
                            <Button variant='ligth'>
                                {token ? '🔓 Profile' : '🔒 Register'}
                            </Button>
                        </Nav.Link>

                        <Nav.Link as={Link} to={token ? '/logout' : '/login'}>
                            <Button variant='ligth'>
                                {token ? '🔐 Logout' : '🔐 Login'}
                            </Button>
                        </Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link as={Link} to="/cart">
                            <Button variant="success" style={{ margin: '0 5px' }}>
                                🛒 Total: {formatNumber(total)}
                            </Button>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};
export default MyNavbar;
