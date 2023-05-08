// esempio di destrutturazione di array
let a = [1,2,3,4]
let [x,y] = a
let c = x+y
console.log(c);

const obj = {
    nome: 'marco',
    cognome: 'rossi',
    eta: 43,
    incremento: function x () {
        this.nome = 'Giovanni'
        this.eta += 1
    }
}

let {eta} = obj
console.log(eta);
eta = 20
console.log(obj);
console.log(eta);

// esempi di assegnazione di valori e chiavi ad un oggetto gia inizializzato
obj.indirizzo = 'Piazza grande'
console.log(obj);
obj.incremento()
console.log(obj);


