// scrivere una funzione chiamata mapsUnion che 
// date due mappe (in JS chiamate anche oggetti) in ingresso
// ritorni una mappa (o oggetto) che contenga tutte le chiavi e 
// tutti i valori delle due mappe
// in caso di chiavi duplicate deve rimanere il valore della 
// seconda mappa (o oggetto)

// e' una funzione che volendo si puo' scrivere in una riga sola


//algoritmo warning il for each non va con oggetti
//creo due o tre oggetti diversi
// creo la funzione indicata
//    nella funzione creo un oggetto vuoto RESULT
//    assegno a RESULT le caratteristiche di M1
//    controllo con un log RESULT
//    richiamo M2 con un foreach che prende una funzione
//          in questa funzione assegno le chiavi e i valori di M2 a RESULT (RESULT[K] = V)
//    coltrollo con una stampa se RESULT esiste con le caratteristiche volute, se si
//    ritorno RESULT
//          


const person1 = {
      firstName: "John",
      lastName: "Doe",
      age: 22,
      rates: [8,4,7,8]
    };

const person2 = {
      firstName: "John",
      lastName: "Doe",
      age: 24,
      rates: [3,5,6,7]
    };

const person3 = {
      firstName: "John",
      lastName: "Doe",
      age: 24,
      rates: [3,5,6,7],
      eyeColor: "blue"
    };

    console.log(Object.keys(person1));

    //il ceck va bene, lo commento. 
    // ho usato il costrutto Object con il metodo .assign(targhet, source) che:
    //  'Copies the values of all enumerable own properties from one or more source objects to a target object'

    // da ricordare anche:
    /*
    Object.create()
        Creates a new object with the specified prototype object and properties.
    Object.entries()
        Returns an array containing all of the [key, value] pairs of a given object's own enumerable string properties.
    Object.keys()
        Returns an array containing the names of all of the given object's own enumerable string properties.
    Object.values()
        Returns an array containing the values that correspond to all of a given object's own enumerable string properties.
    */
function mapsUnion(m1, m2) {
  const result = Object.assign(m1, m2)
  return result
 }
 
 mapsUnion(person1, person2)





