/**
 * // scrivere una funzione chiamata arraySwap che 
// dato un array di interi
// ritorni un nuovo array dove, partendo da 0, il valore alla posizione i
// e il valore alla posizione i + 1 sono invertiti di posizione

// ad esempio: con [5, 6] ritornerebbe [6, 5]
// ad esempio: con [1, 2, 3, 4] ritornerebbe [2, 1, 4, 3]
// ad esempio: con [7, 8, 9] ritornerebbe [8, 7, 9] perche' il 9 non puo'
// essere scambiato con niente siccome l'array e' terminato
 */



let array = [1,2,3,4,5]
console.log(arraySwap(array));
function arraySwap(arr) {
    let result1 =[]
    let result2 =[]
    let final =[]
    //result.push(arr[1])
    for (let i = 0; i < arr.length; i++) {
            if (i%2!=0){
                result1.push(arr[i])
            }
            if (i%2==0){
                result2.push(arr[i])
            }
    }
    console.log(result1);
    console.log(result2);
    if (arr.length%2==0) {
            for (let i = 0; i < arr.length / 2; i++) {
            final.push(result1[i], result2[i])
        }
    }
    if (arr.length%2!=0) {
        for (let i = 0; i < (arr.length / 2) -1; i++) {
        final.push(result1[i], result2[i])
        }
        final.push(result2[result2.length-1])
    }   
    return final //[result1, result2] 
}