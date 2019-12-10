import React from 'react';
import logo from './logo.svg';
import './assets/styles/global.css';
import { NavigationBar } from './components/NavigationBar';
import { Layout } from './components/Layout';
import { Footer } from './components/Footer';

function App() {
  return (
    <React.Fragment>
      <NavigationBar>
      </NavigationBar>
      <Layout>
      </Layout>
      <Footer>
      </Footer>
    </React.Fragment>
  );
}

export default App;
