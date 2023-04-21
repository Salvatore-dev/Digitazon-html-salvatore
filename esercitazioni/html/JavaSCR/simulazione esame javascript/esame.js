{
    /*
     1 - Find and replace
Scrivere una funzione che riceva in ingresso tre stringhe:
● la prima sara’ un testo
● la seconda sara’ una parola che andra’ cercata nel testo
● la terza sara’ la parola da sostituire al posto della seconda
La funzione deve quindi produrrei lo stesso effetto che si ottiene quando si fa find and
replace di una parola in un testo.
Si assuma che:
● la seconda e la terza stringa siano sempre e solo una parola, mai una frase, quindi
non ci saranno spazi
● sulle stringhe non esistano i metodi indexOf, replace, e similari, dovete scrivere voi
l’algoritmo
● la seconda e la terza parola non necessariamente devono avere lo stesso numero di
caratteri
Ricordate che le stringhe in JavaScript sono trattate in modo simile agli array.
La funzione deve ritornare la nuova stringa aggiornata
    */

    //algoritmo

    // caso 1  // metodo split 
    //
    // algoritmo
    //creo la funzione FindEreplace coni tre parametri di ingresso (sensence, string, replace)
    // trastormo sentence in un array di stringhie con Split e lo salvo in una variabile ArrayS
    //  in un ciclo che parte da 0  finoa arrays.length 
    //      se arrry iesimo e uguale a STRING
    //      assegno il valore di replace a ArrayS[i]
    // doplo il ciclo passo l'arrays modificato con metodo join che me lo trasforma in stringa,
    // assegnado il risultato a variabile result
    // ritorno result
   
     console.log(FindandReplace('ciao sono una stringa', 'ciao', 'Hello'));
    function FindandReplace(sentence, string, replace) {
        let ArrayS = sentence.split(' ')
        //console.log(ArrayS); //ottengo l'array
        for (let i = 0; i < ArrayS.length; i++) {
            if (ArrayS[i] == string) {
                ArrayS[i] = replace
            }
        }
        // console.log(ArrayS); // ottengo la sostituzione
        let result = ArrayS.join(' ')
        return result
    }
}
{
    /*
    2 - Find and update
Scrivere una funzione che, dato in ingresso un array di oggetti così strutturato:

sia in grado di attribuire un valore di default dove sia presente un null, seguendo queste
regole:
● se il type e’ “boolean” deve aggiornare usando false
● se il type e’ “string” deve aggiornare usando stringa vuota
● se il type e’ “number” deve aggiornare usando 0
● se il type e’ “array” deve aggiornare usando array vuoto
● se il type e’ “object” deve aggiornare usando oggetto vuoto
Come vedete ogni singolo oggetto ha sempre due attributi, uno la cui chiave non e’ dato a
sapere a priori, un altro la cui chiave e’ sempre “type” e il valore e’ nella lista qui sopra.
La funzione deve ritornare lo stesso oggetto ricevuto in input, con i valori aggiornati.
    */

    //ALGORITMO
        //scrivo una funzione FindundUpdate
        // creto una copia dell'oggetto in ingresso e lo restituisco come result alla fine


        //in un ciclo che parte da zero per la misura dell'ARRAY in ingresso 
        // per ogni iterazione con ARRAY[i] accedo a signolo oggetto
        // controllo con un if verifico se la prima chiave sia null 
        //(visto che ci sono sempre due attributi e solo la prima e ignota)
        // nel controllo mi servo di questo codice che ho testato Object.values(arr[i])[0])
        // e lo confronto == con null 
        //
        //ok ci sono fino aqui

        // una volta entrata nella condizione posso provare a cambiare un valore del rate se boolean lo passo a false
        // dunque inizio una sequenza di if
        //      nel primo verifico se il rate di Array[i] e bollean egli passo false
        //      nel secondo verifico se il rate di Array [i] e string // fatto
        //       cosi fino a rispettare le condizioni in consegna
        // rstituisco RSULT
 
}

let arr = [
    {
        'name': 'GIANNI',
        type: true
    },
    {
        'name': null,
        type: [2, 3,4]
    },
    {
        'name': null,
        type: 54
    },
    {
        'name': null,
        type: {
            'ciao': 90,
            'dottore': 'via'
        }
    }
    
    

]


function FindundUpdate(array) {
    let result = array

    for (let i = 0; i < result.length; i++) {
        if (Object.values(result[i])[0] == null) { // cosi verifico se c'e un null
            if (typeof result[i].type == "boolean"){
                result[i].type = false
            } else if (typeof result[i].type == "string") {
                result[i].type = ''
            } else if (typeof result[i].type == "number") {
                result[i].type = 0  
            } else if (Array.isArray(result[i].type)) {
                result[i].type = []  
            }else{
                result[i].type = {}  // stabilere il tipo di dato 'oggetto' non e cosi immediato da fare, almeno per me,
                                    // visto che per esempio gli array sono oggettiparticolari, ma anche null
            }
            
        }
       
        
        
    }
    console.log(result);
}

FindundUpdate(arr)

//console.log(Object.values(arr[0])[0]); console.log(Object.keys(arr[0])[0]); console.log(arr[0].type);
