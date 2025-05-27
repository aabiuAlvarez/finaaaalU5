import React from 'react';
import DriverStandings from '../../components/DriverStandings/DriverStandings';
import './Drivers.css';

const Drivers = () => {
  return (
    <div className="drivers-page">
      <h1>2023 Drivers</h1>
      <DriverStandings limit={20} />
      
      <section className="all-drivers">
        <h2>All Drivers</h2>
        <div className="drivers-grid">
          {/* Aquí iría un componente DriverCard para cada piloto */}
        </div>
      </section>
    </div>
  );
};

export default Drivers;