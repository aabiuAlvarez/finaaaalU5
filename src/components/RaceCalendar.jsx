import React from 'react';
import Card from '../shared/Card/Card';
import './RaceCalendar.css';

const RaceCalendar = () => {
  const races = [
    { round: 1, name: "Bahrain GP", date: "2025-03-05", country: "Bahrain", completed: true },
    { round: 2, name: "Saudi Arabian GP", date: "2025-03-19", country: "Saudi Arabia", completed: true },
    { round: 3, name: "Autralia GP", date: "2025-04-02", country: "Australia", completed: true },
    { round: 4, name: "Azerbaijan GP", date: "2025-04-30", country: "Azerbaijan", completed: true },
    { round: 5, name: "Miami GP", date: "2025-05-07", country: "USA", completed: true },
    { round: 6, name: "Monaco GP", date: "2025-05-28", country: "Monaco", completed: false },
    { round: 7, name: "Spanish GP", date: "2025-06-04", country: "Spain", completed: false },
    // Más carreras...
  ];

  return (
    <Card title="Calendario de Carrera" className="race-calendar">
      <table>
        <thead>
          <tr>
            <th>Round</th>
            <th>Grand Prix</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {races.map((race) => (
            <tr key={race.round} className={race.completed ? 'completed' : 'upcoming'}>
              <td>{race.round}</td>
              <td>
                <img 
                  src={`/assets/images/flags/${race.country.toLowerCase().replace(/\s+/g, '-')}.png`} 
                  alt={race.country} 
                />
                {race.name}
              </td>
              <td>{new Date(race.date).toLocaleDateString()}</td>
              <td>
                <span className={`status-badge ${race.completed ? 'completed' : 'upcoming'}`}>
                  {race.completed ? 'Completed' : 'Upcoming'}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
};

export default RaceCalendar;