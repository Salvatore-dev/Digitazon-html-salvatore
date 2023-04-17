// scrivere una funzione chiamata algebra che 
// dato un array di interi
// ritorni il prodotto degli elementi di indice pari a cui vengono
// sottratti tutti gli elementi di indice dispari

// ad esempio: con [1, 2, 3, 4] ritornerebbe 3 - 6 = -3

//algoritmo
//creo un array di numeri diversi
//all'interno della funzione che ho creato
//mi serve una variabile che mi accumula il prodotto dei valori con indice pari: assegno il valore dell'indice 2
//mi serve una variabile che mi accumula la somma dei valori degli indici dispari: assegno il valore dell'indice 1
//creo un ciclo che itera l'array
//in un primo if verifico l'indice pari e accumulo in modo progressivo la moltiplicazione *=
//in un secondo per i numeri dispari incremento la somma
// ritorno il prodotto meno la somma dei dispari

let numeri = [1,2,3,4]
algebra(numeri)

function algebra(arr) {
    let molt = arr[2]
    let somma = arr[1]
    for (let i = 3; i < arr.length; i++) {
        if (i%2 ==0) {
            molt *= arr[i]
        }else {
            somma += arr[i]
        }
    }
    return molt - somma
}
console.log(algebra(numeri));
