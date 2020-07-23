import React from 'react';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

export const NavigationBar = () => (
  <Navbar expand="lg" fixed="top" className="navbar-light main-navbar">
  <Container>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        <Nav.Link href="#about">ABOUT</Nav.Link> /
        <Nav.Link href="#skills">SKILLS</Nav.Link> /
        <Nav.Link href="#portfolio">PORTFOLIO</Nav.Link>
      </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
)
