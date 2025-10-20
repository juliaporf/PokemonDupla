// src/App.js

import { useState, useEffect } from "react";
import PokemonForm from "./components/PokemonForm"; // Ajuste o caminho se necessário
import PokemonItens from "./components/PokemonItens"; // Ajuste o caminho se necessário
import "./App.css";

function App() {
  
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const storedPokemons = JSON.parse(localStorage.getItem('pokemons')) || [];
    setPokemons(storedPokemons);
  }, []); 
  const handlePokemonAdicionado = () => {
    const updatedPokemons = JSON.parse(localStorage.getItem('pokemons')) || [];
    setPokemons(updatedPokemons);
  };

  return (
    <div className="App">
      <PokemonForm onAddPokemon={handlePokemonAdicionado} />
      
      <br />
      <PokemonItens pokemons={pokemons} />
    </div>
  );
}

export default App;