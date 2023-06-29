
// Ottieni la data corrente
var dataCorrente = new Date();

// Stampa la data corrente
console.log(dataCorrente);
var giorno = dataCorrente.getDate();
var mese = dataCorrente.getMonth() + 1; // Gennaio è 0, quindi aggiungiamo 1 per ottenere il mese corretto
var anno = dataCorrente.getFullYear();

console.log(giorno + "/" + mese + "/" + anno);

function actuallyDate() {
    let currentData = new Date();
    let day = currentData.getDate();
    let month = currentData.getMonth() + 1;
    let year = currentData.getFullYear();
    let result = day + "/" + month + "/" + year 
    console.log(result);
    return result
 }

 let a= actuallyDate()
 console.log(a);