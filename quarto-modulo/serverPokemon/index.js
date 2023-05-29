import express from 'express'
import {
    addPokemon,
    deletePokemon,
    getPokemon,
    getPokemonId,
    // updatePokemonImg
    updatePokemon
} from "./routesPokemon.mjs"
import { pokemonByType } from "./routesTypePokemon.mjs"
const app = express()
import bodyParser from 'body-parser'
app.use(bodyParser.json())
const port = 3000
const pathPokemonID = "/pokemon/:id"

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get("/pokemon", getPokemon)
app.get(pathPokemonID, getPokemonId)
// app.put("/pokemon/:id", updatePokemonImg)
app.put(pathPokemonID, updatePokemon)
app.delete(pathPokemonID, deletePokemon)
app.post("/pokemon", addPokemon)
app.get("/pokemon/types/:type", pokemonByType)


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

