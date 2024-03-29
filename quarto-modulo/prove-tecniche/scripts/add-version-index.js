import fs from 'node:fs/promises'
import axios from 'axios'
const version = "CEI2008" // questa variabile puo servire come argomento della chiamata per cambiare versione


// nota nei meta dati c' e un errore nel limite capitoli di ester dovrebbero essere 10 invece dal server restituisce 20 
export const getVersionsIndex = async (req, res) => {
    const result = await axios.get(`https://query.bibleget.io/v3/metadata.php?query=versionindex&versions=${version}`)
    const udData = result.data

    await fs.writeFile("../db/metadata/index-version-Cei2008.json", JSON.stringify(udData, null, '  '))
}

getVersionsIndex()