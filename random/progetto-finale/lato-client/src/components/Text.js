import { useState, useEffect } from "react";
import axios from "axios";

export default function Text({ data, username, upDateFavorite, newfavorite }) {
  const [text, setText] = useState([]);
  const [disableCheck, setDisableCheck] = useState(false);
  const [controlcheck, setControlCheck] = useState({});
  const [user, setUser] = useState(username); // invece di stringa vuota
  const [favorites, setFavorites] = useState([]);


  useEffect(() => {
    if (newfavorite?.length >0) {
      setFavorites(newfavorite.map((el) => el.verse)) 
    }
  }, [newfavorite]);

  useEffect(() => {
    //setUser(username);
    // qui posso inserire la chiamata dei preferiti utente
    async function getFavorites() {
      if (user) {
        // invece di username
        try {
          const data = await axios.get(
            `http://localhost:8000/users/${username}/profile`
          );
          const result = data?.data?.data?.favoriteVerses;
          setFavorites(result.map((el) => el.verse));

          console.log("vedo i preferiti utente", result);
        } catch (error) {
          console.log("sono nella chiamata preferiti", error);
        }
      }
    }
    getFavorites();
  }, [user]); // invece di username
  console.log("controllo preferiti", controlcheck, user);

  async function sendFavorite(favorite) {
    if (username != "") {
      const selectedVerse = `${favorite?.bookabbrev}${favorite?.chapter},${favorite?.verse}`;
      if (favorites.includes(selectedVerse)) {
        try {
          const data = await axios.patch(
            `http://localhost:8000/users/${username}/profile/favorite`,
            {
              verse: selectedVerse,
              text: favorite?.text,
            }
          );
          const result = data.data;
          console.log("il risultato della remove", result);
          if (result.check) {
            setFavorites(result.data.map((el) => el.verse));
            upDateFavorite(result.data)
          }
        } catch (error) {
          console.log("sono nel chac della removeFavorite");
        }
      } else {
        try {
          const data = await axios.put(
            `http://localhost:8000/users/${username}/profile/favorite`,
            {
              verse: selectedVerse,
              text: favorite?.text,
            }
          );
          const result = data.data;
          console.log("visulalizzo il risultato", result);
          if (result.check) {
            setFavorites(result.data.map((el) => el.verse));
            upDateFavorite(result.data)
          }
        } catch (error) {
          console.log(error);
        }
      }
    }
  }

  useEffect(() => {
    setText(data);
  }, [data]);

  console.log("sono nel text", text);
  console.log("verifico il cambiamento preferiti", favorites);
  return (
    <div className="area-text">
      {text?.map((el, i) => (
        <div className="verse-search" key={i}>
          <input
            key={i + 100}
            style={{
              backgroundColor: favorites.includes(
                `${el.bookabbrev}${el.chapter},${el.verse}`
              )
                ? "red"
                : "green",
              display: !username && "none",
            }}
            type="submit"
            value={
              favorites.includes(`${el.bookabbrev}${el.chapter},${el.verse}`)
                ? "Rimuovi dai preferiti"
                : "Aggiungi ai preferiti"
            }
            name="select-favorite"
            onClick={() => sendFavorite(el)}
          />
          <p key={i}>
            <span key={i}>
              {`${el.bookabbrev}${el.chapter}`},{el.verse}:{" "}
            </span>
            {el.text}
          </p>
        </div>
      ))}
    </div>
  );
}
