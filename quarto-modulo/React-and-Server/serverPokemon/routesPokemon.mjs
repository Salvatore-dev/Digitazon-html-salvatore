import pokemon from "./db/pokemon.json" assert {type: "json"}

export const getPokemon = (req, res) => {
    res.send(pokemon)
}

export const getPokemonId = (req, res) => {
    for (let i = 0; i < pokemon.length; i++) {
        if (pokemon[i].id == req.params.id) {
            res.send(pokemon[i])
            res.status(200).end()
            return
        }
    }
    res.send({
        message: "non trovato",
        error: true,
        data: {}
    })

    // res.status(404).end()
}

// export const updatePokemonImg = (req, res) => {
//     const idPokemon = req.params.id
//     //console.log("ciao ciao" + pokemon[idPokemon].image)
//     for (let i = 0; i < pokemon.length; i++) {
//         if (pokemon[i].id == idPokemon) {
//             pokemon[i].image = req.body.image
//             res.status(200).end()
//             return
//         }
//     }
//     res.status(404).end()
// }

export const updatePokemon = (req, res) => {
    const idPokemon = req.params.id
    // console.log("ciao ciao" + pokemon[idPokemon].image)
    for (let i = 0; i < pokemon.length; i++) {
        if (pokemon[i].id == idPokemon) {
            pokemon[i] = { ...pokemon[i], ...req.body }
            res.status(200).end()
            return
        }
    }
    res.status(404).end()
}


export const deletePokemon = (req, res) => {
    let index = -1

    for (let i = 0; i < pokemon.length; i++) {
        if (pokemon[i].id == req.params.id) {
            index = i
        }
    }

    if (index == -1) {
        res.status(404).end()
    } else {
        pokemon.splice(index, 1)
        res.status(200).end()
    }
}

export const addPokemon = (req, res) => {
    let lastID = pokemon.reduce((comulator, p) => p.id > comulator ? p.id : comulator, 0)
    lastID++
    pokemon.push({ ...{ "id": lastID }, ...req.body })

    res.status(200).end()
}
