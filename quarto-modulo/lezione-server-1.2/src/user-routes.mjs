import fs from 'node:fs/promises' // si importa fs (filesystem) da node, si noti che si abilita il server alle promises, essenziale per permettere al servere di gestire chiamate asincrone da piu client nello stesso tempo (questo concetto necessita di un approfondimento)
import users from '../db/users.json' assert { type: 'json' } // qui importiamo il contenuto del file json, dal database, si specifica con assert che il tipo è json, cosa necessaria

const DB_PATH = './db/users.json' // per comodità si crea una variabile che identifica il path, si noti la diversità rispetto alla path di importazione: nell'importazione si specifica il path da dove si trova questo file dove scriviamo codice, nel secondo caso, con due "..", si specifica il path da dove la funzione è chiamata, cioè dal file index. prestare attenzione a questo particolare non così immediato

let NEXT = Object 
  .keys(users)
  .reduce((biggest, id) => biggest > id ? biggest : id, 0) // qui si crea una variabile che rappresenta l'ultimo elemento, rappresetnato dal numero id che si trova nella struttura dati, essenziale in caso di post. in particolare con il metodo keys abbiamo un array di chiavi dell'oggetto users, poi con reduce troviamo l'id con numero più grande


export const create = async (req, res) => { // exportiamo la funzione create in index, esegue put
  NEXT++ // incremento dell'ultimo id che diventa il prossimo da assegnare
  users[NEXT] = req.body // qui lo si crea un nuovo elemento in users, con id next come chiave e come valore il contenuto della rhiesta del chiamante, che si trova in (req = richiesta chiamante) e in (body = il contenuto) // vedi poi negli script il tipo di riciesta associato

  // never use sync, go the async way
  // fs.writeFileSync(DB_PATH, JSON.stringify(users, null, '  ')) // questa parte ci ricorda che quando il server e impegnato con una chiamata dal client deve poterla gestire in modo asincrono, e dunque si scarta questo esempio dato il metodo di scrittura file sincrono

  await fs.writeFile(DB_PATH, JSON.stringify(users, null, '  ')) // qui invece si procede in modo asincrono, con un await, combinato dall'importazione al primo rigo (approfondire). con questo comando si scrive il contenuto della post nel file, specificando il path (qui in variabile) e con la trasfomazione in stringa dell'oggetto adatto per il json
  res
    .status(201) // res dichiara la risposta, lo status indica il risultato dell'operazione (vedere lo schema dei risultati chiamate....)
    .send({
      message: 'user created' // con send, sempre legato a res, si manda il messaggio associato all0perazione di riuscita
    })
}

export const get = (req, res) => { // questa funzione rappresenta la chiamate read di un unico elemento identificato con id
  let user = users[req.params.id] // si assegna ad una variabile la richiesta specifica contraddistinta da numero id
  if (user) { // se la risora esiste
    res.send({ data: user }) // si restituisce un oggeto che ha come chiave data e come valore il contenuto richiesto
  } else { // altrimenti si restituisce un messaggio di specifico. si noti l'oggetto data vuoto, indicativo del fatto che non e stato trovato nulla, il true ad error  e il send 200 che indica che la rotta esiste ma non ha risorsa corrispondenza (questa scelta dello status è opinabile, scelta dello sviluppatore)
    res
      .status(200)
      .send({
        data: {},
        error: true,
        message: 'user not found'
      })
  }
}

export const getAll = (req, res) => { // questa chiamata restituisce tutto il contenuto della risorsa users
  res.send(users)
}

export const search = (req, res) => { // qui si imposta una ricerca
  const query = req.query // si memorizza in variabile il contenuto della ricerca
  let filtered = Object.values(users)
      .filter(u => u.name === query.name || u.surname === query.surname) // si memorizza in variabile il risultato di un metodo filter applicato su un array di valori su oggetto users. restituisce un valore di un name o surname che corrisponde alla query name o sur name, il primo che trova lo restituisce
  res.send(filtered) // si manda il risultato
}

export const update = async (req, res) => { // si imposta una put con una funzione asincrona che poi scrive la modifica su file
  let user = users[req.params.id] // si memorizza il contenuto dell'elemento corrispondente all'id di cui si richiede la modifica
  if (user) { // se esiste tale contenuto
    let newUser = { ...user, ...req.body } // con due spred si sommano i contenuti dell'elemento cercato con i parametri che si chiede di aggiungere
    users[req.params.id] = newUser // si assegna nell'oggetto, in corrspondenza dell'id richiesto i valori aggiornati e modificati 
    await fs.writeFile(DB_PATH, JSON.stringify(users, null, '  ')) // si procede, con un await alla strittura del file di tutto l'oggetto users con modifica avvenuta
    res.send(newUser) // si restituisce lo user modificato
  } else { // altimenti
    res
      .status(200) // stato positivo
      .send({ // si manda il contenuto del messaggio per user non trovato
        data: {},
        error: true,
        message: 'user not found'
      })
  }
}

export const remove = async (req, res) => { // si imposta una delete (si usa il termine remove perche il termine delete non puo essere utilizzato perche nativo e propio del linguaggio express) (non so si dice cosi) // si noti che quando si scrive su file si provede sempre con una funzione asincrona
  let user = users[req.params.id] // varibile dove si va a memorizzare il contenuto che corrispponde all'id richiesto
  if (user) { // se esiste il contunto da cancellare ... 
    delete users[req.params.id] // si cancella il contenuto richiesto
    await fs.writeFile(DB_PATH, JSON.stringify(users, null, '  ')) // si scrive il jason con il contenuto di users modificato
    res.status(200).end()
  } else {
    res
      .status(200)
      .send({
        data: {},
        error: true,
        message: 'user not found'
      })
  }
}
