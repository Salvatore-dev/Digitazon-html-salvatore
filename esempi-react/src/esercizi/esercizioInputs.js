import { useEffect, useState } from "react"

export default function Inputs() {

    // esercizio 1
    const [input, setImput] = useState('')
    //console.log(input);
    let sentense = input.split(' ')

    // esercizio 2

    const [left, setLeft] = useState(0)
    const [top, setTop] = useState(0)

    function newPosition() {
        setLeft(Math.floor(Math.random() * 700))
        setTop(Math.floor(Math.random() * 700))
    }
    //console.log(left);
    //console.log(top);

    /*
    Meno semplice: scrivere un componente che mostri il colore relativo ad una stringa RGB: deve essere una input per R, una per G, una per B. Una volta che l'utente ha inserito i tre valori il colore deve apparire in una zona dedicata.
    */
    const [red, setRed] = useState(0)
    const [green, setGreen] = useState(0)
    const [blue, setBlue] = useState(0)
    //console.log(red);
    //console.log(green);
    //console.log(blue);
    // completare cercando di evitare la digitazione di caratteri e un numero superiore a 255, e anche partire da zero


    /*
     Scrivere un componente che rappresenta un input e la sua label.
 Il componente puo' essere configurato in modo che:
 la label appaia alla sinistra dell'input o alla sua destra, in base alla prop "posizione" che puo' essere "l" o "r"
 con una funzione, passata come prop, sia possibile inibire l'inserimento di certi caratteri, specificati appunto dalla funzione stessa
    */

    function LabelImput({posizione, funx}) {

        const [value, setValue] = useState ('')
        
        return (
            <>
                <h3>esercizio Label Imput</h3>
                <div style={{ display: "flex", flexDirection: "row" }} >
                    {posizione === 'l' && <label for="prova" >inserisci</label>}
                    <input value={funx (value)} id="prova" onChange={(e)=> setValue(e.target.value)} ></input>
                    {posizione === 'r' && <label for="prova" >inserisci</label>}
                </div>
              </>

        )
    }

    const position = "l"

    function noChar(word) {
        if (!isNaN(word)) {
            return word
        } else {
            return word.slice(0, -1)
        }
    }

    function noNumber(word) {
        const regex = /^[a-zA-Z]+$/
        if (regex.test(word)) {
            return word
        } else {
            return word.slice(0, -1)
        }
        
    }



    return (
        <>
            <div className="firstImput" >
                <input value={input} onChange={(e) => { setImput(e.target.value) }} ></input>
                <ul>
                    {sentense.map((e, i) => (
                        <li key={i}>{e}</li>
                    ))}
                </ul>

                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", position: "absolute", left: left, top: top, width: "200px", height: "200px" }} onMouseOver={() => newPosition()} >
                    <button>non mi puoi cliccare</button>

                </div>

                <div style={{ width: "300px", height: "300px", backgroundColor: `rgb(${red === '' ? 0 : red}, ${green === '' ? 0 : green}, ${blue === '' ? 0 : blue})` }}>
                    <h3 style={{ color: "white" }} >Scegli io tuo colore</h3>
                    <p style={{ color: "white" }}>R: "rosso" <input value={!isNaN(red)? red : red.slice(0, -1)} onChange={(e) => { setRed(e.target.value) }}></input></p>
                    <p style={{ color: "white" }}>G: "verde" <input value={!isNaN(green) ? green : green.slice(0, -1)} onChange={(e) => { setGreen(e.target.value) }}></input></p>
                    <p style={{ color: "white" }}>B: "blue" <input value={!isNaN(blue)? blue : blue.slice(0, -1)} onChange={(e) => { setBlue(e.target.value) }}></input></p>
                </div>

                <LabelImput posizione={position} funx={noNumber}/>

            </div>
        </>
    )

}