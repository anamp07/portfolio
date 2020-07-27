import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import profilepic from '../assets/images/profilepic.png';
import '../assets/styles/about.css';

export const About = () => (
  <Container>
    <section className="basic-info">
    <h5 className="section-title">ABOUT</h5>
    <div className="section-line"></div>
    <Row className="about-info d-flex flex-wrap align-items-center">
      <Col sm={8}>
        <p>I'm Ana, I was born in Cali, Colombia in 1995 and I'm a Multimedia Engineer graduated from the UAO.
        I'm interested in UI design, front-end development, interactive systems design
        and languages.</p>

        <p>I have experience working in web design and development, working specifically
        in a front-end team that works with agile methodologies.</p>

        <p>I can speak English and I'm learning German. </p>
      </Col>
      <Col sm={4} className="d-flex flex-wrap align-items-center">

        <Image src={profilepic} height="200px" />
        <div className="contact-info">

        </div>
      </Col>
    </Row>
    </section>

    <section className="experience">
      <h6 className="subsection-title studies-title">EXPERIENCE</h6>
      <Row className="about-info">
        <Col sm={6} className="text-center d-flex justify-content-center">
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>International Center For Tropical Agriculture (CIAT)</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Multimedia Technician</Card.Subtitle>
            <Card.Text>
              (September 2019 - On Going)
              I'm in charge of mockup design, UI development and coordinating the front-end intern. I also help in
              creating graphic material such as infographics.
            </Card.Text>
          </Card.Body>
          </Card>
        </Col>
        <Col sm={6} className="text-center">
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>International Center For Tropical Agriculture (CIAT)</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Internship</Card.Subtitle>
            <Card.Text>
              (August 2018 - August 2019)
              During this internship I helped in UI design and front-end development.
            </Card.Text>
          </Card.Body>
          </Card>
        </Col>
      </Row>
    </section>
  </Container>
)
