import React from 'react';
import logo from './logo.svg';
import './assets/styles/global.css';
import { NavigationBar } from './components/NavigationBar';
import { MainInfo } from './components/MainInfo';
import { Layout } from './components/Layout';
import { Footer } from './components/Footer';
import Container from 'react-bootstrap/Container';

function App() {
  return (
    <React.Fragment>
      <NavigationBar>
      </NavigationBar>
      <MainInfo>
      </MainInfo>
      <Layout>
      </Layout>
      <Footer>
      </Footer>
    </React.Fragment>
  );
}

export default App;
