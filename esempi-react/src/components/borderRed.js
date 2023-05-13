/* 
Semplice: scrivere un componente che rappresenti un input text, quando l'input e' vuoto oppure ha dentro solo dei numeri, oppure solo della punteggiatura, deve avere il bordo rosso.
Quando la pagina carica non deve subito partire dal rosso, ma arrivarci solo dopo che l'utente ha scritto qualcosa.
*/

import { useState, useEffect } from "react";

export function ImputRed() {
    let [color, setColor] = useState('')
    let [state, setState] = useState()
    let symbol = ['!', '@', '#', '$', '%', '^', '&', '*', '()', '_', '+', '-', '=', ';', ':', '|', ',', '.', '<', '>', '?', '~']
    useEffect(() => {
        // setColor(color)
        function checkState(val) {
            for (let i = 0; i < val.length; i++) {
                const value = val[i];
                if (!symbol.includes(value)) { // se non include symbol in ogni sua iterazione (ovvero nel momento in cui incontra qualcosa di diverso da symbol) è falso
                    return false
                }
            }
            return true // se include solo symbol nella sua totale iterazione è vero
        }
        if (state !== undefined) {
            if (checkState(state) || (!isNaN(state) && !state.includes('e') )|| state === '') {
                setColor('red')
                console.log(state);
            } else {
                setColor('blue')
            }
        }
        // for (let i = 0; i < symbol.length; i++) {
        //     const sym = symbol[i];

        // }

    }, [state])

    return (
        <input value={state} className={color} onChange={(e) => setState(e.target.value)}></input>
    )
}