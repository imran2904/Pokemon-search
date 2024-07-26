import React, { useState, useEffect } from "react";

const PokemonCard = ({ pokemon }) => {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
        const data = await response.json();
        setImageUrl(data.sprites.front_default);
      } catch (error) {
        console.error("Error fetching Pokémon details", error);
      }
    };

    fetchPokemonDetails();
  }, [pokemon.name]);

  return (
    <div className="pokemon-card">
      <img src={imageUrl} alt={pokemon.name} />
      <h3>{pokemon.name}</h3>
    </div>
  );
};

export default PokemonCard;
