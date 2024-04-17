import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Popup({ position, pokemonName }) {
  const [pokemonStats, setPokemonStats] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        const stats = response.data.stats.reduce((acc, stat) => {
          acc[stat.stat.name] = stat.base_stat;
          return acc;
        }, {});

        setPokemonStats(stats);
      } catch (error) {
        console.error(`Error fetching data for ${pokemonName}:`, error);
      }
    }

    if (pokemonName) {
      fetchData();
    }
  }, [pokemonName]);

  return (
    <div className="popup" style={{ left: position.x, top: position.y }}>
      <p>{pokemonName}</p>
      {pokemonStats ? (
        <ul>
          <li>HP: {pokemonStats.hp}</li>
          <li>Attack: {pokemonStats.attack}</li>
          <li>Defense: {pokemonStats.defense}</li>
          <li>Special attack: {pokemonStats['special-attack']}</li>
          <li>Special defense: {pokemonStats['special-defense']}</li>
          <li>speed: {pokemonStats.speed}</li>
        </ul>
      ) : (
        <p>Charging...</p>
      )}
    </div>
  );
}

export default Popup;
