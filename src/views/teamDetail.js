import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Player from '../components/players/Player';
import { fetchTeamId } from '../services/teams';

export default function TeamDetail(props) {
  const [team, setTeam] = useState({ players: [] });
  
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchTeamId(props.match.params.id);
      setTeam(data[0]);
    };
    fetchData();
  }, [props.match.params.id]);
  return (
    <div className='teamDetail'>
      <h1>{team.name}</h1>
      <p>{team.city}, {team.state}</p>
      <h2>players</h2>
      {team.players.map((player) => (
        <Link to={`/player/${player.id}`} key={player.id}>
          <Player key={player.id} {...player} />
        </Link>
      ))}
    </div>
  );
}