// scrivere una funzione chiamata concatAll che 
// dato in ingresso un numero variabile di array
// ritorni un nuovo array che e' la concatenazione di tutti gli array
// passati

// ad esempio: con [1] [2] [3] ritornerebbe [1,2,3]
// ad esempio: con [1, 2, 3, 4] ritornerebbe [1, 2, 3, 4]
// ad esempio: con [1, 2, 3] [1, 2] [3] ritornerebbe [1, 2, 3, 1, 2, 3]

//algoritmo
//
//devo restituire un arrai che sia la somma deelgi array in ingresso
//  con un ciclo pushio uno dopo laltro gli arrai in ingresso in un array result che poi restituisco

console.log(concatAll([2],[3],[4],[5]));
function concatAll(...arrs) {
    let a =[]
    a.push(...arrs)
    console.log(a);
    let result =[]
    for (let i = 0; i < a.length; i++) {
        result = result.concat(a[i])
        
    }
    return result

}