/*
Scrivere una funzione AND che si comporti come l'and nei booleani (&&) e accetti un numero qualsiasi di parametri

AND(true, false)
AND(true)
AND(false)
AND(false, true, true, true, false)
AND(false, true, true, true, false, false, true, true, true, false)
AND(false, true, true, true, false, false, true, true, true, false,false, true, true, true, false, false, true, true, true, false,false, true, true, true, false, false, true, true, true, false,false, true, true, true, false, false, true, true, true, false,false, true, true, true, false, false, true, true, true, false,false, true, true, true, false, false, true, true, true, false)
*/

//assunzioni 
//una funzione And
// rispondere cone &&
// accetta n parametri  

console.log(And(true, false, false, true));
function And(...params) {
    let res = []
    let arg = [...params]
    //console.log(arg);
    for (let i = 0; i < arg.length; i++) {
        let result = true
            if ((arg[i] == true && arg[i+1]== true) || arg[i] == true) {
            result = true
            } else {
                if (arg[i] == false)
                {
                    result = false
                }
            }
            res.push(result)
    }
    return res
    
}
console.log(And2(true, false));

function And2(...params) {
   //console.log(params);
    let result = []
    params.forEach(el => {
    if (el == true) {
        result.push(true) 
    } else{
        result.push(false) 
    }
   })
   return result
    
}

function And3(...params) {
    let result = params[0] && params[1]
    for (let i = 2; i < params.length; i++) {
        result = result && params[i]
    } 
    return result
    
}


function and(...bool) {
    for (let i = 0; i < bool.length; i++) {
        if (!bool[i]) {
            return bool[i]
        }
    }
    return true
}