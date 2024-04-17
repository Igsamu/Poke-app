import React, { useState, useEffect } from 'react';
import PokemonCard from '../nodes/Pokeinfo.js';

function PokemonList({ filterType, searchTerm }) {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    fetchPokemonList();
  }, []);

  const fetchPokemonList = async () => {
    try {
      const promises = [];
      for (let i = 1; i <= 151; i++) {
        promises.push(fetch(`https://pokeapi.co/api/v2/pokemon/${i}`).then(response => response.json()));
      }
      const data = await Promise.all(promises);
      setPokemonList(data);
    } catch (error) {
      console.error('Error fetching Pokémon:', error);
    }
  };

  const filteredPokemon = filterType
    ? pokemonList.filter(pokemon => pokemon.types.some(type => type.type.name === filterType))
    : pokemonList;

  const filteredAndSearchedPokemon = searchTerm
    ? filteredPokemon.filter(pokemon => {
        const searchTermLowerCase = searchTerm.toLowerCase();
        return (
          pokemon.name.toLowerCase().includes(searchTermLowerCase) ||
          pokemon.id.toString().includes(searchTermLowerCase)
        );
      })
    : filteredPokemon;

  return (
    <div id="listaPokemon" className='pokemon-todos'>
      {filteredAndSearchedPokemon.map(pokemon => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
}

export default PokemonList;
