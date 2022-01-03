import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchTeamId } from '../../services/teams';

export default function Team(props) {
  const [team, setTeam] = useState({ players: [] });

  useEffect(() => {
    const fetchData = async() => {
      const data = await fetchTeamId(props.match.params.id);
      setTeam(data[0]);
    };
    fetchData();
  }, []);
  return (
    <div className='teamDetail'>
      <h1>{team.name}</h1>
      <h2>players</h2>
      {team.players.map((player) => (
        <Link to={`/players/${player.id}`} key={player.id}>
          {player.name}
        </Link>
      ))}
    </div>
  );
}