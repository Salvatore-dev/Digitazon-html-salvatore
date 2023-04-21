// scrivere una funzione chiamata union che 
// dati due array di interi
// ritorni un array che rappresenti l'unione di questi array

// ad esempio con [1,2,3] e [4,5,6] ritorna [1,2,3,4,5,6]

function union(arr1, arr2) {
    let result = arr1.concat(arr2)
    return result
  }
// uso un metodo degli array che concatena

/*
vedi pure
The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.

The forEach() method executes a provided function once for each array element.

Il slice()metodo restituisce una copia superficiale di una porzione di un array in un nuovo oggetto array selezionato da starta end ( endnon incluso) dove starte endrappresenta l'indice degli elementi in quell'array. L'array originale non verrà modificato.

The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

The pop() method removes the last element from an array and returns that element. This method changes the length of the array.

The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.

The push() method adds the specified elements to the end of an array and returns the new length of the array.

The unshift() method adds the specified elements to the beginning of an array and returns the new length of the array.

Il join()metodo crea e restituisce una nuova stringa concatenando tutti gli elementi in un array (o un oggetto simile a un array ), separati da virgole o da una stringa di separazione specificata. Se l'array ha un solo elemento, quell'elemento verrà restituito senza utilizzare il separatore.
*/