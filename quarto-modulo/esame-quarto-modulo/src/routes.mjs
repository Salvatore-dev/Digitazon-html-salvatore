import axios from "axios";
import fs from "node:fs/promises";
import Photoazon from "../db/Potoazon.json" assert { type: "json" };

const DB_PATH = "./db/Potoazon.json";

function actuallyDate() {
  let currentData = new Date();
  let day = currentData.getDate();
  let month = currentData.getMonth() + 1;
  let year = currentData.getFullYear();
  let result = day + "/" + month + "/" + year;
  console.log(result);
  return result;
}
const actuallDay = actuallyDate();

export const newAlbum = async (req, res) => {
  let albums = Photoazon;
  let newKey = req.body.name;
  try {
    console.log(newKey);
    if (!albums[newKey]) {
      Photoazon[newKey] = req.body;
      Photoazon[newKey]["data-creazione"] = actuallDay;
      await fs.writeFile(DB_PATH, JSON.stringify(Photoazon, null, "  "));
      res.status(200).send("album creato");
    } else {
      res.send("nome album gia presente").status(200);
    }
  } catch (error) {
    console.log(error);
  }
};

export const allAlbums = async (req, res) => {
  try {
    const dati = await fs.readFile(DB_PATH);
    const parsedData = JSON.parse(dati.toString());
    res.send(parsedData).status(200);
  } catch (error) {
    console.log(error);
    res.send("problemi della lettura del file").status(500);
  }
};

export const removeAlbum = async (req, res) => {
  let albums = Photoazon;
  const albumToFind = req.params.name;
  try {
    if (albums[albumToFind]) {
      delete Photoazon[albumToFind];
      await fs.writeFile(DB_PATH, JSON.stringify(Photoazon, null, "  "));
      res.send("album cancellato").status(200);
    } else {
      res.send('album inesistente').status(200)
    }
  } catch (error) {
    console.log(error);
    res.send("problemi sulla modifica del file").status(500);
  }
};

export const searchAlbum = async (req, res) =>{
  const query = req.query.album
  console.log(query);
  try {
    if (Photoazon[query]) {
      const dati = await fs.readFile(DB_PATH);
      const parsedData = JSON.parse(dati.toString());
      res.send(parsedData[query]).status(200);
    } else {
      res
      .send('albun inesistente').status(200)
    }
    
  } catch (error) {
    console.log(error);
    res.send("problemi della lettura del file").status(500);
  }

}

export const updateAlbum = async (req, res) =>{
  let albums = {...Photoazon}
  const albumToFind = req.params.name;
  //console.log(albumToFind);
  //console.log(req.body);
  const toUpDate = req.body
  const Keys = Object.keys(req.body)
  //console.log(toUpDate[Keys])
  try {
    if (albums[albumToFind]) {
      for (let i = 0; i < Keys.length; i++) {
        const key = Keys[i];
        albums[albumToFind][key] = toUpDate[key]
      }
      //console.log(albums[albumToFind]);
      delete Photoazon[albumToFind];
      Photoazon[albums[albumToFind].name] = albums[albumToFind];
      

      await fs.writeFile(DB_PATH, JSON.stringify(Photoazon, null, "  "));
      res.send("album modificato").status(200);
    } else {
      res.send('album inesistente').status(200)
    }
  } catch (error) {
    console.log(error);
    res.send("problemi sulla modifica del file").status(500);
  }

}

export const searchPhoto = async (req, res) =>{
  const dati = await fs.readFile(DB_PATH);
  const albums = JSON.parse(dati.toString());
  //let albums = await fs.readFile(DB_PATH);
  const query = req.query.name
  console.log(query);
  const albumToFind = req.params.name;
  console.log(albumToFind);

  try {
    if (albums[albumToFind]) {
      const photo = albums[albumToFind].photos.filter(p=>p.nome==query)
      console.log(photo);
      if (photo.length >= 1) {
        res.send(photo).status(200);
      } else {
        res.send('foto inesistente').status(200);
      }
      
    } else {
      res
      .send('albun inesistente').status(200)
    }
    
  } catch (error) {
    console.log(error);
    res.send("problemi con la lettura del file del file").status(500);
  }
}

export const removePhoto = async (req, res) =>{
  const dati = await fs.readFile(DB_PATH);
  const albums = JSON.parse(dati.toString());
  const albumToFind = req.params.name;
  const photoToRemove = req.params.photo
  console.log(albumToFind, photoToRemove);

  try {
    if (albums[albumToFind]) {
      const photo = albums[albumToFind].photos.filter(p=>p.nome==photoToRemove)
      console.log(photo);
      if (photo.length >= 1) {
        let index = albums[albumToFind].photos.indexOf(photo[0])
        console.log(index);
        delete albums[albumToFind].photos[index]
        await fs.writeFile(DB_PATH, JSON.stringify(albums, null, "  "));
        res.send('foto eliminata').status(200);
      } else {
        res.send('foto inesistente').status(200);
      }
      
    } else {
      res
      .send('albun inesistente').status(200)
    }
  } catch (error) {
    console.log(error);
    res.send("errore con la lettura del file", error).status(500);
  }

}
