import dati from "../db/metadata/index-version-Cei2008.json" assert { type: "json" };

const libri = dati.indexes.CEI2008.biblebooks;

const abbreviations = dati.indexes.CEI2008.abbreviations;

const limiteCapitoli = dati.indexes.CEI2008.chapter_limit;

const limiteVersetto = dati.indexes.CEI2008.verse_limit;

const numeroLibri = dati.indexes.CEI2008.book_num;

//console.log(limiteCapitoli.length, libri.length);

//console.log(libri.indexOf('Matteo')); // e sensibile alle maiuscole

// se il client mi chiede uno dei due testamenti restituisco l' elenco dei libri

const oldTestament = libri.slice(0, 46); // 46 e l'indice del libro di matteo
const newTestament = libri.slice(46);

//console.log(oldTestament);
const setData = {
  "empty": true,
  "data": [],
};

let result = {};
let setCapter = {};
let NUM = 1;
for (let i = 0; i < oldTestament.length; i++) {
  setCapter[NUM] = {};
  setCapter[NUM][oldTestament[i]] = {};
  let n =1
  for (let j = 0; j < limiteCapitoli[NUM-1]; j++) {
    setCapter[NUM][oldTestament[i]][abbreviations[NUM-1]+n]={}
    setCapter[NUM][oldTestament[i]][abbreviations[NUM-1]+n]={...setData}
    n++
  }
  n = 1
  result[NUM] = { ...setCapter[NUM] };
  NUM++;
}

console.log(oldTestament.length);
console.log(result);

libri.indexOf("matteo");

// se il client mi chiede un libro voglio restituire l'elenco dei capitoli

function findChapters(book) {
  let indexBook = libri.indexOf(book);
  //console.log(indexBook);
  let result = [];
  let NumChapter = limiteCapitoli[indexBook];
  //console.log(NumChapter);
  if (NumChapter > 0) {
    for (let i = 1; i <= NumChapter; i++) {
      result.push(`Capitolo ${i}`);
    }
    return result;
  } else {
    return "libro inesistente";
  }
}
const Chapters = findChapters("Ester"); // ho cambiato la versione dellendpoint in v3 controllare... lerrore su ester si conferma
//console.log(Chapters);

//console.log(Chapters);
// se il client mi chiede un capitolo gli restituico il testo // fase intermedia: gli restituisco le abbreviazioni dei versetti con limite capitolo
// https://query.bibleget.io/v3/?query=Mt1,1-5&version=NABRE // esempio query
//console.log(limiteVersetto[0][0]); //accedo al limite dei versetti del primo capitolo del libro primo
