import React from 'react';
import MainContainer from './components/PortfolioSections/MainContainer';
import Footer from './components/PortfolioSections/Footer';
import { BrowserRouter } from 'react-router-dom';
import './styles/styles.scss';

function App() {
  return (
    <>
      <div className='App'>
        <BrowserRouter>
          <MainContainer />
        </BrowserRouter>
      </div>
      <div className='Footer'>
        <Footer />
      </div>
    </>
  );
}

export default App;
