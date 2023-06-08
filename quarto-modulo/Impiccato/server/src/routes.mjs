
const words = [
    "ciao",
    "sole",
    "mare",
    "computer",
    "programma",
    "maglia",
    "complicato",
    "sopravvivenza",
    "integrazione",
    "pizza",
    "amico",
    "verde",
    "acqua",
    "libro",
    "buono",
    "gatto",
    "gioco",
    "penna",
    "dolce",
    "cane",
    "amore",
    "riso",
    "letto",
    "frutta",
    "stella",
    "città",
    "festa",
    "film",
    "scuola",
    "vittoria"
];

//return Math.floor(Math.random() * (max - min + 1)) + min;

let words2 = words.sort((a, b) => a.length - b.length);
let nextindex = 0


export const newWord = (req, res) => { // da rivedere perche nextindex quando si resetta a un certo punto e undefind

    if (nextindex < words2.length) {
        res
            .send({
                data: words2[nextindex],
                index : nextindex,
                message: 'ho selezionato la parola'

            }).status(200)
        nextindex++
    } else {
        nextindex = 0
        res
        send({
            data: '',
            message: "gioco completato",
        }).status(200)
    }
}