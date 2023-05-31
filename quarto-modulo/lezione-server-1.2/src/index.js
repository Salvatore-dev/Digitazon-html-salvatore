import express from 'express'  // qui si importa la libreria express, si usa una sintassi diversa rispetto alla default, (require) vedi jsonpack si inseririsce il type module
const app = express()
const port = 3000

import bodyParser from 'body-parser' // si importa questa libreria per parsare le stringhe nei post e nei put, si installa poi in terminale npm install body-parser
app.use(bodyParser.json()) //va insieme al precedente


import * as user from './user-routes.mjs' // si importano tutti gli elementi dal path e si da loro il nome user attraverso "as"
import * as todo from './todo-routes.mjs' // come sopra da file diverso

app.get('/users', user.getAll) // chiamata get (read) si danno due parametri, una path (la rotta, che e una convensione, l'indirizzo dove si fa quella chiamata), e la funzione getAll che legata all'import "as user"
app.get('/users/search', user.search)
app.get('/users/:id', user.get) // in particolare vedere il path, :id e considerata una variabile, si accede al percorso users/{id} dove id è un numero che corrisponde all'elemento con id desiderato
app.put('/users/:id', user.update) // chiamatu put (update) si aggiorna un elemento che si trova la path specifico, contrassegnato con id
app.delete('/users/:id', user.remove) // chiamata delete (delete), si cancella l'elemento associato alla rotta specifica
app.post('/users', user.create) // chiamata post (create) , crea un elemento nuovo nella risorsa users, in questo caso esiste necessita di assegnare un id nuovo ed univoco, lastid + 1 (per questo vedi implementazione della funzione create)

// ecco dunque un esempio di CRUD (C = create [post]; R = read[get]; U = update[put]; D = delete [delete])

app.get('/todos', todo.getAll)
app.get('/todos/search', todo.search)
app.get('/todos/:id', todo.get)
app.put('/todos/:id', todo.update)
app.delete('/todos/:id', todo.remove)
app.post('/todos', todo.create)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`) // stringhe di default che associano il temrminale alla portasopra indicata all'inizio pagina
})
