// scrivere una funzione chiamata findLongestSubstring
// che prende in ingresso una stringa
// la funzione deve ritornare la stringa piu' lunga che non ha 
// ripetizioni

// ad esempio per "abcabcbb" deve ritornare "abc"
// ad esempio per "bbbbb" deve ritornare "b"
// ad esempio per "pwwkew" deve ritornare "wke"

function findLongestSubstring(string) {
    let longest = "";
    let firstResult = []

    for (let i = 0; i < string.length; i++) {
        const el = string[i]
        if (longest.includes(el)) {
            firstResult.push(longest)
            longest = ""
            i--
        } else {
            longest += el
        }
        
    } 
    firstResult.push(longest)
    let result = ''
    firstResult.forEach((el)=>{
        if (el.length > result.length) {
            result = el
        }
    })
    return result
}

//console.log(findLongestSubstring("bbbbb"))

// scrivere una funzione chiamata firstSum
// che prende in ingresso un array e un numero,
// la funzione deve ritornare la prima coppia di numeri la cui 
// somma e' pari al numero passato come argomento

// suggerimento: per ritornare una coppia di numeri utilizzate
// un array, chiaramente a lunghezza 2

function firstSum(arr, n) {
    let result = []

    for (let i = 0; i < arr.length; i++) {
        const Number1 = arr[i]
        const Number2 = arr[i+1]
        if (Number1 + Number2 === n) {
            result.push(Number1, Number2)
        }
    }
    return result
}
console.log(firstSum([1,2,3,4,5], 6));