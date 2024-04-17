import { useState, useEffect } from "react";
import Popup from './Popup.js'

function PokemonCard({ pokemon }) {
    const heightInMeters = (pokemon.height / 10).toFixed(2);
    const weightInKg = (pokemon.weight / 10).toFixed(2);

    const [showPopup, setShowPopup] = useState(false);
    const [popupPosition, setPopupPosition] = useState({ x: 0, y: 0 });
    const [hoveredPokemonName, setHoveredPokemonName] = useState('');

    useEffect(() => {
        const handleMouseMove = (event) => {
            setPopupPosition({ x: event.clientX, y: event.clientY });
        };

        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    const handleMouseEnter = () => {
        setShowPopup(true);
    };

    const handleMouseLeave = () => {
        setShowPopup(false);
    };

    const handlePokemonMouseEnter = (pokemonName) => {
        setHoveredPokemonName(pokemonName);
    };



    return (
        <div className="pokemon"
             onMouseEnter={handleMouseEnter}
             onMouseLeave={handleMouseLeave}>
          <p className="pokemon-id-back">#{pokemon.id}</p>
          <div className="pokemon-imagen">
            <img src={pokemon.sprites.other["official-artwork"].front_default} alt={pokemon.name} />
          </div>
          <div className="pokemon-info">
            <div className="nombre-contenedor">
              <p className="pokemon-id">#{pokemon.id}</p>
              <h2 className="pokemon-nombre"
                  onMouseEnter={() => handlePokemonMouseEnter(pokemon.name)}>{pokemon.name}</h2>
            </div>
            <div className="pokemon-tipos">
              {pokemon.types.map((type, index) => (
                <p key={index} className={`tipo ${type.type.name}`}>
                  {type.type.name}
                </p>
              ))}
            </div>
            <div className="pokemon-stats">
              <p className="stats">{heightInMeters}m</p>
              <p className="stats">{weightInKg}kg</p>
            </div>
          </div>
          {showPopup && <Popup position={popupPosition} pokemonName={hoveredPokemonName} />}
        </div>
      );
    }


export default PokemonCard;