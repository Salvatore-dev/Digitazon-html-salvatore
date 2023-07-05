import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function UserProfile({ profile, profileSession, newFavorite, upDateFavorite}) {
  const [username, setUsername] = useState("");
  console.log("sono nella user verifico profile", profile);
  const [checkSession, setCheckSession] = useState(false);
  const [favorites, setFavorites] = useState(null);

  useEffect(()=>{
    console.log("sono nella use effetct, new favorites", newFavorite);
    if (newFavorite?.length > 0 ) {
      console.log("sono nella use effetct, new favorites 2", newFavorite);
      setFavorites(newFavorite)
    }
  }, [newFavorite])

  
  useEffect(() => {
    setUsername(profile);
  }, [profile]);

  useEffect(() => {
    console.log("profile session", profileSession);
    setCheckSession(profileSession);
  }, [profileSession]);

  useEffect(() => {
    async function sendUsername(params) {
      try {
        if (checkSession) {
          const data = await axios.get(
            `http://localhost:8000/users/${username}/profile`
            // { withCredentials: true }
          );
          const result = data?.data?.data?.favoriteVerses;
          console.log("controllo qui sono in attesa di risposta",  result);
          setFavorites(result);
        } else {
          console.log("utente non in sessione");
        }
      } catch (error) {
        console.log(error);
      }
    }
    sendUsername();
  }, [profileSession]);

  async function removeFavorite(favorite) {
    if (username) {
      try {
        const data = await axios.patch(
          `http://localhost:8000/users/${username}/profile/favorite`,
          {
            verse: favorite?.verse,
            text: favorite?.text,
          }
        );
        const result = data.data
        console.log("il risultato della remove", result);
        if (result.check) {
          const a = result.data.map((el) => el.verse)
          setFavorites(result.data);
          upDateFavorite(result.data)
          console.log("controllo cosa setto", result.data);
        }
      } catch (error) {
        console.log("sono nel catch del remove favorite");
      }
    }
  }
console.log("controllo favorites in user", favorites);
  return (
    <div className="user-detail">
      {favorites ? (
        <div>
          <h2>Benvenuto {profile}</h2>
          {favorites?.length >= 1 ? (
            <div className="list-favorites">
              <h4>Ecco i tuoi brani preferiti: </h4>
              <br></br>
              {favorites.map((el, i) => (
                <div key={i}>
                  <p key={i}>
                    <span key={i + 100}>{el.verse}: </span>
                    {el.text}
                  </p>{" "}
                  <input
                  key={i+200}
                    style={{ backgroundColor: "red" }}
                    type="submit"
                    value={"Rimuovi dai preferiti"}
                    name="remove-favorite"
                    onClick={() => removeFavorite(el)}
                  ></input>
                </div>
              ))}
            </div>
          ) : (
            <h4>Al momento non ci sono brani della Bibbia preferiti</h4>
          )}
        </div>
      ) : null}
    </div>
  );
}
