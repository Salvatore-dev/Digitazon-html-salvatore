// esercizio 1

//algoritmo

//creare una stringa di ingresso stringEntry
// creo la funzione spendLess
// creo un array vuoto result dove andranno gli oggetti creati
// trasformo la stringa in un array (arrOne) usando come criterio separatore il carattere '\n' (metodo split)
// ottengo un array che contiene come elementi stringhe e il carattere ''

// creo un nuovo array (arrTwo) al quale aggiungo ogni elemento che non sia '', ottengo un array di stringhe
//  mi creo una funzione che mi restituisce l'array con i nomi dei reparti e le spese convertite in numeri
//  dichiaro una variabile ArrThree alla quale passoil risultaro della funzione (stringtoNumbersArr)
//creo un arry (arrObjs) vuoto dove inserisco gli oggetti
// in un ciclo creo un oggetto che ha due chiavi, reparto e spesa (obj), 
// ad ogni iretazione inserisco l'elemento stringa in reparto, il numero in spesa 
//      creo un oggetto (reparts) con due chiavi reparto e spesa, quest'ultimo ha come valore un array vuoto 
//              devo inserire per reparto la stinga e per la 'spesa' inserisco i numeri
//          se el iesimo i stringa lo passo in reparto
//          se numero allora lo aggingo in spesa
//
//  per posso accedere all'array di spesa
     // con un ciclo 
     //     trovo la somma la la sovrascvo in spesa di quel reparto
// restituisco loggetto cosi modificato



let stringEntry = 
`
Cancelleria
1000
35
290

Servizi igienici
20
100

Vendite
0

Pubblicistica
350
`

console.log(spendLess(stringEntry));

function spendLess(string) {
    const arr1 = string.split('\n') // qui dalla stringa in ingresso creo un array ed elimino '\n'
    console.log(arr1);

    let arr2 =[]
    arr1.forEach(el => {
        if (el != '') {
            arr2.push(el)
        }
    }) // qui ripulisco l'array dagli spazi vuoti ottengo un arry di sole stringhe

    console.log(arr2);

    let arr3 = stringtoNumberArr(arr2) // qui dalle trasformo in numeri le stringhe 'numbers'
    console.log('-----------------');
    console.log(arr3);
    console.log('-----------------------------'); //controllo ok

    let arrObj =[]
    for (let i = 0; i < arr3.length; i++) {
        let obj ={
            Reparto: '',
            Spese: []
        }
        if (typeof arr3[i] == 'string') {
            obj.Reparto = arr3[i]
        } else {
            obj.Spese.push(arr3[i])
        }
        arrObj.push(obj)
    }
    console.log(arrObj);
    

    function stringtoNumberArr(array) {
        let res = []
        for (let j = 0; j < array.length; j++) {
            if (isNaN(array[j])) {
            res.push(array[j])
            }else{
             res.push(parseInt(array[j]))
            }
        }
        return res
    }


}



// let nn = '10'

// console.log(parseInt(nn));

// let nnn = parseInt(nn)
// let j ={
//     reparto: '',
//     spesa: 0
// }

// console.log(j);

// j.reparto = 'ciao'

// if (typeof parseInt(nn) == 'number') {
//     console.log('ciao');
    
// }



// /// qui ho i passaggi necessari per una funzione che mi servono per una funzione capace di trasfomarmi le stringe in numeri
// let h =['ciao','venti', '783', '10', '30'] // array di ingresso
// console.log(h); //controllo
// let k = [] // qui passo tutti gli elementi stringa a numeri, quelli che non sono trasformabile sono NaN
// for (let j = 0; j < h.length; j++) {
//     if (isNaN(h[j])) {
//         k.push(h[j])
//     }else{
//          k.push(parseInt(h[j]))
//     }
   
// }
// console.log(k); //controllo ok

// console.log('---------------');

//quindi cro la funzione
//

// function stringtoNumberArr(array) {
//     let res = []
//     for (let j = 0; j < array.length; j++) {
//         if (isNaN(array[j])) {
//         res.push(array[j])
//         }else{
//          res.push(parseInt(array[j]))
//         }
//     }
//     return res
// }
// console.log(stringtoNumberArr(h)); //controllo ok

// // mi serve una funzione che somma i numeri di un arry
// console.log('--------------------');

// function somArr(array) {
//     let res = 0
//     array.forEach(el=> res+= el)
//     return res
// }
// console.log(somArr([10,25,30]));
    
// sotto problema : devo sommare i numeri delle spese prima di passarli all'oggetto
// 

let arr3 = ['ciao', 20, 30, 'dopo', 20, 40, 'ancora', 30, 24]
let d =[]
let x = 0
d.push(arr3[0])  
for (let i = 1; i < arr3.length; i++) {
    
    if (typeof arr3[i] == 'string') {
        d.push(arr3[i])  
    
    }
    if (typeof arr3[i] == 'string' && i >=1) {
        d.push(x)
        x = 0 
    }
     
    if (typeof arr3[i] == 'number') {
        x += arr3[i]
    }
   
}
console.log(d);
