// scrivere una funzione chiamata largestSwap
// che prende in ingresso un numero di due cifre,
// ritorna true se e' il piu' grande dei due possibili scambi di
// cifre, false altrimenti

// ad esempio per 27 deve ritornare false perche' posso invertire 
// le due cifre per ottere 72
// ad esempio per 43 deve ritornare true perche' 34 sarebbe minore

//algoritmo
//
//in una sotto funzione trasfrono il numero nel suo contrario
//  se aggiungo il numero in una stringa mi restiruisce una stringa con i caratteri del numero
// inverto l'ordine dei caratteri e mi strovo la stringa al contrario 
//  passo nel metodo Number.parseFloat() la stringa 
//  questa funzione mi restituisce il risultato

function largestSwap(n) {

    let conf = invertNumber(n)

        function invertNumber(x) {
        let stringN ='' + x
        let primo = stringN[0]
        let secondo = stringN[1]
        let somma = secondo + primo
        let result = Number.parseFloat(somma)
        return result 
        }

    if (n>conf) {
        return true
    }else {return false}
}

/*
let a = '22'
console.log(a[0]);

let b = 72
let c = Number.parseFloat(a)
console.log(c);
console.log(typeof c);

console.log(b/10);
let d = '' + b
console.log(d);
console.log(typeof d);

console.log(invertNumber(91));*/