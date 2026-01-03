import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import LandingPage from './LandingPage';
import OurFounder from './components/OurFounder';
import BrothersOfStGabriel from './components/BrothersOfStGabriel';
import HeritageHistory from './components/HeritageHistory';
import MontfortianAims from './components/MontfortianAims';
import VisionMission from './components/VisionMission';
import Principal from './components/Principal';
import VicePrincipal from './components/VicePrincipal';
import MiddleSchoolIncharge from './components/MiddleSchoolIncharge';
import './index.css';

function App() {
  return (
    <Router>
      <Helmet>
        <title>Montfort School Nagpur - Best CBSE School in Nagpur | Excellence in Education Since 1996</title>
        <meta name="description" content="Montfort School Nagpur - Premier CBSE school offering excellence in education since 1996. State-of-the-art infrastructure, experienced faculty, holistic development, and 100% success rate. Admissions open for 2024-25." />
        <link rel="canonical" href="https://montfortschoolnagpur.com/" />
      </Helmet>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/our-founder" element={<OurFounder />} />
          <Route path="/brothers-of-st-gabriel" element={<BrothersOfStGabriel />} />
          <Route path="/heritage-history" element={<HeritageHistory />} />
          <Route path="/montfortian-aims" element={<MontfortianAims />} />
          <Route path="/vision-mission" element={<VisionMission />} />
          <Route path="/principal" element={<Principal />} />
          <Route path="/vice-principal" element={<VicePrincipal />} />
          <Route path="/middle-school-incharge" element={<MiddleSchoolIncharge />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
