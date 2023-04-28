// esercizio 1

//algoritmo

//creare una stringa di ingresso stringEntry
// creo la funzione spendLess
// creo un array vuoto result dove andranno gli oggetti creati
// trasformo la stringa in un array (arrOne) usando come criterio separatore il carattere '\n' (metodo split)
// ottengo un array che contiene come elementi stringhe e il carattere ''

// creo un nuovo array (arrTwo) al quale aggiungo ogni elemento che non sia '', ottengo un array di stringhe
//
//creo un arry di oggetti, che poi restiruisco 
// in un ciclo creo un oggetto che ha due chiavi, reparto e spesa (obj), ad ogni iretazione inserisco l'elemento stringa in reparto, il numero in spesa 
//      creo un oggetto (reparts) con due chiavi reparto e spesa
//              devo inserire per reparto la stinga e per la 'spesa' creo un arry dove inserisco i numeri
//          se parseInt di iesimo e un numero allora lo aggingo in spesa altrimenri 
//             lo aggiungo in reparto
//
//  per posso accedere allayi di spesa
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
    let obj =[]
    const arr1 = string.split('\n')
    let arr2 =[]
    arr1.forEach(el => {
        if (el != '') {
            arr2.push(el)
            
        }
    })
    let arrObj =[]
    for (let i = 0; i < arr2.length; i++) {
        let obj ={
            reparto: '',
            spesa: []
        }
        if (parseInt(arr2[i]) === Number) {
            obj.spesa.push(arr2[i])
        } else {
            obj.reparto = arr2[i]
        }
        arrObj.push(obj)
    }




}

