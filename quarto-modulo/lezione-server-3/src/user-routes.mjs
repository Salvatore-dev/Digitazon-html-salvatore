import fs from 'node:fs/promises'
import users from '../db/users.json' assert { type: 'json' }
import usersSign from '../db/users-registred.json' assert { type: 'json' }
import axios from "axios"

const DB_PATH = './db/users.json'
const DB_PATH_SIGN = './db/users-registred.json'

const myServerKey = "Salvo"

let NEXT = Object
  .keys(users)
  .reduce((biggest, id) => {
    return biggest > parseInt(id, 10) ? biggest : parseInt(id, 10)
  }, 0)

let IdSign = Object
  .keys(usersSign)
  .reduce((biggest, id) => {
    return biggest > parseInt(id, 10) ? biggest : parseInt(id, 10)
  }, 0)

export const create = async (req, res) => {
  NEXT++
  async function callUser(id) {
    const response = await axios.get(`https://fakestoreapi.com/users/${id}`)
    const UpData = response.data
    //console.log("\n" + JSON.stringify(UpData, null, '  ') + "\n");
    if (UpData) {
      let upUser = {
        "username": UpData.username,
        "email": UpData.email,
        "password": UpData.password,
        "address": UpData.address.city + ", " + UpData.address.street + ", " + UpData.address.number
      }
      return upUser
    } else {
      return {}
    }
  }
  //console.log(req.headers);
  let result = await callUser(NEXT)
  users[NEXT] = { ...req.body, ...result }

  // never use sync, go the async way
  // fs.writeFileSync(DB_PATH, JSON.stringify(users, null, '  '))

  await fs.writeFile(DB_PATH, JSON.stringify(users, null, '  '))

  res
    .status(201)
    .send({
      message: 'user created'
    })
}

export const get = (req, res) => {
  let user = users[req.params.id]
  if (user) {
    res.send({ data: user })
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

export const getAll = (req, res) => {
  res.send(users)
}

export const search = (req, res) => {
  const query = req.query
  let filtered = Object.values(users)
    .filter(u => u.name === query.name || u.surname === query.surname)
  res.send(filtered)
}

export const update = async (req, res) => {

  if (req.headers.authorization === myServerKey) {
    let user = users[req.params.id]
    if (user) {
      let newUser = { ...user, ...req.body }
      users[req.params.id] = newUser
      await fs.writeFile(DB_PATH, JSON.stringify(users, null, '  '))
      res.send(newUser)
    } else {
      res
        .status(200)
        .send({
          data: {},
          error: true,
          message: 'user not found'
        })
    }
  } else {
    res
      .status(401)
      .send({
        data: {},
        error: true,
        message: "Sorry, you don't have authorization"
      })
  }

}

export const remove = async (req, res) => {

  //console.log(req.headers.authorization);

  if (req.headers.authorization === myServerKey) {
    let user = users[req.params.id]
    if (user) {
      delete users[req.params.id]
      await fs.writeFile(DB_PATH, JSON.stringify(users, null, '  '))
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

  } else {
    res
      .status(401)
      .send({
        data: {},
        error: true,
        message: "Sorry, you don't have authorization"
      })
  }

}

/// esercizio 2

export const signIn = async (req, res) => { // distinguere singUp e signIn // piu indicato signUp
  IdSign++

  const addUser = {
    logged: false
  }

  let UsersNames = Object.values(usersSign).map(us => us.username) // cosi ottengo un array di username // in questo codice faccio 2 cicli si puo migliorare vedei riga 159 // magari posso usare una filter // oppure ordinare l'array ma ... // creare una mappa (oggetto dove ci sono solo gli username{"username": true}) che contiene solo chiavi che sono username che ha come chiavi lo username e tenere sincronizzati gli elementi serve per velocizzare la ricerca quindi il controllo dell'esistenza username

  //console.log("\n" + UsersNames + "\n");
  //console.log(UsersNames.includes(req.body.username));

  if (!UsersNames.includes(req.body.username)) {
    usersSign[IdSign] = { ...req.body, ...addUser }
    res
      .status(201)
      .send({
        data: {
          id: IdSign // informazione utile da restituire l'utente
        },
        message: "utente creato"
      })
    await fs.writeFile(DB_PATH_SIGN, JSON.stringify(usersSign, null, '  '))
  } else {
    res
      .status(409) // da 406 a 409 ... vedi differenze 409 la risorsa gia esiste
      .send({
        error: true,
        message: "unsername gia presente, per favore riprova"
      })
  }
}

// DB_PATH_SIGN

// usersSign // nome oggetto

export const logIn = async (req, res) => { // questa funzione si occupa del login di un utente ok

  let query = req.query // mi prendo il contenuto della query, ci sono due parametri, username e passaword
  //console.log(query);
  const Keys = Object.keys(usersSign) // ottengo un array di chiavi dell'oggetto usersSign, sono id, necessari per l'identificazione dell utente
  let dataToComplete = { // salvo la parte dati mancante la struttura dell'oggetto necessaria poi per il confronto // parte della soluzione che ho trovato un po vacillante, perche devo stare non devo accettare cambiamenti struttura dati che alterino il risultato del confronto
    logged: false
  }
  const toFind = JSON.stringify({ ...req.query, ...dataToComplete }) // ripristino un userSign
  //console.log(JSON.stringify(usersSign[Keys[3]]) === toFind); // verifico allo users specifico se viene letta la corrispondenza ok
  //console.log(JSON.stringify(toFind));
  //console.log(JSON.stringify(usersSign[Keys[3]]).includes(JSON.stringify(query.password))); // con includes non risponde come dovrebbe, se inserisco .password va bene ma se metto semplicemente query non va. si potrebbe implementare il controllo con due include username e passaword legati da &&, ma ho scelto altra strada
  //console.log(JSON.stringify(query));

  let checkUser = Object.values(usersSign)
    .filter(n => n.username === query.username && n.password === query.password) // verifico se nella query esiste lo username e la password altrimento ho un array vuoto
  // console.log('---------------------');
  // console.log(checkUser);
  // console.log('---------------------');

  // trovo l'id dellutente che si e loggato
  let result = false // variabile dove ho memoria dell'id se user in elenco, parte da false
  for (let i = 0; i < Keys.length; i++) { // itero su oggetto partendo da array di chiavi
    const el = JSON.stringify(usersSign[Keys[i]]) // memorizzo i dati di uno user in una stringa
    if (el === toFind) {
      result = Keys[i] // confrontando le due stringhe se sono unguali mi prendo la chiave del users loggato altrimenti rimane false
    }
  }
  //console.log(result);
  if (result) { // 
    usersSign[result].logged = true // essegno true a logged se trovo la chiave
    await fs.writeFile(DB_PATH_SIGN, JSON.stringify(usersSign, null, '  ')) // procedo con la modifica del file
    res
      .status(200)
      .send({
        message: "utente loggato"
      })
  } else {
    if (checkUser.length > 0) { // nel caso l'utente e gia loggato allora trovo la corrispondenza nei valori conun array che contiente l'oggetto username e password
      res
        .status(200)
        .send({
          message: "Sei gia loggato"
        })
    } else { // altrimenti rimane solo la possibilita che password o username siano sbagliati
      res
        .status(401) // non autorizzato
        .send({
          error: true,
          message: "Spiacente, inserici username o password corretti"
        })
    }
  }

}

// DB_PATH_SIGN

// usersSign // nome oggetto

export const getSessionUser = async (req, res) => {

  //console.log(req.params);
  const user = usersSign[req.params.id]

  //console.log(user);

  // creo una funzione che mi slogga lutente
  async function noLogged() {
    user.logged = false
    const result = { ...usersSign, ...user }
    await fs.writeFile(DB_PATH_SIGN, JSON.stringify(result, null, '  '))

  }
  if (user) {
    if (user.logged === true) {
      setTimeout(noLogged, 60000)
      res
        .status(200)
        .send({
          data: { user },
          message: "utente in sessione"
        })
    } else {
      res
        .status(200)
        .send({
          data: {},
          error: true,
          message: "utente non in sessione"
        })
    }
  } else {
    res
      .status(200)
      .send({
        message: "utente inesistente"
      })

  }
}