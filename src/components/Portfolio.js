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
import qualityassesment from '../assets/images/qualityassessment.png';
import globalfilters from '../assets/images/globalfilters.png';
import texturizado from '../assets/images/texturizado.png';
import '../assets/styles/portfolio.css';

export const Portfolio = () => (
  <Container className="mt-2">
  <section className="professional">
  <h5 className="section-title about-title">PORTFOLIO</h5>
  <div className="section-line"></div>
  <Row className="portfolio-section">
  <Col sm={6}>
    <Card style={{ width: '18rem' }} className="portfolio-card mt-2">
      <Card.Img variant="top" src={resultsDashboard} />
      <Card.Body>
        <Card.Title>CGIAR Results Dashboard</Card.Title>
        <Card.Text>
          A Dashboard developed integrating Tableau Javascript API. In this project
          I designed the Interface and developed the application.
        </Card.Text>
        <a className="portfolio-link" href="https://www.cgiar.org/impact/results-dashboard/" target="_blank">Go to site</a>
      </Card.Body>
    </Card>
  </Col>
  <Col sm={6}>
    <Card style={{ width: '18rem' }} className="portfolio-card mt-2">
      <Card.Img variant="top" src={clarisa} />
      <Card.Body>
        <Card.Title>REST API Interface</Card.Title>
        <Card.Text>
          Interface developed with Bootstrap for a REST API developed with Swagger. In this project I designed and developed the UI.
        </Card.Text>
        <a className="portfolio-link" href="https://drive.google.com/open?id=1NKrXcmj6ixhad7SIlf_hA5vfOLEVJSNm" target="_blank">View</a>
      </Card.Body>
    </Card>
  </Col>
  </Row>
  <Row className="portfolio-section">
  <Col sm={6}>
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
  <Col sm={6}>
    <Card style={{ width: '18rem' }} className="portfolio-card mt-2">
      <Card.Img variant="top" src={qualityassesment} />
      <Card.Body>
        <Card.Title>Quality Assesment UI</Card.Title>
        <Card.Text>
          Mockups designed for a Quality Assesment platform using Adobe XD.
        </Card.Text>
        <a className="portfolio-link" href="https://xd.adobe.com/view/1a059809-af6e-4e0c-6eb8-8da8a52ba81a-6c34/" target="_blank">View</a>
      </Card.Body>
    </Card>
  </Col>
  </Row>
  <Row className="portfolio-section">
  <Col sm={6}>
    <Card style={{ width: '18rem' }} className="portfolio-card mt-2">
      <Card.Img variant="top" src={globalfilters} />
      <Card.Body>
        <Card.Title>Mockup for new feature in an application</Card.Title>
        <Card.Text>
          Mockup designed in Adobe XD for new features to include in an application.
        </Card.Text>
        <a className="portfolio-link" href="https://xd.adobe.com/view/a387ae22-a76d-4cc3-7888-3c6150308243-d5b6/" target="_blank">Go to site</a>
      </Card.Body>
    </Card>
  </Col>
  <Col sm={6}>
  <Card style={{ width: '18rem' }} className="portfolio-card mt-2">
    <Card.Img variant="top" src={bsportfolio} />
    <Card.Body>
      <Card.Title>PDF Portfolio for Bullsmile DS</Card.Title>
      <Card.Text>
        Portfolio designed in Illustrator.
      </Card.Text>
      <a className="portfolio-link" href="https://drive.google.com/file/d/17IBLtf4Q28nNAaD07LPOjjybQmfPQZ7W/view?usp=sharing" target="_blank">View</a>
    </Card.Body>
  </Card>
  </Col>
  </Row>
  </section>

  <section className="personal">
  <h6 className="subsection-title languages-title mt-2">PERSONAL PROJECTS</h6>
  <Row className="portfolio-section">
  <Col sm={6}>
    <Card className="portfolio-card mt-2" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={personajes} />
      <Card.Body>
        <Card.Title>Interactive Book</Card.Title>
        <Card.Text>
          Made for my thesis project
        </Card.Text>
        <a className="portfolio-link" href="https://drive.google.com/file/d/15k1ytJ4azDX1YJ4SoG-N-H0CE9sNme6j/view?usp=sharing" target="_blank">View</a>
      </Card.Body>
      </Card>
  </Col>
  <Col sm={6}>
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
  </Row>
  <Row className="portfolio-section">
  <Col sm={6}>
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
  <Col sm={6}>
    <Card style={{ width: '18rem' }} className="portfolio-card mt-2">
      <Card.Img variant="top" src={resultsDashboard} />
      <Card.Body>
        <Card.Title>Personal Portfolio</Card.Title>
        <Card.Text>
          Interface designed with Adobe XD and currently in development with React (it's still a work in progress).
        </Card.Text>
        <a className="portfolio-link" href="https://xd.adobe.com/view/f46249f5-ba44-4442-6ea2-cc9404279950-8253/" target="_blank">View</a>
      </Card.Body>
    </Card>
  </Col>
  </Row>
  <Row className="portfolio-section">
  <Col sm={6}>
    <Card className="portfolio-card mt-2" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={texturizado} />
      <Card.Body>
        <Card.Title>3D Modeling and texture</Card.Title>
        <Card.Text>
          3D Model and textures created in Autodesk Maya.
        </Card.Text>
        <a className="portfolio-link" href="https://drive.google.com/file/d/1YZ_-2CngIs0fl4syWl69uiAcN5iveEnA/view?usp=sharing" target="_blank">View</a>
      </Card.Body>
    </Card>
  </Col>
  <Col sm={6}>
  </Col>
  </Row>
  </section>
  </Container>
)
