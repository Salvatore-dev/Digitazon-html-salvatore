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

export const signIn = async (req, res) => {
  IdSign++

  // DB_PATH_SIGN

  // usersSign // nome oggetto

  // abbiamo un id di riferimento
  // dobbiamo tener conto dello stesso username se e uguale restituire un messaggio che specifica il problema

  // se l'utente e gia registrato? 

  //console.table(Object.values(usersSign)[0].username);

  let UsersNames = Object.values(usersSign)

  console.log("\n" + UsersNames + "\n");

  if (UsersNames.length > 0) {
    for (let i = 0; i < UsersNames.length; i++) {
      const usName = UsersNames[i].username
      // console.log("\n" + usName + "\n");
      // console.log("\n" + typeof usName + "\n");
      // console.log("\n" + req.body + "\n");

      if (!usName == req.body.username) {
        usersSign[IdSign] = { ...req.body }
        res
        .status(200)
        .send({
          message : "utente creato"
        })
        await fs.writeFile(DB_PATH_SIGN, JSON.stringify(usersSign, null, '  '))
      }
    }
    console.log(usersSign[IdSign]);

    res
      .send(UsersNames)
      .status(203)
  // } else{
  //   usersSign[IdSign] = { ...req.body }
  //   res
  //   .status(202)
  //   .send({
  //     message : "utente creato"
  //   })

  //   await fs.writeFile(DB_PATH_SIGN, JSON.stringify(usersSign, null, '  '))
  // }
}

// DB_PATH_SIGN

  // usersSign // nome oggetto

  // export const logIn = async (req, res) => {

  //   let query = req.query

  //   let filter = Object.values(usersSign)
  //     .filter(n =>n.username === query.username && n.password === query.password)

  //     console.log(filter);

  //     if (filter.length>0) {
  //       res
  //       .status(200)
  //       .send(
  //         filter
  //       )
  //     } else {
  //       res
  //       .status(200)
  //       .send({
  //         message: "immetti username o password corretti"
  //       })
  //     }
      


  // } 