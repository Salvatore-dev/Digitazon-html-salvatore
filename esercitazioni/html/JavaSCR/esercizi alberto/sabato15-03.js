/*
scrivere una funzione che prende in ingresso una stringa che contine 
numeri romani che mi restituisce una una stringa con quei numeri in notazione araba


// scrivere una funzione che prende in ingresso una stringa che contiene 
// un numero in notazione romana,deve tradurlo in notazione araba

// pseudocodice
// creo la funzione e il suo richiamo 
// come parametro ha una stringa 
// devo creare una variabile che mi servirà a restituire la risposta
// creo una mappa per tradurre i caratteri che trovo nella stringa del parametro
// riempo la mappa con i caratteri romani
// controllo se esiste corrispondenza del carattere corrente nel parametro con una delle chiavi nella mappa 
    // se si, prendo il valore corrispondente a quella chiave e lo memorizzo nella variabile risultato
    // se ci sono altri caratteri da controllare sommo il risultato alla variabile
// se il carattere corrente è preceduto da un carattere che corrisponde ad un numero piu piccolo


function romaniToArab(numRomano){
    let result=0
    let map=new Map([
        ['x',10],
        ['v',5],
        ['i',1]
    ])
    for (let i = 0; i < numRomano.length; i++) {
        let current = numRomano[i];
        let pre=numRomano[i-1]
        if(map.has(current)){
            if(current>pre){
                result-=map.get(current)
                result=Math.abs(result)
            }else{
                result+=map.get(current)
            }
        }  

    }
    return result
}

console.log(romaniToArab('viii'))
*/