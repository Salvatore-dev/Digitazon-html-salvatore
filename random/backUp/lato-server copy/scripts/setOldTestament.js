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

const oldTestament = books.slice(0, 46) // 46 e l'indice del libro di matteo


let result = {};
let setCapter = {};
let NUM = 1;
for (let i = 0; i < oldTestament.length; i++) {
  //setCapter[NUM] = {};
  setCapter[oldTestament[i]] = {};
  setCapter[oldTestament[i]]["metaNumberBook"] = NUM-1;
  let n =1
  for (let j = 0; j < limiteCapitoli[NUM-1]; j++) {
    setCapter[oldTestament[i]][abbreviations[NUM-1]+n]={}
    setCapter[oldTestament[i]][abbreviations[NUM-1]+n]={...setData}
    n++
  }
  n = 1
  result[oldTestament[i]] = { ...setCapter[oldTestament[i]] };
  NUM++;
}

async function setOldTestament() {

    await fs.writeFile("../db/OldTestament-chapter.json", JSON.stringify(result, null, '  '))
}

setOldTestament()