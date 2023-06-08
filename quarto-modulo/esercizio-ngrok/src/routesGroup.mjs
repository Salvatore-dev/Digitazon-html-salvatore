// import fs from 'node:fs/promises' // si importa fs (filesystem) da node, si noti che si abilita il server alle promises, essenziale per permettere al servere di gestire chiamate asincrone da piu client nello stesso tempo (questo concetto necessita di un approfondimento)
import axios from 'axios'
// import students from '../db/students.json' assert { type: 'json' } // qui importiamo il contenuto del file json, dal database, si specifica con assert che il tipo è json, cosa necessaria
// import allStudents from '../db/digitazonAll.json' assert { type: 'json' }
// const DB_PATH = './db/digitazonAll.json' // per comodità si crea una variabile che identifica il path, si noti la diversità rispetto alla path di importazione: nell'importazione si specifica il path da dove si trova questo file dove scriviamo codice, nel secondo caso, con due "..", si specifica il path da dove la funzione è chiamata, cioè dal file index. prestare attenzione a questo particolare non così immediato

let students=[
  {
  name: "Claudio",
  surname: "De Paolis",
  secret: "er fijo de' a lupa"
  },
  {
  name: "Giada",
  surname: "Varri",
  secret: "il segreto del grande successo sta nel lavoro di squadra"
  },
  {
  name: "Salvatore",
  surname: "Tosich",
  secret: "Forza Napoli!"
  },
  {
  name: "Selima",
  surname: "Bascherini",
  secret: "AlWaiz Zlatan"
  },
  {
  name: "Emanuele",
  surname: "Cau",
  secret: "Ajo a Ippuntare"
  }
  ]


export const getGroup = (req, res) => {
  res.send(students)
  res.status(200)
}

export const getAll = async (req, res) => {
  let response;
  let all = []
  
  //tentativo chiamata al nostro stesso gruppo 
  try {
    response = await axios.get('https://878f-151-33-19-106.ngrok-free.app/digitazon/2023/02/group/3/students')
    response.data.forEach(element => {
      all.push(element)
    });
  } catch (error) {
    console.log('problema con il server del gruppo 1')
  }

  //tentativo chiamata al gruppo 1
  try {
    response = await axios.get('https://5e81-2001-b07-a9a-89a8-fc69-90ae-c7c4-8dbc.ngrok-free.app/digitazon/2023/02/group/1/students')
    response.data.forEach(element => {
      all.push(element)
    });
  } catch (error) {
    console.log('problema con il server del gruppo 1')
  }
     
  //tentativo chiamata al gruppo 2
  try {
    response = await axios.get('https://698d-37-162-141-71.ngrok-free.app/digitazon/2023/02/group/2/students')
    response.data.forEach(element => {
      all.push(element)
    });
  } catch (error) {
    console.log('problema con il server del gruppo 2')
  }

  //tentativo  chiamata al gruppo 4
    try {
      response = await axios.get('https://f151-93-41-116-144.ngrok-free.app/digitazon/2023/02/group/3/students')
      response.data.forEach(element => {
      all.push(element)
    });
    } catch (error) {
      console.log('problema con il server del gruppo 4')
  }
  
  res.send(all)
  res.status(200)
}




