import express from "express";
import session from "express-session";
const app = express();
const port = 3000;

import bodyParser from "body-parser";
app.use(bodyParser.json());

app.use(
  session({
    // configurazione del middleware poi serve login, logout middleware per controllare la permanenza
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false, maxAge: 600000 },
  })
);

// c'e nella session uno user? // questa funzione deve essere posta nelle rotte che vogliamo proteggere
function sessionChecked(req, res, next) {
  console.log(req.session.user);
  if (req.session.user) {
    next();
  } else {
    res.status(403).send({
      message: "utente non autorizzato",
    });
  }
}

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// di solito si prendono i dati dal database per effettuare una login
app.post("/users/session", (req, res) => {
  //console.log(req.body);
  const response = req.body;
  //console.log(response.password);
  if (response.username == "Salvo23" && response.password == "1234") {
    req.session.user = response.username;
    res.status(200).send({
      message: "utente autenticato",
    });
  } else {
    res.status(403).send({
      message: "utente non trovato",
    });
  }
});

// todo prendimi dal bd // questa rotta deve essere protetta da autorizzazione serve un middleware prima delle rotte da controllare
app.get("/users", sessionChecked, (req, res) => {
  // proteggiamo questa rotta con la funzione sessionCecked
  res.send("users");
});

app.delete("/users/session", (req, res) => {
  // deve cancellare l'utente dalla sessione
  req.session.destroy(function err() {
    res.status(200).send({
      message: "utente non loggato",
    });
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
