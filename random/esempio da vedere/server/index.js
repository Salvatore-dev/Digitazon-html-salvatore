const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const fs = require("fs/promises");

app.use(cors());
app.use(bodyParser.json());

const lista_articoli = [];

app.get("/lista_articoli", async (req, res) => {
  try {
    //chiamata al database
    const articoli = lista_articoli;
    res.status(200).send(articoli);
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
});

app.get("/articolo/:id_articolo", async (req, res) => {
  try {
    console.log(req.params);
    const id = req.params.id_articolo;
    const art = lista_articoli.find((item) => item.id_articolo == id);
    res.status(200).send(art);
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
});

app.post("/prova_post", async (req, res) => {
  try {
    const data = await req.body;
    console.log(data);
    const nome = data.nome;
    console.log(nome);
    res.status(200).send("ok");
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
});

app.post("/aggiorna_articolo", async (req, res) => {
  try {
    const data = await req.body;
    let art = lista_articoli.find((e) => e.id_articolo == data.id_articolo);
    console.log("titolo prima della modifica: " + art.titolo);
    art.titolo = data.titolo;

    console.log("titolo dopo modifica: " + art.titolo);
    // console.log(nome);
    res.status(200).send(art);
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
});

app.post("/scrivi_articolo", async (req, res) => {
  try {
    const data = await req.body;
    lista_articoli.push(data);
    await fs.writeFile("lista_articoli.json", JSON.stringify(lista_articoli));
    res.status(200).send("articolo inserito");
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
});

app.get("/leggi_articolo", async (req, res) => {
  try {
    const art = await fs.readFile("lista_articoli.json");
    console.log(art);
    res.status(200).send(art.toJSON());
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
});


app.get('/prendi_dati/:password', async (req,res) => {
  try{
    const passData = req.params['password'];
    const pass = '1234';
    if(passData === pass){
      res.status(200).send('password corretta');
    }else{
      res.status(500).send('password errata');
    }
    // const art = await fs.readFile("lisa_articoli.json");
    // const json = art.toString('utf8');
    // res.status(200).send(json);
  }catch (e) {
    console.log(e);
    res.status(500).send(e.toString());
  }
});

app.listen(8000, () => console.log("server online"));
