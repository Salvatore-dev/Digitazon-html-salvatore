
per settare db in json osservare prima i metadata cosi come si ottendo da https://query.bibleget.io/v3/metadata.php?query=biblebooks

utilizzo una stategia per salvare i testi dei libri cosi come risulta da scripts set-chapters.js

per settare i capitoli {
    node set-chapters.js
}

{
    const FILE_CHAPTER = "section-9" // selezionare il file section corrispondente
}

{
    const BOOKS = books.slice(0, 8) // per settare i capitoli vedi sotto, ricorda che in slice il secondo parametro e escluso

// section-1 da 0 a 7
// section-2 da 8 a 14
// section-3 da 15 a 21
// section-4 da 22 a 28
// section-5 da 29 a 35 
// section-6 da 36 a 45 (fine antico testamento)
// section-7 da 46 a 54
// section-8 da 55 a 62
// section-9 da 63 alla fine

let NUM = 64; // numero successivo al valore dello slice alla prima posizione (riprende l'indice array libri in metadata)
}
