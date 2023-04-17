console.log('ciao');

//scrivere una funzione che prende in ingresso una stringa e ritorna il numenro di occorrenze di ogni singolo carattere della stringa

// creo una stringa qualsiasi
// creo una funzione che prende una stringa
// creo un mappa
// creo un ciclo della lunghezza della stringa
// nel ciclo creo un if (verifico se la mappa ha quella chiale)
// se si incremento il valore della chiave che viene trovata
//altrimenti metto come chiave il carattere attuale e come valore 1
//la funzione dovrebbe restituire la mappa


console.log(count('caramella'));
function count(stringa) {
    const mappa = new Map ();
    for (let i = 0; i < stringa.length; i++) {
        if (mappa.has(stringa[i])) {
            mappa.set(stringa[i], mappa.get(stringa[i])+1 )
        } else {
            mappa.set(stringa[i], 1)
        }   
    }
    return mappa
}

//scrivere una funzione che data in ingresso una stringa rimuove tutti i caratteri duplicati