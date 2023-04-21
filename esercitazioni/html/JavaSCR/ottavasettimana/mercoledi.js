/*
    Scrivere una funzione che dato in ingresso un numero, ritorni il fattoriale di quel numero.

    Il fattoriale di un numero naturale indica il prodotto del numero per tutti i suoi antecedenti
    (n·(n-1)·(n-2) ......3·2·1)

    algoritmo in questa funzione creo una variabile result acui assegno n e un ciclo di n iterazioni
    ad ogni iterazione moltiplico n per (n-i) il ciclo dovrebbe partire da 1 aggiornando il risult
*/

function fattoriale(n) {
    let result = n
    for (let i = 1; i < n; i++) {
        result *= (n-i)
    }
    return result
}

console.log(fattoriale(5));

{
    let a = [[1,2],[3,4],[5,6],[7,8]]
    a.forEach(el=> el.forEach(em => console.log(em)))
}

let b = [1,2]
let c = [2,3]
let d = b.concat(c)
console.log(d);

