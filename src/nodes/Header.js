import logo from '../media/logo.png';
import { useState } from 'react';

function Header({ setFilterType, setSearchTerm }) {
  const [searchInput, setSearchInput] = useState('');

  const handleFilter = (type) => {
    setFilterType(type);
  };

  const handleInputChange = (event) => {
    const searchTerm = event.target.value;
    setSearchInput(searchTerm);
    setSearchTerm(searchTerm);
  };

  return (
    <header>
      <nav className="nav">
        <img src={logo} alt="Logo Pokédex" />
        <div className="search-container">
          <input
            type="text"
            placeholder="Search Pokémon..."
            value={searchInput}
            onChange={handleInputChange}
          />
        </div>
        <ul className="nav-list">
          <li className="nav-item">
            <button 
            className="btn btn-header" 
            id="ver-todos"
            onClick={() => handleFilter(null)}
            >Ver todos</button>
          </li>
          <li className="nav-item">
            <button 
            className="btn btn-header normal" 
            id="normal"
            onClick={() => handleFilter("normal")}
            >Normal</button>
          </li>
          <li className="nav-item">
            <button 
            className="btn btn-header fire" 
            id="fire"
            onClick={() => handleFilter("fire")}
            >Fire</button>
          </li>
          <li className="nav-item">
            <button 
            className="btn btn-header water" 
            id="water"
            onClick={() => handleFilter("water")}
            >Water</button>
          </li>
          <li className="nav-item">
            <button 
            className="btn btn-header grass" 
            id="grass"
            onClick={() => handleFilter("grass")}
            >Grass</button>
          </li>
          <li className="nav-item">
            <button 
            className="btn btn-header electric" 
            id="electric"
            onClick={() => handleFilter("electric")}
            >Electric</button>
          </li>
          <li className="nav-item">
            <button 
            className="btn btn-header ice" 
            id="ice"
            onClick={() => handleFilter("ice")}
            >Ice</button>
          </li>
          <li className="nav-item">
            <button 
            className="btn btn-header fighting" 
            id="fighting"
            onClick={() => handleFilter("fighting")}
            >Fighting</button>
          </li>
          <li className="nav-item">
            <button 
            className="btn btn-header poison" 
            id="poison"
            onClick={() => handleFilter("poison")}
            >Poison</button>
          </li>
          <li className="nav-item">
            <button 
            className="btn btn-header ground" 
            id="ground"
            onClick={() => handleFilter("ground")}
            >Ground</button>
          </li>
          <li className="nav-item">
            <button 
            className="btn btn-header flying" 
            id="flying"
            onClick={() => handleFilter("flying")}
            >Flying</button>
          </li>
          <li className="nav-item">
            <button 
            className="btn btn-header psychic" 
            id="psychic"
            onClick={() => handleFilter("psychic")}
            >Psychic</button>
          </li>
          <li className="nav-item">
            <button 
            className="btn btn-header bug" 
            id="bug"
            onClick={() => handleFilter("bug")}
            >Bug</button>
          </li>
          <li className="nav-item">
            <button 
            className="btn btn-header rock" 
            id="rock"
            onClick={() => handleFilter("rock")}
            >Rock</button>
          </li>
          <li className="nav-item">
            <button 
            className="btn btn-header ghost" 
            id="ghost"
            onClick={() => handleFilter("ghost")}
            >Ghost</button>
          </li>
          <li className="nav-item">
            <button 
            className="btn btn-header dark" 
            id="dark"
            onClick={() => handleFilter("dark")}
            >Dark</button>
          </li>
          <li className="nav-item">
            <button 
            className="btn btn-header dragon" 
            id="dragon"
            onClick={() => handleFilter("dragon")}
            >Dragon</button>
          </li>
          <li className="nav-item">
            <button 
            className="btn btn-header steel" 
            id="steel"
            onClick={() => handleFilter("steel")}
            >Steel</button>
          </li>
          <li className="nav-item">
            <button 
            className="btn btn-header fairy" 
            id="fairy"
            onClick={() => handleFilter("fairy")}
            >Fairy</button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
