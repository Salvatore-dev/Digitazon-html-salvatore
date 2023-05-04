/*
Scrivere una funzione che prende in ingresso un oggetto, si devono stampare solo le seguenti chiavi:
 * "chiave1"
 * "chiave2"
a prescindere da quante ce ne siano nell'oggetto.
Non si possono utilizzare if, non si puo' utilizzare l'operatore punto (.) cercate di utilizzare lo spread operator
*solo i valori relativi a quelle chiavi
*/

let objs = {
    chiave: 1,
    chiave: 2
}

let {...keys} = objs

console.log(keys);

destr(objs)
function destr(obj) {
   return 
    
}


function print({chiave1, chiave2}) {
    console.log(chiave1, chiave2)
  }
  
  function print2(obj) {
    let { chiave1, chiave2 } = obj
    console.log(chiave1, chiave2)
  }
  
  print({chiave1: 1, chiave2: 2, chiave3: 3, chiave4: 4})
  print2({chiave1: 1, chiave2: 2, chiave3: 3, chiave4: 4})
  
  
  
  import {MyQualcosa} from './qualcosa'
  
  
  let a = 0
  function qualcosa(a, b, c) {
    
  }
