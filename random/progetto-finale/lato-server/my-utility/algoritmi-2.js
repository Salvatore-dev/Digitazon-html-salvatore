import dati from "../db/metadata/index-version-Cei2008.json" assert { type: "json" };

const books = dati.indexes.CEI2008.biblebooks;

const abbreviations = dati.indexes.CEI2008.abbreviations;

const chapterLimit = dati.indexes.CEI2008.chapter_limit;

const limiteVersetto = dati.indexes.CEI2008.verse_limit;

const numeroLibri = dati.indexes.CEI2008.book_num;

const FILE_CHAPTER = "section-9"

// section-1 da 0 a 4
// section-2 da 5 a 12
// section-3 da 13 a 21
// section-4 da 22 a 24
// section-5 da 25 a 29 
// section-6 da 30 a 45 (fine antico testamento)
// section-7 da 46 a 54
// section-8 da 55 a 62
// section-9 da 63 alla fine

//console.log(books);

function setFile(nameBook) {
    const index = books.indexOf(nameBook)
    if (index <=4) {
        return "section-1"
    }
    if (index >4 && index <=12) {
        return "section-2"
    }
    if (index >12 && index <=21) {
        return "section-3"
    }
    if (index >21 && index <=24) {
        return "section-4"
    }
    if (index >24 && index <=29) {
        return "section-5"
    }
    if (index >29 && index <=45) {
        return "section-6"
    }
    if (index >45 && index <=54) {
        return "section-7"
    }
    if (index >54 && index <=62) {
        return "section-8"
    }
    if (index >62 && index <=72) {
        return "section-9"
    }
}

const result = setFile(books[50])

console.log(result);