"use client";

import { useEffect, useState } from "react";

export default function Pokemon() {
  const [pokemon, setPokemon] = useState(null);
  const [choosePokemon, setChoosePokemon] = useState("ditto");

  async function fetchPokemon() {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${choosePokemon}`
    );
    if (!response.ok) {
      return console.log("no info");
    }
    const info = await response.json();
    setPokemon(info);
    //console.log(info);
  }

  useEffect(() => {
    fetchPokemon();
  }, [choosePokemon]);

  function handleSubmit(e) {
    e.preventDefault();
    let pokeName = e.target[0].value.toLowerCase();
    setChoosePokemon(pokeName);
  }

  return (
    <div>
      <h4>Pokemon</h4>
      <p>
        Here's a pokemon api:{" "}
        <a
          href={`https://pokeapi.co/api/v2/pokemon/${choosePokemon}`}
        >{`https://pokeapi.co/api/v2/pokemon/${choosePokemon}`}</a>
      </p>
      <p>
        You have to replace the text "ditto" with the name of the pokemon you
        want to search for.
      </p>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder={choosePokemon}></input>
        <button>Search</button>
      </form>
      <h2>{choosePokemon}</h2>
      <img
        src={pokemon ? `${pokemon.sprites.front_default}` : ""}
        alt={choosePokemon}
      ></img>
      <hr />
    </div>
  );
}
