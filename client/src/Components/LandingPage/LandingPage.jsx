import React from 'react';
import Header from '../LandingPage/Header/Header';
import MainContent from '../LandingPage/MainContent/MainContent';
import CardSection from './Cards/CardSection';
import Footer from '../LandingPage/Footer/Footer';

const LandingPage = ({ isLoggedIn, handleLogout }) => {
  return (
    <div>
      <Header isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
      {/* Pass isLoggedIn to MainContent */}
      <MainContent isLoggedIn={isLoggedIn} />
      <CardSection />
      <Footer />
    </div>
  );
};

export default LandingPage;
