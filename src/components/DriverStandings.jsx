import React from 'react';
import Card from '../shared/Card/Card';
import './DriverStandings.css';

const DriverStandings = ({ limit }) => {
  // Datos de ejemplo
  const standings = [
    { position: 1, driver: "Max Verstappen", team: "Red Bull", points: 170 },
    { position: 2, driver: "Sergio Perez", team: "Red Bull", points: 117 },
    { position: 3, driver: "Fernando Alonso", team: "Aston Martin", points: 99 },
    { position: 4, driver: "Lewis Hamilton", team: "Mercedes", points: 87 },
    { position: 5, driver: "Carlos Sainz", team: "Ferrari", points: 68 },
    { position: 6, driver: "George Russell", team: "Mercedes", points: 65 },
    { position: 7, driver: "Charles Leclerc", team: "Ferrari", points: 54 },
    { position: 8, driver: "Lance Stroll", team: "Aston Martin", points: 35 },
  ].slice(0, limit);

  return (
    <Card title="Driver Standings" className="driver-standings">
      <table>
        <thead>
          <tr>
            <th>Pos</th>
            <th>Driver</th>
            <th>Team</th>
            <th>Pts</th>
          </tr>
        </thead>
        <tbody>
          {standings.map((driver) => (
            <tr key={driver.position}>
              <td>{driver.position}</td>
              <td>
                <span className={`driver-number driver-${driver.team.toLowerCase().replace(/\s+/g, '-')}`}>
                  {driver.position}
                </span>
                {driver.driver}
              </td>
              <td>{driver.team}</td>
              <td>{driver.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {limit && <Link to="/drivers" className="see-more">View full standings</Link>}
    </Card>
  );
};

export default DriverStandings;