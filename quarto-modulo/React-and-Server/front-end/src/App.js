import { useState, useEffect } from "react"
import axios from "axios"
import './App.css';




function PokemonList() {

  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    async function getPokemons() {
      const res = await axios.get("http://localhost:8000/pokemon")
      setPokemons(res.data)
    }
    getPokemons()
  }, [])

  console.log(pokemons);
  return (
    <>
      <h1>Pokedex</h1>
      <ul>
        {pokemons.map(pokemon => (
          <li className="card">
            <h2>{pokemon.name}</h2>
            <img src={pokemon.image} alt="pokemon" width="180" height="180" style={{ objectFit: "contain", border: "1px solid", backgroundColor: "white", borderRadius: "10px" }}></img>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-around" }}>
              <h4>Evolution: </h4> <p>{pokemon.evolution != null ? pokemon.evolution : "☆"}</p>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}


export default function App() {
  return (
    <div className="App">
      <h1>Proviamo a collegare il front-end con un server fatto da noi</h1>
      <PokemonList />
    </div>
  );
}


