{

// scrivere una funzione chiamata firstSum
// che prende in ingresso un array e un numero,
// la funzione deve ritornare la prima coppia di numeri la cui 
// somma e' pari al numero passato come argomento

// suggerimento: per ritornare una coppia di numeri utilizzate
// un array, chiaramente a lunghezza 2

let ns = [2,3]

let x = 4
firstSum(ns, x)

      function firstSum(arr, n) {
         let a =[]
         let b = 0
         let result = []
               for (let i = 0; i < arr.length; i++) {
                  a.push(n-arr[i])
                  for (let j = 0; j < a.length; j++) {
                     if(a[j] == arr[i]){
                        b += a[j]
                     } 
               }

               //console.log(a); // in a c'e almeno un numero che e presente nellarray in ingresso
               
            }
            console.log(a);
            console.log(b);
            console.log(n);
            if (b!=n) {
            result.push(b)
            result.push(n-b)
            }
            
            console.log(result);
   }
}