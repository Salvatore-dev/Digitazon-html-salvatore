import fs from 'node:fs/promises' // si importa fs (filesystem) da node, si noti che si abilita il server alle promises, essenziale per permettere al servere di gestire chiamate asincrone da piu client nello stesso tempo (questo concetto necessita di un approfondimento)
import users from '../db/users.json' assert { type: 'json' } // qui importiamo il contenuto del file json, dal database, si specifica con assert che il tipo è json, cosa necessaria

const DB_PATH = './db/users.json' // per comodità si crea una variabile che identifica il path, si noti la diversità rispetto alla path di importazione: nell'importazione si specifica il path da dove si trova questo file dove scriviamo codice, nel secondo caso, con due "..", si specifica il path da dove la funzione è chiamata, cioè dal file index. prestare attenzione a questo particolare non così immediato

let NEXT = Object 
  .keys(users)
  .reduce((biggest, id) => biggest > id ? biggest : id, 0) // qui si crea una variabile che rappresenta l'ultimo elemento, rappresetnato dal numero id che si trova nella struttura dati, essenziale in caso di post. in particolare con il metodo keys abbiamo un array di chiavi dell'oggetto users, poi con reduce troviamo l'id con numero più grande
