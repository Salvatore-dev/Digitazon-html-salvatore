import axios from "axios"

let findTreasure = async () => {
    const response = await axios.get("https://6ae9-2-44-90-143.ngrok-free.app/keys/a0b1c2d3e4f5");

    //dobbiamo controllare se treasure è nel primo elemento

    //dobbiamo cercare tra tutte le chiavi che ci vengono restituite da getAllKeys,
    //quella che corrisponde all'oggetto con chiave "treasure"

    //dal momento che la funzione mi restituisce un array di stringhe (chiavi), allora 
    //ci devo ciclare all'interno 

    //Una volta che ho la chiave, devo andarla a sostituire nell'URL fino ad arrivare al
    //punto che avrò un oggetto con chiave "Treasure" e valore booleno true.

    // getAllKeys mi restituisce un array di chiavi, stringa
    // ciclo su tutte le chiavi
    //      ottengo key
    //      faccio una chiamata all'endpoint usando key
    //      dentro il risultato c'e' treasure?
    //          se si ho finito

    let keys = await getAllKeys()

    for (let i = 0; i < keys.length; i++) {
        let key = keys[i]

        const res = await axios.get(`https://6ae9-2-44-90-143.ngrok-free.app/keys/${key}`)
        // console.table(res.data)
        if (res.data.treasure) {
            console.log("FOUND!", res.data);
            return "treasure founded!"
        }
    }
}

// dobbiamo visitare tutta la struttura in modo da ottenere ogni singola chiave
// dovremo quindi andare in profondita' dentro tutti i children fintanto che ce ne sono

// immagino di avere un array KEYS_TO_FIND in cui tengo tutte le chiavi da cercare
// immagino di avere un array KEYS_RESULT in cui tengo tutte le chiavi trovate
// parto dalla chiave KEY dove arrivo dopo il redirect

// faccio una chiamata async a KEY
// prendo dai children le chiavi
// le metto dentro KEYS_TO_FIND
// le metto dentro KEYS_RESULT

// fintanto che KEYS_TO_FIND non e' vuoto, cioe' fintanto che ho lavoro da fare, nodi da visitare
// prendo una KEY da KEYS_TO_FIND
// faccio una chiamata async a KEY
// prendo dai children le chiavi
// le metto dentro KEYS_TO_FIND
// le metto dentro KEYS_RESULT

// finito il loop ritorno KEYS_RESULT

function extractKeys(data) {
    return data.children.map(child => child.key)
}

async function getAllKeys() {
    let keysToFind = []
    let keysResult = []
    let key = 'a0b1c2d3e4f5'
    const res = await axios.get(`https://6ae9-2-44-90-143.ngrok-free.app/keys/${key}`)
    keysToFind = extractKeys(res.data)
    keysResult = extractKeys(res.data)

    while (keysToFind.length > 0) {
        let key = keysToFind.shift()
        const res = await axios.get(`https://6ae9-2-44-90-143.ngrok-free.app/keys/${key}`)
        const newKeys = extractKeys(res.data)
        keysToFind = [ // creo un nuovo array
            ...keysToFind, // che contiene tutti gli elementi dello stesso array
            ...newKeys // piu' gli elementi dell'array newKeys
        ]
        keysResult = [...keysResult, ...newKeys]
    }

    return keysResult
}

findTreasure()

// approccio ricorsivo
// rappresenta la definizione di ricerca del tesoro
async function findTreasureRecursive(key) {
    // il treasure e' nell'oggetto?
    const res = await axios.get(`https://6ae9-2-44-90-143.ngrok-free.app/keys/${key}`)
    if (res.data.treasure) {
        // e si ho finito
        console.log("FOUND!", res.data)
        return
    }

    // se no la cerco tra i suoi figli
    for (let i = 0; i < res.data.children.length; i++) {
        await findTreasureRecursive(res.data.children[i].key)
    }
}

findTreasureRecursive('a0b1c2d3e4f5')