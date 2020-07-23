import React from 'react';
import Container from 'react-bootstrap/Container';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../assets/styles/skills.css';

export const Skills = () => (
  <Container className="mt-2">
  <h5 className="section-title about-title">SKILLS</h5>
  <div className="section-line"></div>

  <Row className="skills-section">
    <Col sm={6}>
      <span className="mt-2">HTML, CSS, Bootstrap</span>
      <ProgressBar className="skill-one" now={80} max={100}/>
      <span className="mt-2">Javascript, JQuery</span>
      <ProgressBar className="skill-two" now={70} max={100}/>
      <span className="mt-2">PHP</span>
      <ProgressBar className="skill-three" now={60} max={100}/>
      <span className="mt-2">React</span>
      <ProgressBar className="skill-four" now={40} max={100}/>
    </Col>
    <Col sm={6}>
      <span className="mt-2">Illustrator, Photoshop</span>
      <ProgressBar className="skill-five" now={80} max={100}/>
      <span className="mt-2">Premiere, After Effects</span>
      <ProgressBar className="skill-one" now={55} max={100}/>
      <span className="mt-2">GIT</span>
      <ProgressBar className="skill-two" now={50} max={100}/>
      <span className="mt-2">MySQL</span>
      <ProgressBar className="skill-three" now={40} max={100}/>
    </Col>
  </Row>

  <div className="skills-section">
  <h6 className="subsection-title languages-title mt-2">OTHERS</h6>
  <p>Adobe XD, Tableau, Google Analytics, Microsoft Office,
  Linux, Arduino, Processing, Usability, User Centered Design,
  Transmedia Storytelling, and 3D Modeling. </p>
  </div>

  </Container>
)
