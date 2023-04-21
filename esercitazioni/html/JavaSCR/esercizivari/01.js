/*
Ex 1

Creare un array che è composto da 3 oggetti, che rappresentano dei triangoli, e avranno le proprietà base e altezza (numeri).
Crea quindi 3 oggetti che rappresentano 3 rettangoli con le caratteristiche indicate, mettili in un array.
Cicla questo array SIA con un foreach PRIMA che con un for DOPO, per stampare l'area di ogni rettangolo (ad ogni iterazione)
*/

//algoritmo 
//creo le variabili richieste
// con un for each
//  foreach su arry, gli passo la funzione che per ogni elemento (triangle)
//      creo la variabile area
//      assegno ad area  il rsisultato dell'operazione triangle.base * tringle.altezza il tutto /2
//      stampo una scritta in bt con area 

// con un for
//      inposto il cilclo sulla lungnhezza dell'array
//      creo la variabile area=o
//      per ogni interazzione calcolo area richiamngo le'elemento array[i], accedendo alla base (.base) e lo molticplico con
//      con l'altezza, quindi array[i].altezza , quindi il risultato /2, naturalmente assegnado il il risultato alla variabile area
//      stampo (nel ciclo la stringa bt con l'area ottenuta)

let array=[]

let t1 ={
    base: 20,
    altezza: 10
}

let t2 = {
    base: 25,
    altezza: 20
}

let t3 ={
    base: 15,
    altezza: 25
}
array.push(t1)
array.push(t2)
array.push(t3)

console.log(array);

//  foreach su arry, gli passo la funzione che per ogni elemento (triangle)
//      creo la variabile area
//      assegno ad area  il rsisultato dell'operazione triangle.base * tringle.altezza il tutto /2
//      stampo una scritta in bt con area 
array.forEach(function(triangle, i) {
    const area = (triangle.base * triangle.altezza) /2
    console.log(`il trinagolo ${i+1} ha la'area di ${area}`); 
})

//con un for
//      inposto il cilclo sulla lungnhezza dell'array
//      creo la variabile area=o
//      per ogni interazzione calcolo area richiamngo le'elemento array[i], accedendo alla base (.base) e lo molticplico con
//      con l'altezza, quindi array[i].altezza , quindi il risultato /2, naturalmente assegnado il il risultato alla variabile area
//      stampo (nel ciclo la stringa bt con l'area ottenuta)

for (let i = 0; i < array.length; i++) {
    let area = array[i].base * array[i].altezza / 2
    console.log(`il trinagolo ${i+1} ha l'area di ${area}`);
}