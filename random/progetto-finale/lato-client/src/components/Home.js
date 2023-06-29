import { useEffect, useState } from "react";
import axios from "axios";
import CEI2008 from "../data/index-version-Cei2008.json";
const books = CEI2008.indexes.CEI2008.biblebooks;
const abbreviations = CEI2008.indexes.CEI2008.abbreviations;
const chaptersLimit = CEI2008.indexes.CEI2008.chapter_limit;
const verseLimit = CEI2008.indexes.CEI2008.verse_limit;

const Home = ({ keyword, control }) => {
  const [text, setText] = useState([]);
  const [textVerse, setTextVerse] = useState([]);
  const [check, setcheck] = useState(true);
  //const [typeSearch, setTypeSearch] = useState(control)

  useEffect(() => {
    const fetchdata = async () => {
      if (control) {
        try {
          const responses = await axios.get(
            `http://localhost:8000/books/keywords/search?keyword=${keyword}`
          ); //esempio di ricerca per versetti
          console.log(responses.data); // Puoi fare qualcosa con la risposta qui
          const { results } = responses.data.data; // accedo direttamente all'array contenente i dati
          setText(results); // immagazzino il risultato come array
        } catch (error) {
          console.error(error);
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
          if (match) {
            book = match[1]; // Abbreviazione del libro
            chapter = parseInt(match[2], 10); // Numero del capitolo

            console.log("Abbreviazione del libro:", book);
            const indexRequest = abbreviations.indexOf(book);
            book = books[indexRequest];
            console.log("Numero del capitolo:", chapter);
            setcheck(true);
          } else {
            console.log("Formato della stringa non valido");
            setcheck(false);
          }
          if (check) {
            const responses = await axios.get(
              `http://localhost:8000/books/${book}/chapters/${chapter}/verses/${verse}`
            ); //esempio di ricerca per versetti
            console.log(responses.data); // Puoi fare qualcosa con la risposta qui
            const  results  = responses.data.data; // accedo direttamente all'array contenente i dati
            setTextVerse(results); // immagazzino il risultato come array
          } else {
            console.log("richiesta invalida");
          }
        } catch (error) {
          console.error(error);
        }
      }
    };
    fetchdata();
  }, [keyword]);

  //console.log("qui sono nella home i text del risultato ricerca", text);
  //console.log("qui sono nella home i text del risultato ricerca", textVerse);
  return (
    <div className="body-main">
      <div className="body-text">
        {/* <h1>{text[0].originalquery}</h1>  */}
        {control && text ? 
          text.map((el) => (
            <div className="verse-research">
              <p>
                <span>{el.originalquery}: </span>
                {el.text}
              </p>
            </div> // aggiungere bottone sggiunta preferiti
          )
        ) : ( null
        )}
        {!control && textVerse
          ? textVerse.map((el) => (
              <div className="verse-search">
                <p>
                  <span>{el.originalquery},{el.verse}: </span>
                  {el.text}
                </p>
              </div>
            ))
          : null}
      </div>
      <div className="profile">qui deve andare il profilo con i preferiti</div>
    </div>
  );
};

export default Home;
