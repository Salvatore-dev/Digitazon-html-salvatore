// scrivere una funzione chiamata isHomogeneous che 
// dato un array di elementi in ingresso
// ritorni true se l'array contiene elementi tutti dello stesso tipo
// o false altrimenti

//algoritmo
//scrivo la funzione e gli passo un arry
//  mi serve un temine di paragone e quindi assegno ad una variabile il valore del primo elemento dell'array
//  in un ciclo su arry di ingresso
//      un if che mi da true se tutti gli elemnti sono dello stesso typeof del temine di pargone
//      else ritorna false

let a = []
console.log(isHomogeneous(a));
function isHomogeneous(arr) {
    let p = arr[0]
    let result = true
    for (let i = 1; i < arr.length; i++) {
        if (typeof p != typeof arr[i]) {
            result = false
        } 
    }
    return result
}