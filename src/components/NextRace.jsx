import React from 'react';
import Card from '../shared/Card';
import './NextRace.css';

const NextRace = () => {
  // Datos de ejemplo - en una app real estos vendrían de una API
  const nextRace = {
    name: "Gran Premio de España",
    circuit: "Circuit de Barcelona-Catalunya",
    date: "2023-06-04",
    time: "15:00",
    country: "Spain",
    round: 8
  };

  return (
    <Card title="Next Race" className="next-race">
      <div className="race-info">
        <h3>{nextRace.name}</h3>
        <p><strong>Circuit:</strong> {nextRace.circuit}</p>
        <p><strong>Date:</strong> {new Date(nextRace.date).toLocaleDateString()}</p>
        <p><strong>Time:</strong> {nextRace.time} (Local)</p>
        <p><strong>Round:</strong> {nextRace.round}</p>
      </div>
      <div className="circuit-map">
        {/* Aquí iría un mapa o imagen del circuito */}
        <img 
          src={`/assets/images/circuits/${nextRace.country.toLowerCase().replace(/\s+/g, '-')}.jpg`} 
          alt={`${nextRace.circuit} map`} 
        />
      </div>
    </Card>
  );
};

export default NextRace;