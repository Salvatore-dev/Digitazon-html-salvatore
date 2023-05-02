/*
2 - Oh, non puoi farci niente. Siamo tutti pazzi qui.
Scrivere una funzione che sia in grado di dire se una data stringa in ingresso sia o meno
“pazza”.
Una stringa e’ “pazza” se:
● non ha un soggetto, un soggetto puo’ essere solo: “Lui”, “Lei”, “Egli”, “Ella”
● finisce con “?!?”
● contiene la stringa “Cthulhu”
● inizia e finisce con una parola che finisce in “are”, o “ere”, o “ire”
● inizia con della punteggiatura, quindi con uno tra “,.!?:;-~”
Basta uno dei suddetti “requisiti di pazzia” per rendere una frase “pazza”; a meno che la
stringa contenga una di queste stringhe, in quel caso la stringa non e’ mai “pazza”:
● Church
● mare
Esempi di stringhe pazze:
● .Quando guardi a lungo nell’abisso, l’abisso ti guarda dentro.
● Andare a rimirare
Esempi di stringhe non pazze:
● Lui e’ pazzo.
● ~ Pensava sempre al mare come a la mar, come lo chiamano in spagnolo quando lo
amano ~
● ~ Papa’, come sta Church? ~
*/

//algoritmo

// creo una stinga che poi do in ingresso
//creo la funzione CrazyString
// in un primo controllo verifico se include 'Church' o 'mare', se si restituisco 'non e una stringa pazza'
//successivamente in controlli successivi verifico se sono soddisfatte le condizione
// se include 'Cthulhu' restituisco che e pazza
// lo stesso se non contine i soggetti
// lo stesso se finisce con ?!?
// lo stesso se inizia con uno dei caratteri di punteggiatura (una serie di ||)
// trasformo la stringa in un array di parole e 
// con un ciclo su array ottenuto
//      verifico se la prima parola e l'ultima finiscono per "are" ... ecc
//      se si restituico che e pazza
//alla fine della fuzione se non enetra in nessuna della condizioni restituisco che la stringa non e pazza


let str = 'Lui e pazzo'
console.log(CrazyString(str));
function CrazyString(string) {
    if (string.includes('Church') || string.includes ('mare')) {
        return 'la stringa non è pazza'
    }
    if (string.includes('Cthulhu')) {
        return 'la stringa è pazza'
    }
    if (!string.includes('Lui') && !string.includes('Lei') && !string.includes('Egli') && !string.includes('Ella')) {
        return 'la stringa è pazza'
    }
    if (string.endsWith('?!?')) {
        return 'la stringa è pazza'
    }
    if (string.startsWith(',') || string.startsWith('.') || string.startsWith('?') || string.startsWith('!') || string.startsWith(':') || string.startsWith(':') || string.startsWith('~') ||string.startsWith('-') ) {
        return 'la stringa è pazza'
    }
    let arr = string.split(' ')
    for (let i = 0; i < arr.length; i++) {
        if (arr[0].endsWith('are') || arr[0].endsWith('ere')|| arr[0].endsWith('ire')) {
            return 'la stringa è pazza'
        }
        if (arr[arr.length-1].endsWith('are') || arr[arr.length-1].endsWith('ere')|| arr[arr.length-1].endsWith('ire')) {
            return 'la stringa è pazza'
        }
        
    }

    return 'la stringa non è pazza'
}