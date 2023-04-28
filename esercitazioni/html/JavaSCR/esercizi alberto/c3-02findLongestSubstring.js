// scrivere una funzione chiamata findLongestSubstring
// che prende in ingresso una stringa
// la funzione deve ritornare la stringa piu' lunga che non ha 
// ripetizioni

// ad esempio per "abcabcbb" deve ritornare "abc"
// ad esempio per "bbbbb" deve ritornare "b"
// ad esempio per "pwwkew" deve ritornare "wke"


//



function findLongestSubstring(string) {
    let result =''

    let b = new Set ()
    for (let i = 0; i < string.length; i++) {
        b.add(string[i])
    }

    b.forEach(el=> result += el)
    return result
}

//console.log(findLongestSubstring('casasssssroma'));

{
    function findLongestSubstring2(string) {
        let result =''
        let corrent = ''
        for (let i = 0; i < string.length; i++) { // ciclo sulla stringa in ingresso
            corrent += string[i] // assegno alla variabile corrente la iesima lettesa alla stringa corrente
            for (let j = i+1; j < string.length; j++) { // ciclo di nuovo su stringra in ingresso ma partendo da un indice incrementato di 1 
                if (result.includes(string[j])) { // verifico se il carattere iesimo e presente in result
                    if (corrent.length > result.length) { // verifico la lunghezza della della stringa corrente
                        result = corrent // se corrent e piu lunga la passo a result
                    }
                    corrent = ''  // azzero corrent
                    break
                    
                }
                result += string[j] // aggiungo il carrattere iesimo del secondo ciclo a result se non passa i due if precedenti
                 
            }
            
        }
        return result  // ritorno result
    }

    console.log(findLongestSubstring2('casesssroma'));

    /*
    prova con  
        abcabcbb
        casessssroma
        pwwkew
        stringaaacciu

            abcabcbb -> abc
            casessssroma -> sroma
            pwwkew -> wke | kew
            stringaaacciu -> stringa
    */

            /* alberto
            for (let i = 0; i < string.length; i++) {
                for (let j = i+1; j < string.length; j++) {
                    if (curr.includes(string[j])) {
                        if (curr.length > res.length) {
                            res = curr
                        }
                        curr = ''
                        break
                        }
                        curr += string[j]
                }
            }

            //giada ce pero un piccolo bug che non fa rispettare il mandato
            function findLongestSubstring(s){
    let parola=''
    let res=''
    for (let i = 0; i < s.length; i++) {
        const lettera = s[i];
        if(parola.includes(lettera)){
            if(parola.length>res.length){
                res=parola
            }
            parola=''
        }else{
            parola+=lettera
        }
    }
    if(parola.length>res.length){
        res=parola
    }
    return res
}
            */


/*
function findLongestSubstring(s) {
    let parola = ''
    let res = ''
    for (let i = 0; i < s.length; i++) {
        const lettera = s[i];
        if (parola.includes(lettera)) {
            if (parola.length > res.length) {
                res = parola
            }
            parola = parola.substring(parola.indexOf(lettera)+1, i)
        } else {
            parola += lettera
        }
    }
    if (parola.length > res.length) {
        res = parola
    }
    return res
}
console.log(findLongestSubstring('abcdecfghil'));
console.log(findLongestSubstring('abcabcbb'));

*/
}