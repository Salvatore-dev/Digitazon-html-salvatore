// scrivere una funzione chiamata intersection che 
// dati due array di interi
// ritorni un array che rappresenti l'intersezione di questi array

// ad esempio con [1,2,3] e [4,5,6] ritorna []
// ad esempio con [1,2] e [2,3] ritorna [2]

//algoritmo
//creo due arry e li passo nella funzione
//nella funzione mi servono due cicli che girano rispettivamente sui due array in ingresso
//il primo ciclo crescente sul primo arry
//  nel secondon in modo decrescente
//      un if mi verifica le corrispondenze , se le trova inserisco i dati del secondo array nel risultato
//  nel ciclo interno verifico le corrispondenze e inserisco il valore comune nell'arrai risultato
//la funzione restituisce l'array risultato

let arr1 = [1,2,3,4,5]
let arr2 = [4,5,6,7,8,9]
console.log(intersection(arr1,arr2));



function intersection(a, b) {
    let result =[]
    for (let i = 0; i < a.length; i++) {
        for (let j = b.length; j >= 0; j--) {
            if (a[i] == b[j]) {
                result.push(a[i])
            }
        }
    }

    return result
}

