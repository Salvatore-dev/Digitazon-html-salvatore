/*
Ex 1

creare una funzione getStr che prende in ingresso un array di stringhe e restituisce il valore della stringa alla posizione 2

chiamare la funzione getStr con un array di 5 stringhe a piacere e stampare il valore prodotto.
Per chi riesce: stampare il valore prodotto in upper case
*/

//algoritmo
//funzione
//  loggo il parametro della stringa all posizione richiesta con un upper case

function getStr(array, n) {
    return array[n].toUpperCase()
}
console.log(getStr(['stringa', 'ciao', 'casa', 'gioia', 'sole'], 2));

/*
Ex 2

Creare una funzione makeObj che prende in ingresso due parametri:
una stringa e un numero.
La funzione crea e RESTITUISCE un oggetto con due proprietà: label, che avrà come valore il valore passato come primo parametro, e rate, che avrà come valore il valore passato come secondo parametro.
Chiamare la funzione makeObj due volte con valori a piacere per creare e stampare in output due oggetti con i valori indicati.
*/

function makeObj(str, md, n) {
    return{
        'label': str,
        'model': md,
        'rate': n,
    }
}

const obj1 = makeObj('auto', 'UNO',  1000)
const obj2 = makeObj('moto', 'TT', 600)

console.log(obj1);
console.log(obj2);

/*
creare una funzione getMaxMinAsArray che prende in ingresso un array di 6 numeri e restiuisce un array di 2 numeri: 
il primo, che rappresenta il numero più piccolo del primo array, 
e il secondo che rappresenta il numero più grande del primo array.
Richiamare la funzione getMaxMinAsArray con un array di 6 numeri a piacere, 
salvare l'array restituito dalla funzione e 
stampare il numero più grande e più piccolo con un apposito messaggio
*/

function getMaxMinAsArray(array) {
    let result = []
    let comp = array[0]
    let comp2 = array[0]
    for (let i = 1; i < array.length; i++) {
        if (array[i]>comp) {
            comp = array[i]
        }
        if (array[i]<comp2) {
            comp2 = array[i]  
        }
    }
    //console.log(comp);
    //console.log(comp2);
    result.push(comp2)
    result.push(comp)
    return result
    
}
let a = getMaxMinAsArray([222,322,3,-22,34,12])
console.log(`il numero piu piccolo e:  ${a[0]}, invece il numero piu grande e: ${a[1]}`)
