import { useEffect, useState } from "react";
import axios from "axios";
import { RequestInvalid } from "./Request-invalid";
import Introduction from "./Introduction";
import UserProfile from "./User";
import Text from "./Text";
import CEI2008 from "../data/index-version-Cei2008.json";
const books = CEI2008.indexes.CEI2008.biblebooks;
const abbreviations = CEI2008.indexes.CEI2008.abbreviations;
const chaptersLimit = CEI2008.indexes.CEI2008.chapter_limit;
const verseLimit = CEI2008.indexes.CEI2008.verse_limit;

const Home = ({ keyword, control, newChapter, getUserLogin, checkSession }) => {
  const [textKeyword, setTextKeyword] = useState(null); // null ? o []
  const [checkKeyword, setCheckKeyword] = useState(false);
  const [textVerse, setTextVerse] = useState(null); // null? o []
  const [checkVerse, setCheckVerse] = useState(false);
  const [chapter, setChapter] = useState(null);
  const [newKeyword, setNewKeyword] = useState("");
  //const [typeSearch, setTypeSearch] = useState(control)
  const [sendVerses, setSendVerses] = useState([]);

  const [sendChapter, setSendChapter] = useState([]);
  const [checkChapter, setCheckChapter] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const [favoritesB, setFavoritesB] = useState([]);
  const [profileUser, setProfileUser] = useState(null);

  const [user, setUser] = useState("");

  useEffect(() => {
    if (getUserLogin) {
      console.log("controllare dati", getUserLogin);
      console.log("controllo username", getUserLogin.username);
      console.log("controllo preferiti", getUserLogin.favoriteVerses);
      setUser(getUserLogin.username);
      setFavoritesB(getUserLogin.favoriteVerses);
      setProfileUser(getUserLogin)
    }
  }, [getUserLogin]);

  useEffect(() => {
    if (keyword) {
      setNewKeyword(keyword);
    }
  }, [keyword]);

  useEffect(() => {
    setChapter(newChapter);
  }, [newChapter]);

  useEffect(() => {
    if (newKeyword === "") {
      return;
    }
    const fetchdata = async () => {
      if (control && newKeyword) {
        // invece di controll
        const checkKeyword = newKeyword.search(/\d/) !== -1;
        if (!checkKeyword && newKeyword.length >= 3) {
          try {
            const responses = await axios.get(
              `http://localhost:8000/books/keywords/search?keyword=${newKeyword}`
            ); //esempio di ricerca per versetti
            console.log(responses.data); // Puoi fare qualcosa con la risposta qui
            const { results } = responses.data.data; // accedo direttamente all'array contenente i dati
            //setTextKeyword(results); // immagazzino il risultato come array
            setSendVerses(results)
            setCheckKeyword(true);
          } catch (error) {
            console.error(error);
            setCheckKeyword(false);
          }
          console.log(newKeyword);
        } else {
          setCheckKeyword(false);
          console.log("keyword non corretta");
          return;
        }
      } else {
        try {
          const request = newKeyword;
          const verse = request.split(",")[1];
          const toDecompose = request.split(",")[0];

          const regex = /^(\d?[A-Za-z]+)(\d+)$/; // /^(\d?[A-Za-z]+)(\d+)$/
          const match = toDecompose.match(regex);
          let book = "";
          let chapter = "";
          let check = false;
          if (match) {
            book = match[1]; // Abbreviazione del libro
            chapter = parseInt(match[2], 10); // Numero del capitolo

            //console.log("Abbreviazione del libro:", book);
            const indexRequest = abbreviations.indexOf(book);
            book = books[indexRequest];
            //console.log("Numero del capitolo:", chapter);
            //console.log(verse);
            setCheckVerse(true);
            //check = true;
            //console.log("dovrebbe essere true", checkVerse);
            // } else {
            //   console.log("Formato della stringa non valido");
            //   setCheckVerse(false);
            // }
            // if (check) {
            const responses = await axios.get(
              `http://localhost:8000/books/${book}/chapters/${chapter}/verses/${verse}`
            ); //esempio di ricerca per versetti
            console.log(responses.data); // Puoi fare qualcosa con la risposta qui
            if (responses.data?.error) {
              console.log("richiesta invalida");
              setCheckVerse(false);
            } else {
              const results = responses.data.data; // accedo direttamente all'array contenente i dati
              //setSendChapter([]); // per azzerare la ricerca capitolo
              //setTextVerse(results); // immagazzino il risultato come array
              setSendVerses(results)
              setCheckVerse(true);
            }
          } else {
            console.log("richiesta invalida");
            setCheckVerse(false);
          }
        } catch (error) {
          console.error(error);
          setCheckVerse(false);
        }
      }
    };
    fetchdata();
  }, [newKeyword]);

  useEffect(() => {
    if (chapter) {
      //console.log("sono nella home", newChapter);
      const book = newChapter.book;
      //console.log(book);
      const chapter = newChapter.chapter?.split(" ")[1];
      //console.log(chapter);
      const fetchChapter = async () => {
        try {
          const data = await axios.get(
            `http://localhost:8000/books/${book}/chapters/${chapter}`
          );
          const result = data.data;
          console.log(result);
          if (result.error) {
            setCheckChapter(false);
            console.log("richiesta capitolo");
          } else {
            //setTextVerse(null); // per azzerarare la ricerca versetto
            //setSendChapter(result.data.results);
            setSendVerses(result.data.results)
            setCheckChapter(true);
          }
        } catch (error) {
          console.log(error);
          setCheckChapter(false);
        }
      };
      fetchChapter();
    }
  }, [chapter]);
  console.log("controllo capitoli", checkChapter);
  console.log("controllo versi", checkVerse);
  console.log("contollo argomento", checkKeyword);
  // useEffect(()=>{ // verificare funzionamento
  //   if (checkChapter) {
  //     setCheckVerse(false)

  //   }
  // }, [checkChapter])

  //console.log("qui sono nella home i text del risultato ricerca", text);
  //console.log("qui sono nella home i text del risultato ricerca", textVerse);

  // useEffect(() => {
  //   // user alias username
  //   // qui posso inserire la chiamata dei preferiti utente
  //   async function getFavorites() {
  //     if (user) {
  //       // invece di username
  //       try {
  //         const data = await axios.get(
  //           `http://localhost:8000/users/${user}/profile`
  //         );
  //         const result = data?.data?.data?.favoriteVerses;
  //         setFavoritesB(result.map((el) => el.verse)); // set favorites alias  new favorite // alias setFavoritesB
  //         setProfileUser(data?.data?.data); // send profile // alias setprofileUser
  //         console.log("sono nel text conrollo chiamate  =================");

  //         console.log("vedo i preferiti utente", result);
  //       } catch (error) {
  //         console.log("sono nella chiamata preferiti", error);
  //       }
  //     }
  //   }
  //   getFavorites();
  // }, []); // invece di username

  return (
    <div className="body-main">
      <div className="body-text">
        {!checkChapter && !checkKeyword && !checkVerse ? (
          <Introduction />
        ) : (
          <Text
          data={sendVerses}
          username={user}
          upDateFavorite={setFavorites}
          newfavorite={favoritesB}
          sendProfile={setProfileUser}
          controlSession={checkSession}
        />
        )}
        {/* <h1>{text[0].originalquery}</h1>  */}
        {/* {
          control && textKeyword && checkKeyword ? (
            <Text
              data={textKeyword}
              username={user}
              upDateFavorite={setFavorites}
              newfavorite={favoritesB}
              sendProfile={setProfileUser}
              controlSession={checkSession}
            />
          ) : null
          // <RequestInvalid />
        }
        {!control && textVerse && checkVerse ? (
          <Text
            data={textVerse}
            username={user}
            upDateFavorite={setFavorites}
            newfavorite={favoritesB}
            sendProfile={setProfileUser}
            controlSession={checkSession}
          />
        ) : null}
        {checkChapter || (!checkVerse && control) ? (
          <Text
            data={sendChapter}
            username={user}
            upDateFavorite={setFavorites}
            newfavorite={favoritesB}
            sendProfile={setProfileUser}
            controlSession={checkSession}
          />
        ) : null} */}
      </div>
      <div className="profile">
        <UserProfile
          profile={user}
          profileSession={checkSession}
          newFavorite={favorites}
          upDateFavorite={setFavoritesB}
          getProfile={profileUser}
        />
      </div>
    </div>
  );
};

export default Home;
