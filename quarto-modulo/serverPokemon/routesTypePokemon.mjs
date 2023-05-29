import pokemon from "./db/pokemon.json"  assert { type: 'json' }
import TypePokemon from "./db/typePokemon.json"  assert { type: 'json' }

export const pokemonByType = (req, res) => {

    let typeID
    for (let i = 0; i < TypePokemon.length; i++) {
        if (TypePokemon[i].type.toLowerCase() == req.params.type) {
            typeID = TypePokemon[i].id
        }
    }
    let filtered = pokemon.filter((p) => {
        if (p.typePokemon == typeID) {
            return p
        }
    })

    res.send(filtered)

    if (!typeID) { res.status(404).end() }
}