// scrivere una funzione chiamata mapsUnion che 
// date due mappe (in JS chiamate anche oggetti) in ingresso
// ritorni una mappa (o oggetto) che contenga tutte le chiavi e 
// tutti i valori delle due mappe
// in caso di chiavi duplicate deve rimanere il valore della 
// seconda mappa (o oggetto)

// e' una funzione che volendo si puo' scrivere in una riga sola


function mapsUnion(m1, m2) {
        let result = new Map()
        result = m1
         m2.forEach(insertMap)
          function insertMap(v,k) {
              result.set(k,v)
          }
          return result
}



let map1 = new Map ()
map1.set('name', 'marco')
map1.set('lastname', 'rossi')
map1.set('rate', {
    italiano: 7,
    matematica: 6,
    storia: 9,
    giografia: 5})
map1.set('address', ['via', 'Marco Polo', 22])

console.log(map1);
let map2 = new Map ()
map2.set('name', 'marco')
map2.set('lastname', 'rossi')
map2.set('rate', {
    italiano: 5,
    matematica: 4,
    storia: 9,
    giografia: 7})
map2.set('address', ['piazza', 'Garibaldi', 12])

console.log(map2);

const map3 = new Map()
map3.set('age', 21)
map3.set('address', [])
map1.forEach(insertMap)
function insertMap(v,k) {
    map3.set(k,v)
}
console.log(map3);
console.log(map3.get('age'));

let c = mapsUnion(map1,map2)
console.log(c);


//il risultato c'e ma il test vule due oggetti