import fs from "node:fs/promises";
import bcrypt from "bcrypt";
import {findUser, insertUser, upDateFavorite } from "./mongoDB.mjs";
import session from "express-session";

const DB_PATH_USERS = "./db/users.json";
//const dati = await fs.readFile(DB_PATH_USERS);
//const users = JSON.parse(dati.toString());

async function getPasswordCrypted(password) {
  try {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    //console.log("Password criptata:", hashedPassword);
    return hashedPassword;
  } catch (error) {
    console.error("Si è verificato un errore:", error);
  }
}

async function comparePassword(PlaintTexPassword, hashedPassword) {
  try {
    const isMatch = await bcrypt.compare(PlaintTexPassword, hashedPassword);
    //console.log('Le password corrispondono?', isMatch);
    return isMatch;
  } catch (error) {
    console.error("Si è verificato un errore:", error);
  }
}
export const login = async (req, res) => {
  try {
    //console.log(req.body);
    const username = req.body.username;
    const password = req.body.password;
    //const dati = await fs.readFile(DB_PATH_USERS);
    //const users = JSON.parse(dati.toString());
    //console.log(response.password);
    //const usersNames = Object.keys(users)
    const user = await findUser(username)
    console.log(user);

    if (user) {
      const checkPassword = await comparePassword(
        password,
        user.password
      );
      if (checkPassword) {
        req.session.user = username;
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
    //const dati = await fs.readFile(DB_PATH_USERS);
    //const users = JSON.parse(dati.toString());
    const userToFind = req.body.username;
    console.log(userToFind);
    //const usersNames = Object.keys(users)
    const user = await findUser(userToFind)
    if (user) {
      res.status(200).send({
        data: user,
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
    console.log(userToAdd.password);

    const newUsername = userToAdd.username;
    const user = await findUser(newUsername)
    // const dati = await fs.readFile(DB_PATH_USERS);
    // const users = JSON.parse(dati.toString());
    //const usersNames = Object.keys(users)
    if (!user) {
      const cryptPassword = await getPasswordCrypted(userToAdd.password);
      userToAdd.password = cryptPassword;
      userToAdd["favoriteVerses"] = [];
      //users[newUsername] = userToAdd;
      insertUser(userToAdd)
      //await fs.writeFile(DB_PATH_USERS, JSON.stringify(users, null, "  "));
      res.status(201).send({
        message: "user created",
      });
    } else {
      res
        .status(200) // controllare status da restituire
        .send({
          data : {},
          error: true,
          message: "user already exists",
        });
    }
  } catch (error) {
    console.log(error);
    res
        .status(500) // controllare status da restituire
        .send({
          data : {},
          error: true,
          message: "server problems",
        });
  }
};

export const upDateFavoritesVerse = async (req, res) => {
  try {
    //const dati = await fs.readFile(DB_PATH_USERS);
    //const users = JSON.parse(dati.toString());
    const userToFind = req.body.username;
    const newfavorite = req.body.data;
    console.log(newfavorite);
    //const usersNames = Object.keys(users)
    const user = await findUser(userToFind)
    if (user) {
      const favorites = user.favoriteVerses;
      if (favorites.includes(newfavorite)) {
        res
        .status(200) // controllare status appropiato
        .send({
          data: {},
          error: true,
          message: "resource already exist",
        }).end()
        return
      }
      favorites.push(newfavorite);
      //user.favoriteVerses = favorites;
      //await fs.writeFile(DB_PATH_USERS, JSON.stringify(users, null, "  "));
      await upDateFavorite(userToFind, favorites)
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

export const removeFavoritesVerse = async (req, res) => {
  try {
    //const dati = await fs.readFile(DB_PATH_USERS);
    //const users = JSON.parse(dati.toString());
    console.log(req.body);
    const userToFind = req.body.username;
    const favoriteToRemove = req.body.data;
    console.log(favoriteToRemove);
    //const usersNames = Object.keys(users)
    const user = await findUser(userToFind)
    if (user) {
      const favorites = user.favoriteVerses;
      if (!favorites.includes(favoriteToRemove)) {
        res
        .status(200) // controllare status appropiato
        .send({
          data: {},
          error: true,
          message: "resource not found",
        }).end()
        return
      }
      console.log(favorites);
      favorites.splice(favorites.indexOf(favoriteToRemove), 1);
      //user.favoriteVerses = favorites;
      //await fs.writeFile(DB_PATH_USERS, JSON.stringify(users, null, "  "));
      await upDateFavorite(userToFind, favorites)
      res
        .status(200) // controllare status appropiato
        .send({
          data: favorites,
          message: "modified resource",
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
