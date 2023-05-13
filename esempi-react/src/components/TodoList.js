/*
Meno semplice: scrivere un componente che rappresenti una TODO list prendendo gli elementi della lista da questo endpoint: https://jsonplaceholder.typicode.com/todos
Ogni componente deve avere una checkbox, se la checkbox viene flaggata il componente finisce in fondo alla lista e diventa piu' opaco 
*/


import { useEffect, useState } from "react";


export function TodoList({ n = 10 }) { // esporto la funzione che puo prendere n come numero che di default e 10 (in sede di chiamata si puo parrase n con un valore a piacere per impostare il numero di elementi che vogliamo prendere  dalla source)

    const [lista, setLista] = useState([]) // qui imposto setttaggio lista che mi andra in rendering durante lesecuzione del codice quando mi servira farlo (settato con valore di array vuoto)

    useEffect(() => {            // con us effect effettuo una sola volta il settaggio della lista prendendo i valori dalla source con la lunghezza che imposto in ingresso
        async function getList() {
            let chiamata = await fetch('https://jsonplaceholder.typicode.com/todos')
            let resList = await chiamata.json()
            resList.forEach((el)=> el.completed = false) // qui passo tutti i completede a false, lo faccio all'ingresso una sola volta perche presumo che inizi tutto da false
            //console.log(resList);
            setLista(resList.splice(0, n))
        }
        getList()

    }, [])

    //console.log(lista);

    function HandleChecked(id) { // 

        const updateLista = lista.map(el => {
            if (el.id === id) {
                return { ...el, completed: !el.completed}
            }
            return el;
        })

        setLista(updateLista)
    }
    /*
    HandleChecked, che prende un parametro id. Ecco una spiegazione passo-passo del codice:

Viene dichiarata una funzione chiamata HandleChecked con un parametro id.

Viene definita una variabile updateLista che è inizializzata come una nuova array ottenuta tramite la chiamata al metodo map() dell'array lista. lista sembra essere una variabile di stato, probabilmente in React.

Il metodo map() viene utilizzato per iterare su ogni elemento dell'array lista. Per ogni elemento el dell'array, viene eseguito il seguente controllo:

a. Se l'id dell'elemento corrente el corrisponde all'id passato come parametro alla funzione HandleChecked, viene restituito un nuovo oggetto { ...el, completed: !el.completed }. L'operatore spread ... viene utilizzato per copiare tutte le proprietà dell'oggetto el e sovrascrivere la proprietà completed con il valore opposto, ottenuto negando il suo valore corrente (!el.completed). Quindi, se el.completed è true, diventerà false e viceversa.

b. Se l'id non corrisponde, l'elemento el viene restituito così com'è senza modifiche.

Infine, viene chiamato il metodo setLista (probabilmente un metodo di aggiornamento dello stato in React) passando come argomento l'array updateLista, che contiene gli elementi originali dell'array lista con il valore completed modificato per l'elemento con l'id corrispondente.

In sostanza, questa funzione viene utilizzata per modificare il valore della proprietà completed di un elemento specifico nell'array lista. Quando la funzione viene chiamata con un determinato id, cerca l'elemento corrispondente nell'array, inverte il valore della proprietà completed e quindi aggiorna lo stato con il nuovo array modificato.
    */

    let completed = [] // da questa riga procedo nell'ordinare gli elemnti secondo il discrimine della completed
    let unCompleted = []
    for (let i = 0; i < lista.length; i++) {
        const element = lista[i];
        if (element.completed) {
            completed.push(element)
        } else {
            unCompleted.push(element)
        }
    }
    let res = unCompleted.concat(completed) // res e l'array che poi rendirizzo
    console.log(res);

    return (
        <>
            <ul>
                {res.map((el) => {

                    return (
                        <li key={el.id}
                            style={{ opacity: el.completed ? 0.5 : 1 }}
                        >
                            <input type="checkbox"
                                checked={el.completed}
                                onChange={() => HandleChecked(el.id)} ></input>
                            <span>: {el.title} </span>
                        </li>
                    )
                }
                )}


            </ul>
        </>


    )
}