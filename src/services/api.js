const API_BASE = 'https://ergast.com/api/f1';

export const fetchDriverStandings = async (season = 'current') => {
  const response = await fetch(`${API_BASE}/${season}/driverStandings.json`);
  const data = await response.json();
  return data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
};

export const fetchRaceCalendar = async (season = 'current') => {
  const response = await fetch(`${API_BASE}/${season}.json`);
  const data = await response.json();
  return data.MRData.RaceTable.Races;
};

// Más funciones de API según necesidad