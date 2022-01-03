import { useEffect, useState } from 'react';

import { fetchPlayerId } from '../../services/player';

export default function Player(props) {
  const [player, setPlayer] = useState({ teams: [] });

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPlayerId(props.match.params.id);
      setPlayer(data);
    };
    fetchData();
  }, [props.match.params.id]);

  return (
    <div className="playerDetail">
      <h1>{player.name}</h1>
      <h2>team</h2>
      
    </div>
  );
}