/*
Dato un array ordinato di interi tutti diversi, e un numero target, ritornare l'indice al quale il target e' trovato. Se non viene trovato ritornare l'indice al quale andrebbe inserito per mantenere l'ordine

esempio 

nums = [1,3,5,6], target = 5
2

ums = [1,3,5,6], target = 2
1

algoritmo

creo una funzione che prende in ingresso un array e un target
inizio un ciclo su Array, parte da zero
    con una verifica if
        se lo trova assegno ritorno i
        se non lo trova
con un ciclo secondo 
    conu na verifica 
        vedo 

        devo trovare il numero piu vicino, ad ogni iterazione decremento n di 1 e ricontrollo,
        se non trova alla fine delle iterazioni restituisco n (=0) 

        
*/

let a = [1,2,3,6]
let N = 5
console.log(findIndex(a, N));
function findIndex(array, n) {

    for (let i = 0; i < array.length; i++) {
        if (array[i] == n) {
            return i
        }
    }
    for (let i = 0; i < array.length; i++) {
        if (array[i] < n && array[i+1] > n) {
            return i+1
            
        }
        
    }
   
    
}
{
let a = [1,2,4,6]
let N = 3
console.log(findIndex2(a, N));
function findIndex2(array, n) {

    for (let i = 0; i < array.length; i++) {
        if(array[i] == n || array[i]> n)
        return i 
    }

    return array.length
}

    
}

{
    // implementare una ricerca binaria
    // su un array che potrebbe essere molto lungo
    //

    // creo due cicli diversi uno mi parte da 0 fino alla meta
    // l'altro  che parte dalla fine fino alla meta se
    
    // oppure in uno stesso cilco posso creare due inizilizzazioni , con due contatori diversi e con la condizione di uscita che i==j
    // i e j , i cheparte da zero e j che parte da lunghezza

    let A = [-30,-22,-5,-2,0,1,2,4,6,7,8,9,10,11,13]
    let N = 13
    console.log(trova(A, N));
    function trova(a, n) {

            for (let i = 0, j = a.length-1; i!=j; i++, j--) {
            if(n == a[i]){
                return i
            }
            if (n == a[j]) {
                return j
            }

        }
    }

    //dato un array di numeri ordinati, lo confronto con quello che sta a meta 
    /*
    creo END, HALF = end/2
     */
    


        function binarySearch(arr,n) {
    
            let end = arr.length-1
            let half = end/2
            let start = 0 
        
            while ( start != end ) {
                console.log(start,end);
                if (n==arr[half]) {
                    return half
                }
                if (n>arr[half]){
                    start = half
                } else {
                    end = half
                }  
                half = Math.round((end+start)/2)  
            }
        
        }
        
        console.log(binarySearch([1,2,3,5],5));

}

{

    /* 
    dati due array ordinati, creare una funzione chiamata merge, che prende in ingresso i due array e ne ritorna uno solo, ordinato
    NON si puo' usare array.sort
    merge([1,2], [3,.4]) -> [1,2,3,4]
    merge([1,3,5], [2,4,6,7,8]) -> [1.2.3.4.5.6.7.8]

    algoritmo
    creare i due array
    creare la funzione 
        creo arry A = [] che poi restituisco

        con il metodo concat posso unire i due array in A

        per mettere in ordine l'array
        in un ciclo su A
            verifico se A[i] < A[i+1]
            se si posso assegnare ad A[i]= A [i+1]

    */    

            let arr1 = [1,3,5]
            let arr2 = [2,4,6,7,8]
            Merge(arr1,arr2)

            function Merge(a1,a2) {
                let A = a1.concat(a2)
                console.log(A);
                
            }
}