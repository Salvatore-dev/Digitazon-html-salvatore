/* primo esercizio
Data una stringa, ad esempio PAYPALISHIRING, scrivere una funzione che la ritorna a "ZigZag":
vedi immagine, la funzione deve scrivere in colonna la stringa fino alla lunghezza del numero in ingresso,
quando lo supera inizia a scrivere sopra in diagonale, quando arriva alla prima riga inizia di nuovo a scrivere in verticale,
quando raggiunge l'altezza massima consentita allora scrive unaltra volta in diagonale

La funzione accetta in ingresso la stringa e un numero di righe, in questo caso e' stata invocata cosi: converti("PAYPALISHIRING", 3)
*/

/*
secondo esercizio
Data una stringa che contiene solo parentesi tonde aperte e parentesi tonde chiuse, scrvere una funzione che ritorna true se tutte le parentesi sono bilanciate, false altrimenti
((()))() cosi true
()(())) cosi false
*/

//primo esercio
// algoritmo
//posso immaginare una matrice in unscita con n arry al suo interno in uscita che
//per fare questo mi serve un ciclo che per n crea array. 
// se ho la matrice con n l 
//
// come faccio a scrivere una stringa in colonna? basta in un ciclo iterare il logo di un carattere per la lunghezza della stringa
// in questo caso il ciclo mi itera il numero in ingresso. 

let stringa = 'PAYPALISHIRING'
function name(params) {
    
}

/*
let string = 'PAYPALISHIRING'
let r = ''
let s = ''
let t = ''
for (let i = 0; i < string.length; i++) {
    if(i%2 !=0) {
     s += string[i]
    }
    if (i%4 ==0) {
        r += string[i] + ' '
    }
    if (i%4 ==2) {
        t+= string[i] + ' '
        
    }
    
}

console.log(r);
console.log(s);
console.log(t);*/