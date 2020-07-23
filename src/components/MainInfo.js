import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Jumbotron from 'react-bootstrap/Jumbotron';
import profile from '../assets/images/profile.svg';
import '../assets/styles/mainInfo.css';

export const MainInfo = () => (
  <section className="main-info">
  <Jumbotron fluid className="d-flex">
    <Container className="justify-content-center align-self-center">
    <Row>
    <Col sm={7} className="main-description justify-content-center align-self-center">
      <p className="text">
        Hello, I'm
      </p>
      <p className="name">
        Ana Maria Pantoja
      </p>
      <p className="text">
        And I'm a Multimedia Engineer
      </p>
      </Col>
      <Col sm={5} className="text-center">
        <Image src={profile} />
      </Col>
      </Row>
    </Container>
  </Jumbotron>
  </section>
)
