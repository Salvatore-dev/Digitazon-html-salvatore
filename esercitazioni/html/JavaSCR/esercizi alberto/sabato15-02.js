/* scrivere una funzione di array e un numero ritorna gli indici la cui somma fa quel numero

 */

//algoritmo
//dato un array e un numero li passo alla funzione
//nella funzione verifico se la somma dei numeri array e uguale a numero parametro
// qui sotto ho preso spunto da esecuzione esercizio durante il collegamento
//lo pseudo codice deve essere indentato gia bene vedi esempio: 
/*
// ALBERTO

// ho una funzione che prende in ingresso un array ARR e un numero N
// creo un primo ciclo che visitera' tutti gli elementi, indice I
//   creo un secondo ciclo che cerchera' il "compagno", partendo una posizione a dx, indice J
//     se il numero puntato da I sommato al numero puntato da J == N
//       allora ritorno [I, J]
// se arrivo qui vuol dire che non ho trovato un compagno e ritorno []
*/

let ar = [1,3,5,6]
let n = 7

function trovaIndice(array, numero) {
    for (let i = 0; i < array.length; i++) {
        for (let j = i+1; j < array.length; j++) {
            if((array[i]+ array[j]) == numero){
                return [i,j]
            }
        }
    }
    return []
}
console.log(trovaIndice(ar,n));