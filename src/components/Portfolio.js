import React from 'react';
import Container from 'react-bootstrap/Container';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import resultsDashboard from '../assets/images/resultsDashboard.png';
import clarisa from '../assets/images/clarisa.gif';
import ccafsguide from '../assets/images/ccafsguide.png';
import bsportfolio from '../assets/images/bsportfolio.png';
import personajes from '../assets/images/Personajes.png';
import walle from '../assets/images/walle.png';
import doumies from '../assets/images/doumies.png';
import '../assets/styles/portfolio.css';

export const Portfolio = () => (
  <Container className="mt-2">
  <section className="professional">
  <h5 className="section-title about-title">PORTFOLIO</h5>
  <div className="section-line"></div>
  <Row className="portfolio-section">
  <Col sm={4}>
    <Card style={{ width: '18rem' }} className="portfolio-card mt-2">
      <Card.Img variant="top" src={resultsDashboard} />
      <Card.Body>
        <Card.Title>CGIAR Results Dashboard</Card.Title>
        <Card.Text>
          A Dashboard developed integrating Tableau Javascript API.
        </Card.Text>
        <a className="portfolio-link" href="https://www.cgiar.org/impact/results-dashboard/" target="_blank">Go to site</a>
      </Card.Body>
    </Card>
  </Col>
  <Col sm={4}>
    <Card style={{ width: '18rem' }} className="portfolio-card mt-2">
      <Card.Img variant="top" src={clarisa} />
      <Card.Body>
        <Card.Title>REST API Interface</Card.Title>
        <Card.Text>
          Interface designed with Bootstrap for a REST API developed with Swagger.
        </Card.Text>
        <a className="portfolio-link" href="https://drive.google.com/open?id=1NKrXcmj6ixhad7SIlf_hA5vfOLEVJSNm" target="_blank">View</a>
      </Card.Body>
    </Card>
  </Col>
  <Col sm={4}>
    <Card style={{ width: '18rem' }} className="portfolio-card mt-2">
      <Card.Img variant="top" src={ccafsguide} />
      <Card.Body>
        <Card.Title>Infographic for CCAFS</Card.Title>
        <Card.Text>
          Infographic for CCAFS designed using Adobe Illustrator.
        </Card.Text>
        <a className="portfolio-link" href="https://cgspace.cgiar.org/handle/10568/103401" target="_blank">Go to site</a>
      </Card.Body>
    </Card>
  </Col>
  </Row>
  </section>

  <section className="personal">
  <h6 className="subsection-title languages-title mt-2">PERSONAL PROJECTS</h6>
  <Row className="portfolio-section">
  <Col sm={4}>
    <Card className="portfolio-card mt-2" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={personajes} />
      <Card.Body>
        <Card.Title>Interactive Book</Card.Title>
        <Card.Text>
          Made for my thesis project
        </Card.Text>
        <a className="portfolio-link" href="https://drive.google.com/file/d/15k1ytJ4azDX1YJ4SoG-N-H0CE9sNme6j/view?usp=sharing" target="_blank">View</a>
      </Card.Body>    </Card>
  </Col>
  <Col sm={4}>
    <Card className="portfolio-card mt-2" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={walle} />
      <Card.Body>
        <Card.Title>3D Modeling - Wall-E</Card.Title>
        <Card.Text>
          Wall-E 3D model made with Autodesk Maya.
        </Card.Text>
        <a className="portfolio-link" href="https://drive.google.com/file/d/1_a-sOQOB-2F4LYhUn6x44AOLD-Cqjwgq/view?usp=sharing" target="_blank">View</a>
      </Card.Body>
    </Card>
  </Col>
  <Col sm={4}>
    <Card className="portfolio-card mt-2" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={doumies} />
      <Card.Body>
        <Card.Title>Driving For Doumies Animatic</Card.Title>
        <Card.Text>
          2D animatic made frame-by-frame for a class project.
        </Card.Text>
        <a className="portfolio-link" href="https://youtu.be/1jJWuklc6g0" target="_blank">View</a>
      </Card.Body>
    </Card>
  </Col>
  </Row>
  </section>
  </Container>
)
