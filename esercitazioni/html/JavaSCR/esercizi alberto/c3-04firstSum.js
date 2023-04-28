// scrivere una funzione chiamata firstSum
// che prende in ingresso un array e un numero,
// la funzione deve ritornare la prima coppia di numeri la cui 
// somma e' pari al numero passato come argomento

// suggerimento: per ritornare una coppia di numeri utilizzate
// un array, chiaramente a lunghezza 2

// algoritmo
// dato un array A di numeri
// datoun numero N

// creo la funzione
// diamo un RES come array vuoto
// diamo un array vuoto JUSTONE
//diamo X =0
// diamo y =0
// creo un ciclo che parte da zero su A.length
//     ad ogni iterazione aggiungo a JUSTONE un numero che e la sottrazione tra N e ARR[i]
//     ottegno almeno un numero che sommato ad una altro mi da N (a+b=c / a = c - b)
//
// controllo i valori dei due array con due cicli innestati 
//      quello superiore su Arr che parte dalla fine(devo trovare la prima corrispondenza), 
//          il secondo su Justone se trovo la corrispondenza la salvo in X questo e il primo numero della coppia che cerco
//          se non lo trovo vuol dire che nessuna coppia di numeri di A restituisce N quindi restituisco RES vuoto
// in un ultimo ciclo su arr partendo dalla fine
//      verifico se esiste un unmero che sommato ad x mi da n
//      se si lo salvo in y

let A = [1,2,3]
let N = 4
//console.log(firstSum(A, N));


function firstSum(arr, n) {
    let RES = []
    let x = 0
    let y = 0
    let JUSTONE = []
    for (let i = 0; i < arr.length; i++) {
        JUSTONE.push(n-arr[i])
    } 
    //console.log(JUSTONE);

    for (let i = arr.length - 1; i >= 0; i--) {
        for (let j = 0; j < JUSTONE.length; j++) {
            if (arr[i] == JUSTONE[j]) {
                x = JUSTONE[j]
            } 
        }
    }
    //console.log(x);
    for (let i = arr.length -1; i >=0; i--) {
        if (x+arr[i] == n) {
            y=arr[i]
        }
    }
    //console.log(y);
    if (x==0 || y==0) {
        return RES
    }else{
        RES.push(x)
        RES.push(y)
        return RES
    }

}

{
    let a = [1,2,3]
    let g = 4
    console.log();
    //console.log(firstSum2(a, g));
    
    function firstSum2(arr, n) {
        let result =[]
        for (let i = 0; i < arr.length; i++) {
            for (let j = arr.length; j >= 0; j--) {
                if (arr[i]+ arr[j] == n) {
                    result.push(arr[i]+arr[j])   
                }
                
            }
            
        }
        return result
        
     }

   
}

{
    // scrivere una funzione chiamata firstSum
// che prende in ingresso un array e un numero,
// la funzione deve ritornare la prima coppia di numeri la cui 
// somma e' pari al numero passato come argomento

// suggerimento: per ritornare una coppia di numeri utilizzate
// un array, chiaramente a lunghezza 2

// algoritmo
// dato un array A di numeri
// datoun numero N
/*
    algoritmo
    dichiaro la funzione firstSum
    dichiaro variabile res come array []
    


*/
let a1 = [1,2,3,4] // questo tipo di soluzioni mi non funziona se la somma da cercare e il doppio di uno dei numeri
let x = 4
console.log(firstSum3(a1, x));
function firstSum3(arr, n) {
    let res = []
    for (let i = 0; i < arr.length; i++) {
        for (let j = arr.length-1; j >=0; j--) {
            if (arr[i] + arr[j] == n) {
                res.push(arr[i])
                res.push(arr[j])
                return res
            }
            
        }
        
    }
    return res
    
}

}