import React, { useState, useEffect } from "react";
import "./App.css";
import SearchBar from "./component/SearchBar";
import PokemonCard from "./component/PokemonCard";

const App = () => {
  const [pokemonData, setPokemonData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon?");
        const data = await response.json();
        setPokemonData(data.results);
      } catch (error) {
        console.error("Error fetching Pokémon data", error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (term) => {
    setSearch(term.toLowerCase());
  };

  const filteredPokemon = pokemonData.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(search)
  );

  return (
    <div className="App">
      <h1>Pokemon List</h1>
      <SearchBar onSearch={handleSearch} />
      <div className="pokemon-cards">
        {filteredPokemon.length > 0 ? (
          filteredPokemon.map((pokemon) => (
            <PokemonCard key={pokemon.name} pokemon={pokemon} />
          ))
        ) : (
          <p>No Pokemon found</p>
        )}
      </div>
    </div>
  );
};

export default App;
