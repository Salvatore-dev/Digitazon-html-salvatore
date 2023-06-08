function incrementaValoreNumerico(valore) {
    let valoreIncrementato = parseInt(valore);
    
    // Incrementa il valore di 1
    valoreIncrementato += 1;
    
    // Formatta il valore incrementato a quattro cifre
    valoreIncrementato = valoreIncrementato.toString().padStart(4, "0");
    
    return valoreIncrementato;
  }
  
  // Esempio di utilizzo
  let valoreCorrente = "0000";
  
  // Incrementa il valore corrente
  //valoreCorrente = incrementaValoreNumerico(valoreCorrente);
  console.log(valoreCorrente);

  for (let i = 0; i < 9999; i++) {
    valoreCorrente = incrementaValoreNumerico(valoreCorrente);
    console.log(valoreCorrente);
  }

  let i =0
 while (i>9999) {

    // il mio codice
    
    function incrementindex(n) {
        return n+1
    }
    i = setInterval(incrementindex(i), 500)
 }