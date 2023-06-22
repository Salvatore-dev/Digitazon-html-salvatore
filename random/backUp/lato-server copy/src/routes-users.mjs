import fs from "node:fs/promises";
import session from "express-session";
import users from "../db/users.json" assert { type: "json" };

const DB_PATH_USERS = "./db/users.json";
//const dati = await fs.readFile(DB_PATH_USERS);
//const users = JSON.parse(dati.toString());
export const login = async (req, res) => {
  try {
    //console.log(req.body);
    const response = req.body;
    const dati = await fs.readFile(DB_PATH_USERS);
    const users = JSON.parse(dati.toString());
    //console.log(response.password);
    if (
      response.username == users[response.username].username &&
      users[response.username].password
    ) {
      req.session.user = response.username;
      res.status(200).send({
        message: "authenticated user",
      });
    } else {
      res.status(403).send({
        data: {},
        error: true,
        message: "user not found",
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const logout = async (req, res) => {
  try {
    // deve cancellare l'utente dalla sessione
    req.session.destroy(function err() {
      res.status(200).send({
        message: "user not logged in",
      });
    });
  } catch (error) {
    console.log(error);
  }
};

export const getUser = async (req, res) => {
  try {
    const dati = await fs.readFile(DB_PATH_USERS);
    const users = JSON.parse(dati.toString());
    const userToFind = req.body.username;
    console.log(userToFind);
    if (users[userToFind]) {
      res.status(200).send({
        data: users[userToFind],
        message: "user datails",
      });
    } else {
      res
        .status(200) // controllare status appropiato
        .send({
          data: {},
          error: true,
          message: "user not found",
        });
    }
  } catch (error) {
    console.log(error);
  }
};

export const signup = async (req, res) => {
  try {
    const userToAdd = req.body;
    const newUsername = userToAdd.username;
    const dati = await fs.readFile(DB_PATH_USERS);
    const users = JSON.parse(dati.toString());
    if (!users[newUsername]) {
      users[newUsername] = userToAdd;
      await fs.writeFile(DB_PATH_USERS, JSON.stringify(users, null, "  "));
      res.status(201).send({
        message: "user created",
      });
    } else {
      res
        .status(200) // controllare status da restituire
        .send({
          message: "user already exists",
        });
    }
  } catch (error) {
    console.log(error);
  }
};

export const upDateFavoritesVerse = async (req, res) => {
  try {
    const dati = await fs.readFile(DB_PATH_USERS);
    const users = JSON.parse(dati.toString());
    const userToFind = req.body.username;
    const newfavorite = req.body.data;
    console.log(newfavorite);
    if (users[userToFind]) {
      const favorites = users[userToFind].favoriteVerses;
      favorites.push(newfavorite); // gestire richiesrta di due vavoriti uguali
      users[userToFind].favoriteVerses = favorites;
      await fs.writeFile(DB_PATH_USERS, JSON.stringify(users, null, "  "));
      res
        .status(200) // controllare status appropiato
        .send({
          data: favorites,
          message: "resource Added",
        });
    } else {
      res
        .status(200) // controllare status appropiato
        .send({
          data: {},
          error: true,
          message: "user not found",
        });
    }
  } catch (error) {
    console.log(error);
  }
};
