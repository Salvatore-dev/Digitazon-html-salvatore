import fs from 'node:fs/promises'
import axios from 'axios'

import metadata from "../db/metadata/index-version-Cei2008.json" assert { type: 'json' }

const setData = {
    empty: true,
    data:[]
}
const books = metadata.indexes.CEI2008.biblebooks
const abbreviations = metadata.indexes.CEI2008.abbreviations;
const limiteCapitoli = metadata.indexes.CEI2008.chapter_limit;
const newTestament = books.slice(46) // 46 e l'indice del libro di matteo


let result = {};
let setCapter = {};
let NUM = 47;
for (let i = 0; i < newTestament.length; i++) {
  //setCapter[NUM] = {};
  setCapter[newTestament[i]] = {};
  setCapter[newTestament[i]]["metadatanumerBook"] = NUM-1;
  let n =1
  for (let j = 0; j < limiteCapitoli[NUM-1]; j++) {
    setCapter[newTestament[i]][abbreviations[NUM-1]+n]={}
    setCapter[newTestament[i]][abbreviations[NUM-1]+n]={...setData}
    n++
  }
  n = 1
  result[newTestament[i]] = { ...setCapter[newTestament[i]] };
  NUM++;
}

async function setNewTestament() {

    await fs.writeFile("../db/NewTestament-chapter.json", JSON.stringify(result, null, '  '))
}

setNewTestament()