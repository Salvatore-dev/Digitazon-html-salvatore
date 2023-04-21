/*
  Ex 1

  dato l'array chiamato 'a1' con valori [10, 'ciao', true, 20, 'js', 4] usare un foreach per calcolare la somma degli elementi numerici e stamparla in output
*/

//algoritmo
//creo l'array di ingresso
//nella funzione
//  verifico se gli elementi dell'array sono numeri, se si incremento il contatore (la variabile devo crearla fuori)
//

let a1 = [10, 'ciao', true, 20, 'js', 4]
let result = 0
a1.forEach(function (v) {
    if (typeof v == "number"){
        result += v
    }
})

console.log(result);

/*
/*
  Ex 2

  creare una mappa chiamata m1, che rappresenta un'automobile, con la seguente struttura: 
  model -> 'Panda', maxSpeed: 250, price: 1000

  creare una mappa chiamata m2, che rappresenta un'automobile, con la seguente struttura: 
  model -> 'Audi', maxSpeed: 200, price: 5000

  tramite due foreach, stampare le singole caratteristiche delle due automobile.
  DOPO, stampare in output il modello della macchina con la velocità massima più elevata

*/
//algoritmo
//creo le due mappe
//creo una funzione che mi stampi le caratteristiche richiamando chiave e valore

// con un if verifico la velocita maggiore delle due automobile e stampo quella piu veloce

const m1= new Map()
m1.set('model', 'Panda')
m1.set('maxSpeed', 250)
m1.set('price', 1000)
console.log(m1);

const m2= new Map()
m2.set('model', 'Audi')
m2.set('maxSpeed', 300)
m2.set('price', 5000)
console.log(m2);

function caratteristiche(v,k) {
    console.log(`le caratteristiche dell'auto sono ${k} = ${v}`);
    
}
m1.forEach(caratteristiche)
m2.forEach(caratteristiche)

let a = m1.get('maxSpeed');
let b = m2.get('maxSpeed');

if (a > b) {
    console.log(`la piu veloche e la ${m1.get('model')} che raggiunge ${m1.get('maxSpeed')}`);
}else{
    console.log(`la piu veloce e ${m2.get('model')} che raggiunge ${m2.get('maxSpeed')}`);

}