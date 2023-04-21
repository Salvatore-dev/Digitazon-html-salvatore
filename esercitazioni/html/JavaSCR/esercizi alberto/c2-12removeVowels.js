// scrivere una funzione chiamata removeVowels che 
// data una stringa in ingresso
// ritorna la stringa senza le vocali

// suggerimento, ritornate una nuova stringa senza tentare di 
// modificare la stringa originale

// ad esempio "ciao" deve ritornare "c"
// ad esempio "aeiou" deve ritornare ""
// ad esempio "esercizio" deve ritornare "srcz"

function removeVowels(string) {
    let result = ''
    for (let i = 0; i < string.length; i++) {
        if (string[i] != 'a' && string[i] != 'e' && string[i] != 'i' && string[i] != 'o' && string[i] != 'u'){
            result += string[i]
        }
    }
    return result
    

}

console.log(removeVowels('aeiou'));

