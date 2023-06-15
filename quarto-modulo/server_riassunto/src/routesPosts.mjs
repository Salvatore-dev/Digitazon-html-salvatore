// npm install axios 
import axios from 'axios'
// axios ci serve per gestire le chiamate http dal nostro server verso altri endpoint

import fs from 'fs'
// serve per la scrittura nei file

export const getPosts=(req,res)=>{
    //uso axios per fare una chiamata http all endpoint https://jsonplaceholder.typicode.com/posts
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response=>{
        res.send(response.data)
    }) 
    .catch(error=>{
        console.log(error)
        res.status(500).json(
        { 
            data: {},
            error: true,
            message: "errore nel recupero dei posts"
        })
    })
}

export const writeFile=(req, res) => {
    const data = { message: 'scrivo sul file una riga.' };
    fs.writeFile('db/file.json', JSON.stringify(data), (err) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'Errore nella scrittura del file.' });
      } else {
        res.json({ message: 'File scritto correttamente.' });
      }
    });
  };
  
  export const readFile=(req, res) => {
    fs.readFile('db/file.json', (err, data) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'Errore nella lettura del file.' });
      } else {
        const parsedData = JSON.parse(data.toString());
        res.json(parsedData);
      }
    });
  };
  

