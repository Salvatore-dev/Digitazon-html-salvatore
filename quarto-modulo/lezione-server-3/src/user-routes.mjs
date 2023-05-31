import fs from 'node:fs/promises'
import users from '../db/users.json' assert { type: 'json' }

import axios from "axios"

const DB_PATH = './db/users.json'

let NEXT = Object
  .keys(users)
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
}

export const remove = async (req, res) => {
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
}
