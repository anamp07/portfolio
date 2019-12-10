import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import '../assets/styles/about.css';

export const About = () => (
  <Row>
    <Col sm={4} className="text-center">
      <Image src="https://via.placeholder.com/140" roundedCircle />
    </Col>
    <Col sm={8} className="about-info">
      <p>I'm Ana Maria Pantoja, a Multimedia Engineering student
      (in graduation process) who's passionate about UI design, front-end
      development and learning new technologies. I also enjoy learning
      languages, I speak Spanish, English and a bit of Japanese and German.</p>

      <p>I have experience working in UI design, front-end development and agile
      methodologies.</p>
    </Col>
  </Row>
)
