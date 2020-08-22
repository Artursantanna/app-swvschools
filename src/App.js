import React from 'react';
import './App.css';
import HomeGrid from './components/Home/Card/HomeGrid';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Container } from 'react-bootstrap';

const App = () => {

  return (
    <Container fluid>
      <Header/>
      <HomeGrid />
      <Footer/>
    </Container>
  );

}

export default App;
