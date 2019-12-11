import React from 'react';
import { About } from './About';
import { Skills } from './Skills';
import Container from 'react-bootstrap/Container';

export const Layout = (props) => (
  <Container>
    <section id="about" className="target">
    <About>
    </About>
    </section>
    <section id="skills" className="target">
    <Skills>
    </Skills>
    </section>
  </Container>
)
