import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Text({
  data,
  username, // da lasciare
  upDateFavorite,
  newfavorite, // da lasciare
  controlKeyword, // inutile da lascia re dopo la modifica
  controlSession,
  keyword
}) {
  const [text, setText] = useState([]);
  const [user, setUser] = useState(""); // invece di stringa vuota // da lasciare
  const [favorites, setFavorites] = useState([]);
  const [checkUpdate, setCheckUpdate] = useState(true)

  useEffect(() => {
    if (newfavorite?.length > 0) {
      setFavorites(newfavorite.map((el) => el.verse));
    }
  }, [newfavorite]);
  useEffect(() => {
    setUser(username);
  }, [username]);

  async function sendFavorite(favorite) {
    axios.defaults.withCredentials = true
    if (user) {
      setCheckUpdate(false)
      const selectedVerse = `${favorite?.bookabbrev}${favorite?.chapter},${favorite?.verse}`;
      if (favorites.includes(selectedVerse)) {
        try {
          const data = await axios.patch(
            `http://localhost:8000/users/${user}/profile/favorite`,
            {
              verse: selectedVerse,
              text: favorite?.text,
            }
          );
          const result = data.data;
          console.log("il risultato della remove", result);
          if (result.check) {
            setFavorites(result.data.map((el) => el.verse));
            upDateFavorite(result.data);
            setCheckUpdate(true)
          }
        } catch (error) {
          console.log("sono nel chac della removeFavorite", error);
          setCheckUpdate(false) //vedere se funziona
        }
      } else {
        try {
          const data = await axios.put(
            `http://localhost:8000/users/${user}/profile/favorite`,
            {
              verse: selectedVerse,
              text: favorite?.text,
            }
          );
          const result = data?.data;
          console.log("visulalizzo il risultato", result);
          if (result.check) {
            setFavorites(result.data.map((el) => el.verse));
            upDateFavorite(result.data);
            setCheckUpdate(true)
          }
        } catch (error) {
          console.log(error);
          setCheckUpdate(false) // vedere se funziona
        }
      }
      
    }
  }

  useEffect(() => {
    //setText([])
    console.log("''''''''''''''", data);
    setText(data);
  }, [data]);

  console.log("sono nel text", text);
  console.log("verifico il cambiamento preferiti", favorites);
  return (
    <> 
    {(!controlKeyword && text)? (
          <h1>{`${text[0]?.bookabbrev}${text[0]?.chapter}`}</h1>
        ):
        <h1>{`Risultato per la parola-chiave: ${keyword}`}</h1>
        }
      <div className="area-text">
        {
          text?.map((el, i) => (
            <div className="verse-search" key={i}>
              <input
                key={i + 100}
                style={{
                  backgroundColor: favorites.includes(
                    `${el.bookabbrev}${el.chapter},${el.verse}`
                  )
                    ? "red"
                    : "green",
                  display: !controlSession && "none",
                  pointerEvents: !checkUpdate && "none"
                }}
                type="submit"
                value={
                  favorites.includes(
                    `${el.bookabbrev}${el.chapter},${el.verse}`
                  )
                    ? "Rimuovi dai preferiti"
                    : "Aggiungi ai preferiti"
                }
                name="select-favorite"
                onClick={() => sendFavorite(el)}
              />
              {controlKeyword ? (
                <p key={i}>
                  <span key={i}>
                    {`${el.bookabbrev}${el.chapter}`},{el.verse}:{" "}
                  </span>
                  {el.text}
                </p>
              ) : (
                <p key={i}>
                  <span
                    key={i}
                    style={{ verticalAlign: "super", fontSize: "10" }}
                  >
                    {el.verse}{" "}
                  </span>{" "}
                  {el.text}
                </p>
              )}
            </div>
          ))}
      </div>
    </>
  );
}
