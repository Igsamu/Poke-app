import React, { useState } from 'react';
import './App.css';
import Header from './nodes/Header.js';
import PokemonList from './logic/InfoPoke.js';
import { useEffect } from 'react';

function App() {
  const [filterType, setFilterType] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    document.title = "Poke App";
  }, []);

  return (
    <>
      <Header setFilterType={setFilterType} setSearchTerm={setSearchTerm} />
      
      <PokemonList filterType={filterType} searchTerm={searchTerm} />
    </>
  );
}

export default App;