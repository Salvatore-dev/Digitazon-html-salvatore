// scrivere una funzione chiamata reverse che 
// data una stringa in ingresso
// ritorni la stringa inversa

// ad esempio "ciao" deve ritornare "oaic"
// ad esempio "Jessica" deve ritornare "acisseJ"


function reverse(string) {
    let result = ''
    let i = string.length-1
    while (i>=0) {
        result += string[i]
        i--
        
    }
    return result
}
console.log(reverse('ciao'));