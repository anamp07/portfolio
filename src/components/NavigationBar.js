import React from 'react';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

export const NavigationBar = () => (
  <Navbar expand="lg" fixed="top" className="navbar-dark main-navbar">
  <Container>
    <Navbar.Brand>AP.</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        <Nav.Link href="#about">ABOUT</Nav.Link> /
        <Nav.Link href="/OurCauses">SKILLS</Nav.Link> /
        <Nav.Link href="/Events">PORTFOLIO</Nav.Link> /
        <Nav.Link href="/News">CONTACT</Nav.Link>
      </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
)
