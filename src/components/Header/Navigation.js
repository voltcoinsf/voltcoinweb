import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';


const Navigation = () => {
    return (
        <Navbar expand="lg" id="main-menu">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="navbar-nav" className="justify-content-center">
            <Nav className="me-auto" as="ul">
                <li className="nav-item"><LinkContainer to="/"><Nav.Link>Home</Nav.Link></LinkContainer></li>
                <li className="nav-item"><LinkContainer to="/introduction"><Nav.Link>Introduction</Nav.Link></LinkContainer></li>
                <li className="nav-item"><LinkContainer to="/market"><Nav.Link>market</Nav.Link></LinkContainer></li>
                <li className="nav-item"><LinkContainer to="/solution"><Nav.Link>solution</Nav.Link></LinkContainer></li>
                <li className="nav-item"><LinkContainer to="/Team"><Nav.Link>Team</Nav.Link></LinkContainer></li>
                <li className="nav-item"><LinkContainer to="/tokenomics"><Nav.Link>tokenomics</Nav.Link></LinkContainer></li>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
       
    )
}

export default Navigation
