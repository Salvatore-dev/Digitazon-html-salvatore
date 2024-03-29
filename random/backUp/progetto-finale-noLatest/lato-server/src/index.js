import express  from 'express'
import session from "express-session";

import 'dotenv/config' // per usare pocess.env nell'applicazione
import {run} from './mongoDB.mjs'

const app = express()
const port = 8000

// import cookieParser from "cookie-parser";
// app.use(cookieParser());

import  bodyParser from 'body-parser'
app.use(bodyParser.json())

import cors from 'cors'
//app.use(cors())
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
}));



import * as metadata from "./ruotesMetaData.mjs"
import { getChapter } from './routes-chapters.mjs'
import { getUser, login, logout, removeFavoritesVerse, signup, upDateFavoritesVerse } from './routes-users.mjs';
import { getKeyword, getVerse } from './ruotesSearches.mjs';

app.use(
  session({
    
    // configurazione del middleware poi serve login, logout middleware per controllare la permanenza
    name: `corriere`, // eventuale
    secret: process.env.SECRET_SESSION,
    resave: false,
    saveUninitialized: false, // true
    cookie: { 
      secure: false,
      // domain: 'localhost',
       httpOnly: true,
      maxAge: 60000 * 60
     }, // un minuto per il numero scelto
  })
);
console.log(process.env.SECRET_SESSION);
// c'e nella session uno user? // questa funzione deve essere posta nelle rotte che vogliamo proteggere
function sessionChecked(req, res, next) {
  console.log("verifico id", req.session.id);
  console.log('utente in sessione', req.session.user);
  if (req.session.user) {
    next();
  } else {
    res.status(403).send({
      error: true,
      message: "unauthorized user",
    });
  }
}
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/metadata/books', metadata.getBooks)
app.get('/metadata/versions', metadata.getVersions)
app.get('/metadata/indexes', metadata.getIndexVersion)

app.get('/books/:book/chapters/:chapter', getChapter)
app.get('/books/:book/chapters/:chapter/verses/:verse', getVerse)
app.get('/books/keywords/search', getKeyword)

app.post("/users/signup", signup)
app.post("/users/session", login)
app.delete("/users/session", sessionChecked,  logout) //sessionChecked,


// todo prendimi dal bd // questa rotta deve essere protetta da autorizzazione serve un middleware prima delle rotte da controllare
app.get("/users/:username/profile",  sessionChecked, getUser); // sessionChecked // domanda ad alberto in effetti restituisce un utente e potrebbe essere una get, passare username in chiaro?
app.put("/users/:username/profile/favorite", sessionChecked, upDateFavoritesVerse) //sessionChecked,
app.patch("/users/:username/profile/favorite", sessionChecked, removeFavoritesVerse) //sessionChecked, // /users/:username/profile


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
 run()
 //console.log(process.env.NAME_DB_MONGO);