// scrivere una funzione chiamata filterString
// che prende in ingresso una funzione e una stringa
// la funzione filterString deve ritornare una nuova stringa
// le cui lettere sono presenti solo se 
// l'applicazione della funzione alla i-esima lettera
// restituisce true

// ad esempio per l => l == "a" e "abc" deve 
// ritornare "a"
// ad esempio per l => l == "c" e "bbbbb" deve 
// ritornare ""
// ad esempio per l => l != "c"e "cabbac"  deve 
// ritornare "abba"

// algoritmo
//
// scompongo il problema
// mi serve una funzione SELECT che mi stampa le lettere di una parola solo se sono ugauli ad una lettera che passo come parametro
// una funzione select che mi prende una stringa e una lettera
//  dato RESULT come stringa vuota che poi restituisco
//  con un for che parte da 0 per la lunghezza di string - 1 
//      se arr di i == 'lettera' allora aggingo a result la lettera trovata

function select(string, l) {
    let result = ''
    for (let i = 0; i < string.length; i++) {
        if (string[i]==l){
            result += string[i]
        }
    }
    return result
    
}
console.log(select('abba', 'b'));

// mi serve una funzione analoga a select che chiamo Delete che al contrario mi stampa tutte le lettere tranne quella in ingresso

function Delete(string, l) {
    let result = ''
    for (let i = 0; i < string.length; i++) {if (string[i] !=l){result += string[i]}
    }
    return result
    
}
console.log(Delete('cabbac', 'a'));
let ttt = 'ciao'
let fun = l=>l

filterString(fun('d'), 'abba');
 
function filterString(funx, str) {
    if (funx == 'c') {
        console.log(str);
        
    } else {
        console.log(str + 'qui');
    }
    

   

    


    function Delete(string, l) {
        let result = ''
        for (let i = 0; i < string.length; i++) {if (string[i] !=l){result += string[i]}
        }
        return result
        
    }

    function select(string, l) {
        let result = ''
        for (let i = 0; i < string.length; i++) {if (string[i]==l){result += string[i]}
        }
        return result
        
    }
}

