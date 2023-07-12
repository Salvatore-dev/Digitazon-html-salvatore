import fs from 'node:fs/promises'
import axios from 'axios'

import metadata from "../db/metadata/index-version-Cei2008.json" assert { type: 'json' }

const setData = {
    "empty": true,
    "data":[]
}
const books = metadata.indexes.CEI2008.biblebooks
const abbreviations = metadata.indexes.CEI2008.abbreviations;
const limiteCapitoli = metadata.indexes.CEI2008.chapter_limit;
const FILE_CHAPTER = "section-6" // selezionare il file section corrispondente

const BOOKS = books.slice(30, 46) // per settare i capitoli vedi sotto, ricorda che in slice il secondo parametro e escluso

// section-1 da 0 a 4
// section-2 da 5 a 12
// section-3 da 13 a 21
// section-4 da 22 a 24
// section-5 da 25 a 29 
// section-6 da 30 a 45 (fine antico testamento)
// section-7 da 46 a 54
// section-8 da 55 a 62
// section-9 da 63 alla fine


let result = {};
let setCapter = {};
let NUM = 31; // numero successivo al valore dello slice alla prima posizione (riprende l'indice array libri in metadata)
for (let i = 0; i < BOOKS.length; i++) {
  //setCapter[NUM] = {};
  setCapter[BOOKS[i]] = {};
  setCapter[BOOKS[i]]["metaNumberBook"] = NUM-1;
  let n =1
  for (let j = 0; j < limiteCapitoli[NUM-1]; j++) {
    setCapter[BOOKS[i]][abbreviations[NUM-1]+n]={}
    setCapter[BOOKS[i]][abbreviations[NUM-1]+n]={...setData}
    n++
  }
  n = 1
  result[BOOKS[i]] = { ...setCapter[BOOKS[i]] };
  NUM++;
}

async function setChapter () {

await fs.writeFile( `../db/chapters/${FILE_CHAPTER}.json`, JSON.stringify(result, null, '  '))
}

setChapter()