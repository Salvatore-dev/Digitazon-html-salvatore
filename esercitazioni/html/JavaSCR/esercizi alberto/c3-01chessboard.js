// scrivere una funzione chiamata chessboard
// che prende in ingresso un numero l,
// la funzione deve ritornare una matrice quadrata lunga l 
// contenente '#' e ' ', opportunamente alternati, che rappresentino 
// una scacchiera di lato l 

// la prima casella deve essere un '#'

//algoritmo

// divido il problema
//scrivo una funzione che dato l mi da un array dilunghezza l partendo da '#'
//dichiarazione funzione makeString
//  pongo una vriabile RESULT che poi restituisco come array vuoto
//  in un ciclo che parte da 0 fino a l -1 che per i numeri (gli indici) pari inserisce (pusch) '#'
//  per i dispari invece ' '
//restituisco RESULT


//console.log(makeString(3));

// mi serve una funzione makeAlternativString che crea una stringa simile che inizia ora con ' '
// posso invertire il push della funzione makeString


//console.log(makeAltenativString(3));

//ottenendo le funzioni delgi arry stringa posso ora creare una funzione che inserisce in una matrice le singole stringhe
// nella funzione chessboard
//      creo la variabile result come arry vuoto e che poi restituisco
//      salvo in due varibili, STR1 - STR2 le funzioni con entrata l che mi restiruiscono le due stringhe di cui sopra
//      in un ciclo che parte da zero fino a l - 1 
//      inserisco per gl indici pari inserisco in result STR2, STR1 invece per quelli dispari
//      restituico result

function chessboard(l) {
    let result = []
    let STR2 = makeString(l)
    let STR1 = makeAltenativString(l)
    for (let i = 0; i < l; i++) {if (i %2 == 0) {result.push(STR2)} else {result.push(STR1)}  
    }
    return result


    
    function makeString(l) { // qui creo una stringa che inizia con '#'
        let result = []
        for (let i = 0; i <= l -1; i++) {if (i%2 == 0) {result.push('#')} else {result.push(' ')}}
        return result
    }


    function makeAltenativString(l) { // qui creo una stringa che inizia con ' '
        let result = []
        for (let i = 0; i <= l -1; i++) {if (i%2 == 0) {result.push(' ')} else {result.push('#')}}
        return result
    }

}

console.log(chessboard(6));

