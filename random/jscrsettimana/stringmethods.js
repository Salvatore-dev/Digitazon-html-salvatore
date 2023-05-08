{
    const sentence = 'The quick brown fox jumps over the lazy dog.';

const index = 4;

console.log(`The character at index ${index} is ${sentence.charAt(index)}`);


// Expected output: "The character at index 4 is q"
}

{
    /*
     Il indexOf()metodo, dato un argomento: una sottostringa da cercare, ricerca l'intera stringa chiamante e restituisce l'indice della prima occorrenza della sottostringa specificata. Dato un secondo argomento: un numero, il metodo restituisce la prima occorrenza della sottostringa specificata in corrispondenza di un indice maggiore o uguale al numero specificato.
    */


const paragraph = 'The quick brown fox jumps ang dog over the lazy dog. If the dog barked, was it really lazy?';

const searchTerm = 'dog';
const indexOfFirst = paragraph.indexOf(searchTerm,31);

console.log(`The index of the first "${searchTerm}" from the beginning is ${indexOfFirst}`);
// Expected output: "The index of the first "dog" from the beginning is 40"

console.log(`The index of the 2nd "${searchTerm}" is ${paragraph.indexOf(searchTerm, (indexOfFirst + 1))}`);
// Expected output: "The index of the 2nd "dog" is 52"

let string = 'ciao a tutti  e tutte'
let a = string.indexOf('t', 13)
console.log(a);
}

{
    /*
    Il lastIndexOf()metodo, dato un argomento: una sottostringa da cercare, ricerca l'intera stringa chiamante e restituisce l'indice dell'ultima occorrenza della sottostringa specificata. Dato un secondo argomento: un numero, il metodo restituisce l'ultima occorrenza della sottostringa specificata in corrispondenza di un indice minore o uguale al numero specificato.
    */

    const paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';

const searchTerm = 'dog';

console.log(`The index of the first "${searchTerm}" from the end is ${paragraph.lastIndexOf(searchTerm, 50)}`);
// Expected output: "The index of the first "dog" from the end is 52"

}

{
    /*
    startsWith(), endsWith(), includes()	Restituisce se la stringa inizia, finisce o contiene una stringa specificata.
    */

    let s= 'domani vado a scuola'
    console.log(s.includes('vado')); //Il includes()metodo esegue una ricerca con distinzione tra maiuscole e minuscole per determinare se una stringa può essere trovata all'interno di un'altra stringa, restituendo trueo falsecome appropriato.

    console.log(s.startsWith('d', 2)); //Il startsWith()metodo determina se una stringa inizia con i caratteri di una stringa specificata, restituendo trueo falsecome appropriato. La posizione iniziale in cui searchStringdovrebbe essere trovato (l'indice del searchStringprimo carattere di ). Il valore predefinito è 0.

    console.log(s.endsWith('a', 7)); //Il endsWith()metodo determina se una stringa termina con i caratteri di una stringa specificata, restituendo trueo falsecome appropriato. La posizione finale in cui searchStringdovrebbe essere trovato (l'indice dell'ultimo searchStringcarattere di più 1). Il valore predefinito è str.length.
 
    let s1 = 'abcdoposceracasa'
    console.log(s1.includes('dopo')); //riesce a leggere la sottostringa
  
}

{
    const str1 = 'Hello';
const str2 = 'World';

console.log(str1.concat(' ', str2));
// Expected output: "Hello World"

console.log(str2.concat(', ', str1)); //concatena le stringhe come risultato restituisce una stringa nuova
// Expected output: "World, Hello"
let str3 = str1.concat(' ', 'ecco e concatenato con: ', str2)
console.log(str3);
}

{
    //slice(indexStart)Il slice()metodo estrae una sezione di una stringa e la restituisce come nuova stringa, senza modificare la stringa originale.
    //slice(indexStart, indexEnd)

    const str = 'The quick brown fox jumps over the lazy dog.';

console.log(str.slice(31));
// Expected output: "the lazy dog."

console.log(str.slice(4, 19));
// Expected output: "quick brown fox"

console.log(str.slice(-4));
// Expected output: "dog."

console.log(str.slice(-9, -5));
// Expected output: "lazy"
console.log(str.substring(4, 19));

}

{

    //Il substring()metodo restituisce la parte di stringdall'indice iniziale fino all'indice finale escluso o fino alla fine della stringa se non viene fornito alcun indice finale.
    const str = 'Mozilla';

console.log(str.substring(1, 3));
// Expected output: "oz"

console.log(str.substring(2));
// Expected output: "zilla"

}