import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Player from '../components/players/Player';
import { fetchPlayers } from '../services/player';

export default function Players() {
  const [players, setPlayers] = useState([]);
    
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPlayers();
      setPlayers(data);
    };
    fetchData();
  }, []);

  return (
    <div className="playerList">
      <h1>players</h1>
      {players.map((player) => (
        <Link key={player.id} to={`/player/${player.id}`}><Player key={player.id} {...player} /></Link>
      ))}
    </div>
  );
}