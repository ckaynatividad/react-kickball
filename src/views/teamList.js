import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Team from '../components/teams/Team';
import { fetchTeams } from '../services/teams';

export default function Teams() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchTeams();
      setTeams(data);
    };
    fetchData();
  }, []);

  return (
    <div className="teamsList">
      <h1>teams</h1>
      {teams.map((team) => (
        <Link to={`/team/${team.id}`} key={team.id}><Team key={team.id} {...team} /></Link>
      ))}
    </div>
  );
}