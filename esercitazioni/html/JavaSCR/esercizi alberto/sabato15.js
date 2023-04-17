/*
data una stringa in ingresso la funzione deve calcolare
la sottostringa palindroma piu lunga 
esempio 'abba' e '1abba1'
*/

// algoritmo
//come trovo una stringa palindroma in una stringa piu lunga?
//posso provare a  confrontare la stringa con il suo contrario e mettere una una stringa vuota le sue occorrenze... provo
//una stringa e palindroma se letta al controrio e uguale all'originale, quindi se una stringa e uguale al suo contrario
// mi serve una funzione che data una stringa mi costruisca una stringa invertita e verificare se la prima e uguale alla seconda


function check(params) {
    let palin = ''
    let invertparam = inverterString(params)
    for (let i = 0; i < params.length; i++) {
            if (params[i]==invertparam[i]) {
                palin+=params[i]
            }            
    }
    return palin
}

let word2 = 'corabbacioaaaaaa'
console.log(check(word2));


let word = 'abba'
console.log(inverterString(word));

function inverterString(stringa) {
    let result =''
    for (let i = stringa.length-1; i>=0; i--) {
        result += stringa[i]
    }
    return result
}
 let word3 = 'cavallo'
 console.log(inverterString(word3));