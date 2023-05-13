import { useState } from "react";

function Square({ value, onSquareClick }) { // questo e il componente che si riferisce al bottone, prende due variabili attraverso il destractoring 
    return <button className="square" onClick={onSquareClick} >{value}</button>

}

export function Board() { // questo e l'elemtno che poi esporto
    const [xisNext, setXIsNext] = useState(true) // questo stato serve per alternare le x con o esprime valori bouleani
    const [squares, setSquares] = useState(Array(9).fill(null)) // creo uno stato, ipostato su 9 lementi tutti null (rappresenta il vaolre che si passa ad ogni bottone creato del gioco)


    function handleClick(i) { // questa funzione sara passata ai vari bottoni, prende in ingresso un numero che sara l'indice dellarray che mi identifica la casella cliccata
        if (squares[i] || calculateWinner(squares)) {
            return // qui ritorno la funzione anzi tempo, (dopo il click esco senza fare niente) quando la casella e gia cliccata (quindi ha un valore) o se ce un vincitore, perche la funzione torna o null  se non ce vincitore o un valore se c'e il vincitore
        }

        const nextSquares = squares.slice(); //creo una copia per preservare l'array originale che non deve essere modificato qui, per consentire anche di tracciare i cambiamenti
        if (xisNext) { //un bouleano che parte da true, quindi parte con x 
            nextSquares[i] = "X" // qui modifico il valore dellarray copia assegnado una x
        } else {
            nextSquares[i] = "O" // qui assegno un O
        }

        setSquares(nextSquares) // qui invece modifico, quando serve larray square

        setXIsNext(!xisNext) // risetto il bouleano ogni click alternando dunqu i segni
    }

    const winner = calculateWinner(squares); // richiamo la funzione e assegno il suo valore alla variabile (vedi infondo per leggere la dichiarazione della funzione)
    let status;
    if (winner) {
        status = 'Winner' + winner
    } else {
        status = 'Next player' + (xisNext ? 'X' : 'O')
    }

    return (
        <>
            <div className="status" >{status}</div>
            <div className="board-row">
                <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
                <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
                <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
            </div>
            <div className="board-row">
                <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
                <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
                <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
            </div>
            <div className="board-row">
                <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
                <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
                <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
            </div>
        </>


    )

}

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a]

        }

    }

    return null;

}