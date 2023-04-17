// scrivere una funzione chiamata alfabetoStrambo che 
// data una stringa in ingresso
// ritorni una copia della stringa modificata come negli esempi

// ad esempio con "ciao a tutti" ritorna "ciaoro ara tuttiri"
// ad esempio con "" ritorna ""
// ad esempio con "ad esempio" ritorna "ad esempioro"
// ad esempio con "funziona solo con vocali alla fine" ritorna 
// "funzionara soloro con vocaliri allara finere"

function alfabetoStrambo(s) {
    let ones = s.split(' ')
    let result ='';
    for (let i = 0; i < s.length; i++) {
            if (ones[i]) {
                if(ones[i].charAt(ones[i].length-1) == 'a'){
                    result += ones[i] + 'r' + ones[i].charAt(ones[i].length-1) + ' '
                }else if (ones[i].charAt(ones[i].length-1) == 'e'){
                    result += ones[i] + 'r' + ones[i].charAt(ones[i].length-1) + ' '
                } else if(ones[i].charAt(ones[i].length-1) == 'i'){
                    result += ones[i] + 'r' + ones[i].charAt(ones[i].length-1) + ' '
                } else if (ones[i].charAt(ones[i].length-1) == 'o'){
                    result += ones[i] + 'r' + ones[i].charAt(ones[i].length-1) + ' '
                }else if (ones[i].charAt(ones[i].length-1) == 'u') {
                    result += ones[i] + 'r' + ones[i].charAt(ones[i].length-1) + ' '
                } else {
                    result += ones[i] + ' '
                }
            }
        }
    return result.trim()
}
    
  

console.log(alfabetoStrambo('funziona solo con vocali alla fine'));

let string = 'ecco un temporale'
console.log(string.split(' ')[0] + 'r' + string.split(' ')[0].charAt( string.split(' ')[0].length-1));
console.log(string.split(' ')[1] + 'r' + string.split(' ')[1].charAt( string.split(' ')[1].length-1));
console.log(string.split(' ')[2] + 'r' + string.split(' ')[2].charAt( string.split(' ')[2].length-1));
let splitty = string.split(' ');
console.log(splitty[2].charAt(splitty[2].length-1));
{
    /*if((ones[i].charAt(ones[i].length-1) != 'a') || (ones[i].charAt(ones[i].length-1) != 'e') || (ones[i].charAt(ones[i].length-1) != 'o') || (ones[i].charAt(ones[i].length-1) != 'u')){
        result += ones[i] + ' '
    } else {
        result += ones[i] + 'r' + ones[i].charAt(ones[i].length-1) + ' '
    }*/
}
