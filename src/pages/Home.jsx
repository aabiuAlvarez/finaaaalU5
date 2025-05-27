import React from 'react';
import NextRace from '../components/NextRace';
import LastRace from '../components/LastRace';
import DriverStandings from '../components/DriverStandings';
import TeamStandings from '../components/TeamStandings';
import NewsPreview from '../components/NewsPreview';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <section className="hero">
        <h1>Formula 1 2023 Season</h1>
      </section>
      
      <div className="home-grid">
        <div className="main-content">
          <NextRace />
          <LastRace />
        </div>
        
        <div className="sidebar">
          <DriverStandings limit={5} />
          <TeamStandings limit={5} />
          <NewsPreview limit={3} />
        </div>
      </div>
    </div>
  );
};

export default Home;