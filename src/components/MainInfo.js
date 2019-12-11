import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Jumbotron from 'react-bootstrap/Jumbotron';
import profile from '../assets/images/profile.png';
import '../assets/styles/mainInfo.css';

export const MainInfo = () => (
  <section className="main-info">
  <Jumbotron fluid className="d-flex">
    <Container className="justify-content-center align-self-center">
    <Row>
    <Col sm={4} className="text-center">
      <Image src={profile}  className="profile-photo" roundedCircle />
      <h1 className="main-title"><i>Ana Maria</i> <br/>Pantoja Lopez</h1>
    </Col>
    <Col sm={8} className="d-flex justify-content-center align-self-center">
      <p className="main-description">
        Soon to be Multimedia Engineer, passionate about UI/UX design and
        Transmedia Storytelling.
      </p>
      </Col>
      </Row>
    </Container>
  </Jumbotron>
  </section>
)
