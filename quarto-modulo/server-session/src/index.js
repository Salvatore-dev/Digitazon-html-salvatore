import express from "express";
import session from "express-session";
//import fs from "node:fs/promises";
import fs from 'fs'
import users from "../DB/users.json" assert { type: "json" };
import "dotenv/config"; //process.env inizia a funzionare, non devo importare sempre il file .env

const app = express();
const port = 3000;

import bodyParser from "body-parser";
import { readFile } from "node:fs";
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false })); // per poter utilizzare l'html con il form per la login.

// documentazione dettagliata: https://github.com/expressjs/session#options
// per utilizzare la libreria.
app.use(
  session({
    secret: "keyboard cat", // stringa del middleware per marcare le chiamate
    resave: false,
    cookie: { maxAge: 60000 },
  })
);

// c'è uno user nella session?
// questo middleware sarà affiancato solo a determinate rotte come /users
function sessionChecked(req, res, next) {
  console.log(req.session.user);

  if (req.session.user) {
    next();
  } else {
    res.status(403).send({
      message: "not authorized",
    });
  }
}

// la sessione è il range nel quale o si è autenticati
// o autorizzati.

//endpoint necessari:
// /login
// /logout
// middleware per controllare permanenza utente nella sessione.

// body: user e pass
// sono uguali a ciò che ci aspettiamo
//   se uguali status 200 e message: user authenticated
//   se diversi status 403 e message: user non trovato
app.post("/users/session", (req, res) => {
  let request = req.body;
  if (
    request.username == users.username &&
    request.password == users.password
  ) {
    console.log(users.username);
    req.session.user = request.username; //nella sessione abbiamo appena inserito questo utente
    res.send({
      message: "user authenticated",
    });
  } else {
    res.status(403).send({
      message: "user not found",
    });
  }
});

// app.post("/users/signup", (req, res) => {
//   let res = {}
//   fs.readFile("./DB/users.json", (err, data) => {
//     if (err) {
//       console.log(err.message);
//     } else {
//       res = JSON.parse(data);
//       //console.log(user);
//     }
//     console.log(res);
//     res.send(res).status(200)
//   });

  
  app.post("/users/signup", (req, res) => {
    users.push(req.body)
    fs.writeFile("./DB/users.json", JSON.stringify(users, null, "  "),(err, data) => {
        if (err) {
          console.log("siamo nell if");
          res
          .status(404).end()
        } else {
          res
            .send('utente creato')
            .status(208)
        }
      });


    //  fs.readFile("./DB/users.json", (err, data) => {
    //   if (err) {
    //     console.log("siamo nell if");
    //     res
    //     .status(404).end()
    //   } else {
    //     const result = JSON.parse(data.toString());
    //     console.log(res);
    //     res.send(result).status(200).end()
    //   }
    // });

  // try {
  //   await fs.writeFile("./DB/users.json", JSON.stringify(user, null, "  "));
  //   res
  //     .status(201) //creato risorsa server side
  //     .end();
  // } catch (error) {
  //   console.log(error);
  // }
});

// todo: prendere users da database.
// sarà la rotta da proteggere con AUTORIZZAZIONE.
// serve una funzione che rappresenterà il middleware: controlleremo
// la sessione alla ricerca dell'utente

app.get("/users", sessionChecked, async (req, res) => {
  res.send(users);
});

app.delete("/users/session", (req, res) => {
  req.session.destroy(function err() {
    res.send({
      message: "user has logged out",
    });
  });
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
