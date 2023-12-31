import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Footer from './pages/Footer'
import '../components/assets/portcss.css';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }  
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    return <Contact />;
    
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <div className="navigation-tabs"> {/* Apply the CSS class to the navigation tabs */}
        <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      </div>
      {renderPage()}
      <Footer/>
    </div>
  );
  
}
