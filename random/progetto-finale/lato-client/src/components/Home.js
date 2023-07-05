import { useEffect, useState } from "react";
import axios from "axios";
import { RequestInvalid } from "./Request-invalid";
import UserProfile from "./User";
import Text from "./Text";
import CEI2008 from "../data/index-version-Cei2008.json";
const books = CEI2008.indexes.CEI2008.biblebooks;
const abbreviations = CEI2008.indexes.CEI2008.abbreviations;
const chaptersLimit = CEI2008.indexes.CEI2008.chapter_limit;
const verseLimit = CEI2008.indexes.CEI2008.verse_limit;

const Home = ({ keyword, control, newChapter, getUserLogin, checkSession }) => {
  const [textKeyword, setTextKeyword] = useState([]);
  const [checkKeyword, setCheckKeyword] = useState(false)
  const [textVerse, setTextVerse] = useState([]);
  const [checkVerse, setCheckVerse] = useState(false);
  //const [typeSearch, setTypeSearch] = useState(control)

  const [sendChapter, setSendChapter] = useState([])
  const [checkChapter, setCheckChapter] = useState(false)
  const [favorites, setFavorites] = useState([])
  const [favoritesB, setFavoritesB] = useState([])

  useEffect(() => {
    if (keyword === "") {
      return;
    }
    const fetchdata = async () => {
      if (control) {
        try {
          const responses = await axios.get(
            `http://localhost:8000/books/keywords/search?keyword=${keyword}`
          ); //esempio di ricerca per versetti
          console.log(responses.data); // Puoi fare qualcosa con la risposta qui
          const { results } = responses.data.data; // accedo direttamente all'array contenente i dati
          setTextKeyword(results); // immagazzino il risultato come array
          setCheckKeyword(true)
        } catch (error) {
          console.error(error);
          setCheckKeyword(false)
        }
        console.log(keyword);
      } else {
        try {
          const request = keyword;
          const verse = request.split(",")[1];
          const toDecompose = request.split(",")[0];

          const regex = /^(\d?[A-Za-z]+)(\d+)$/; // /^(\d?[A-Za-z]+)(\d+)$/
          const match = toDecompose.match(regex);
          let book = "";
          let chapter = "";
          let check = false
          if (match) {
            book = match[1]; // Abbreviazione del libro
            chapter = parseInt(match[2], 10); // Numero del capitolo

            console.log("Abbreviazione del libro:", book);
            const indexRequest = abbreviations.indexOf(book);
            book = books[indexRequest];
            console.log("Numero del capitolo:", chapter);
            console.log(verse);
            setCheckVerse(true);
            check = true
            console.log("dovrebbe essere true", checkVerse);
          } else {
            console.log("Formato della stringa non valido");
            setCheckVerse(false);
          }
          if (check) {
            const responses = await axios.get(
              `http://localhost:8000/books/${book}/chapters/${chapter}/verses/${verse}`
            ); //esempio di ricerca per versetti
            console.log(responses.data); // Puoi fare qualcosa con la risposta qui
            const results = responses.data.data; // accedo direttamente all'array contenente i dati
            setTextVerse(results); // immagazzino il risultato come array
            setCheckVerse(true);
          } else {
            console.log("richiesta invalida");
            setCheckVerse(false)
          }
        } catch (error) {
          console.error(error);
          setCheckVerse(false);
        }
      }
    };
    fetchdata();
  }, [keyword]);

  useEffect(() => {
    if (newChapter) {
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
          const result = data.data.data;
          console.log(result);
          if (result.error) {
            setCheckChapter(false)
          } else{
            setSendChapter(result.results)
            setCheckChapter(true)
          }
        } catch (error) {
          console.log(error);
          setCheckChapter(false)
        }
      };
      fetchChapter();
    }
  }, [newChapter]);

  //console.log("qui sono nella home i text del risultato ricerca", text);
  //console.log("qui sono nella home i text del risultato ricerca", textVerse);
  return (
    <div className="body-main">
      <div className="body-text">
        {/* <h1>{text[0].originalquery}</h1>  */}
        {control && textKeyword && checkKeyword ? (
          <Text data={textKeyword} username={getUserLogin} upDateFavorite={setFavorites} newfavorite={favoritesB} />
        ) : (
          <RequestInvalid />
        )}
        {!control && textVerse && checkVerse ? (
         <Text data={textVerse} username={getUserLogin} upDateFavorite={setFavorites} newfavorite={favoritesB} />
        ) : (
          null
        )}
        {checkChapter? (<Text data={sendChapter} username={getUserLogin} upDateFavorite={setFavorites} newfavorite={favoritesB}/>): null}
      </div>
      <div className="profile">
        <UserProfile profile={getUserLogin} profileSession={checkSession} newFavorite={favorites} upDateFavorite={setFavoritesB}/>
      </div>
    </div>
  );
};

export default Home;
