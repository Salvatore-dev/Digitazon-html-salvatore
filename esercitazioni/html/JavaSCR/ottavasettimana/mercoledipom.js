function countUndefinedKeys(falsey) {
    let countFalsey=0
    Object.keys(falsey).forEach(function (k) {
      if (falsey[k] == 'null' || falsey[k] == 'undefined') {
        countFalsey++   
      }
    });
    return countFalsey
  }

  const falseyValues = {1:'null', 2:'false',3:'empty string', 4:'undefined', 5:'0', 6:'NaN'}
  console.log(countUndefinedKeys(falseyValues));

  
  //spiegazione differenze chiamata
  object[key]   // > in questo caso quando object è un array (come trasformato con Object.keys())
  object.key    // > normale chiamata del valore corrispondente alla chiave in un oggetto. 
  
  // esempio di funzione con operatore ternario
  function count2(o) {
    return Object.keys(o).reduce((sum, key) => key == null ? sum + 1 : sum, 0)
  }

  
  
  //traduzione della costruzione con operatore ternario (più lunga ma equivalente)
  function count2(o) {
    return Object.keys(o).reduce((sum, key) => {
      if (key == null) {
        return sum + 1
      } else {
        return sum
      }
    }, 0)
  }

// altro esempio per comprendere il concetto. 
  let keys = Object.keys(obj)
  for (let index = 0; index < keys.length; index++) {
    const key = keys[index];
    console.log(obj.key)
  }