 // stampare il triangolo di tartaglia
 /*
1
1 1
1 2 1
1 3 3 1
1 4 6 4 1

cerco di semplificare il problema 
data una stringa di numeri del tringolo cerco di ottenere la successiva
se e una stringa di 4 numeri 
la stringa di cinque avra la somma dei primi due poi dei secodi due

 */



//da filippo 

// funzione che prende un array di numeri, e ritorna una stringa
// con un numero in più e tutti i numeri sommati
function line(arr) {
    const array2 = []
    array2.push(1)
    for (let i = 1; i < arr.length; i++) {
        array2.push(arr[i] + arr[i - 1])
    }
    array2.push(1)
    return array2
}

// funzione che stampa n volte una linea 
function pascal(n) {
    let arr = [1]
    console.log(arr)
    for (let i = 0; i < n; i++) {
        arr = line(arr)
        console.log(arr)
    }
}