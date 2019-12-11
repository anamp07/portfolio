import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import '../assets/styles/about.css';

export const About = () => (
  <Container className="mt-2">
    <h5 className="section-title about-title">ABOUT</h5>
    <Row className="about-info d-flex flex-wrap align-items-center">
      <Col sm={4} className="text-center">
        <Image src="https://via.placeholder.com/140" className="profile-photo" roundedCircle />
      </Col>
      <Col sm={8}>
        <p className="text-right about-name">Ana Maria Pantoja Lopez<br/>Born in 1995</p>
        <p>I'm a Multimedia Engineering student (in graduation process)
        who's passionate about UI design, front-end development and learning
        new technologies. I also enjoy learning languages, I speak Spanish,
        English and a bit of Japanese and German.</p>

        <p>I have experience working in UI design, front-end development and agile
        methodologies.</p>
      </Col>
    </Row>
    <h6 className="subsection-title studies-title">EDUCATION</h6>
    <Row className="about-info">
      <Col sm={6} className="text-center d-flex justify-content-center">
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Multimedia Engineering</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Universidad Autonoma de Occidente</Card.Subtitle>
          <Card.Text>
            On-Going
          </Card.Text>
        </Card.Body>
        </Card>
      </Col>
      <Col sm={6} className="text-center">
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>High School Graduate, business emphasis</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Colegio Claretiano Santa Dorotea</Card.Subtitle>
          <Card.Text>
            2012
          </Card.Text>
        </Card.Body>
        </Card>
      </Col>
    </Row>
    <h6 className="subsection-title languages-title mt-2">LANGUAGES</h6>
    <Row className="about-info">
      <Col sm={6} className="text-center d-flex justify-content-center">
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Spanish</Card.Title>
          <Card.Text>
            Mother Tongue
          </Card.Text>
        </Card.Body>
        </Card>
      </Col>
      <Col sm={6} className="text-center">
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>English</Card.Title>
          <Card.Text>
            Speaking and reading 80%
          </Card.Text>
        </Card.Body>
        </Card>
      </Col>
    </Row>
    <h6 className="subsection-title studies-title">EXPERIENCE</h6>
    <Row className="about-info">
      <Col sm={6} className="text-center d-flex justify-content-center">
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>International Center For Tropical Agriculture (CIAT)</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Web designer - Multimedia Technician</Card.Subtitle>
          <Card.Text>
            (September 2019 - On Going)
            I'm in charge of mockup design and UI development. I also help in
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
  </Container>
)
