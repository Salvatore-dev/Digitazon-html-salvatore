import fs from 'node:fs/promises'
import axios from "axios"
import books from "../db/metadata/biblebooks.json" assert { type: 'json' }
import versions from "../db/metadata/bibleversions.json" assert { type: 'json' }
import indexCei2008 from "../db/metadata/index-version-Cei2008.json" assert { type: 'json' }

const biblebooks = "https://query.bibleget.io/metadata.php?query=biblebooks"
const bibleversions = "https://query.bibleget.io/metadata.php?query=bibleversions"
const versionIndex = "https://query.bibleget.io/metadata.php?query=versionindex&versions=CEI2008" // il secondo parametro della quesry vuole la versione, vedi quelle supportate in versions. // puo essere inpostato come variabile per differenziare le versioni richieste


export const getBooks =  (req, res) => {
    res
        .send({
            message: 'accedi ai libri con .data.result; accedi alle lingue con .data.languages' ,
            data: books,
            origins: biblebooks
        })
        .status(200)
}

export const getVersions =  (req, res) => {
    res
        .send({
            message: 'accedi alle versioni valide con .data."validversions; accedi si nome completi delle versioni con .data.validversions_fullname' ,
            data: versions,
            origins: bibleversions
        })
        .status(200)
}
export const getIndexVersion =  (req, res) => {
    res
        .send({
            message: 'controlla struttura dati' ,
            data: indexCei2008,
            origins: versionIndex
        })
        .status(200)
}