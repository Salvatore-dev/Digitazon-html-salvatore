import React from "react";
import { Outlet, Link } from "react-router-dom";
import "font-awesome/css/font-awesome.min.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Selects from "./Select";

export default function PanelControl({ getData, controlSearch, sendChapter }) {
  const [metadata, setMetadata] = useState(null);

  const [imput, setImput] = useState("");
  const [search, setSearch] = useState("");
  const [typeSearch, setTypeSearch] = useState(true); // per impostare il tipo di ricerca, true = argomento, false = versetto
  //console.log(imput);

  const testaments = ["Antico Testamento", "Nuovo Testamento"];
  const [testament, setTestament] = useState(null);
  const [books, setBooks] = useState(null);
  //console.log(books);

  const [book, setBook] = useState("");
  const [chapters, setChapters] = useState(null);
  const [chapter, setChapter] = useState("");
  const [changeTestament, setChangeTestament] = useState(false);
  const [changeBook, setChangeBook] = useState(false);
  const [changeChapter, setChangeChapter] = useState(false);

  const [requestChapter, setRequestChapter] = useState({});
  //console.log(requestChapter);

  
  useEffect(() => {
    console.log("sono nel panel", requestChapter);
    sendChapter(requestChapter)
  }, [requestChapter]);

  useEffect(() => {
    async function getMetadata(params) {
      try {
        const data = await axios.get("http://localhost:8000/metadata/indexes");
        const result = data.data;
        setMetadata(result);
      } catch (error) {
        console.log(error);
      }
    }
    getMetadata();
  }, []);

  //console.log(metadata);

  useEffect(() => {
    setChapters(null);
    setChangeBook(false);
    setChangeChapter(false);
    setChangeTestament(true);
    if (testament === "Antico Testamento") {
      setBooks(metadata.data.Cei.indexes.CEI2008.biblebooks.slice(0, 46));
    }
    if (testament === "Nuovo Testamento") {
      setBooks(metadata.data.Cei.indexes.CEI2008.biblebooks.slice(46));
    }
  }, [testament]);

  useEffect(() => {
    if (book) {
      setChapter("");
      const index = books.indexOf(book);
      const limitChapter =
        metadata.data.Cei.indexes.CEI2008.chapter_limit[index];
      let Chapters = [];
      for (let i = 1; i <= limitChapter; i++) {
        Chapters.push(`Capitolo ${i}`);
      }
      setChapters(Chapters);
      setChangeBook(true);
      setChangeChapter(false);
    }
  }, [book]);

  useEffect(() => {
    //console.log("sono piu sopra", chapter);
    if (changeBook && chapter) {
      //console.log("sono piu sotto", chapter);
      setChangeChapter(true);
    } else {
      setChangeChapter(false);
    }
  }, [chapter]);


  // console.log("questo e il change testament", changeTestament);
  // console.log("questo e il change book", changeBook);
  // console.log("questo e il chapter", chapter);
  // console.log("questo e il change chapter", changeChapter);
  // console.log("questo e il requestChapter", requestChapter);
  useEffect(() => {
    //console.log("===================================================");
    if (changeTestament && changeBook && chapter!== '' && changeChapter) {
      //console.log("------------------------------------------------");
      const result = {
        book: book,
        chapter: chapter,
      };

      setRequestChapter(result);
    }
  }, [chapter]);

  function handleSearch() {
    setSearch(imput);
  }

  useEffect(() => {
    getData(search);
  }, [search]);

  function handleCheck() {
    if (typeSearch) {
      setTypeSearch(false);
      setImput("");
    } else {
      setTypeSearch(true);
      setImput("");
    }
  }
  useEffect(() => {
    controlSearch(typeSearch);
  }, [typeSearch]);
  const minLength = 4;
  console.log("il chec sul tipo di ricerca", typeSearch);



  return (
    <div className="layout">
      <nav className="topnav">
        <div>
          <div className="custom-select">
            <Selects
              chose={"Testamento"}
              data={testaments}
              selectData={setTestament}
            />
            <Selects chose={"Libro"} data={books} selectData={setBook} />
            <Selects
              chose={"Capitolo"}
              data={chapters}
              selectData={setChapter}
            />
          </div>
        </div>

        <div className="search-area">
          <div style={{ display: "flex" }}>
            <span>Selezione il tipo di ricerca:</span>
            <label className="switch">
              <input onChange={handleCheck} type="checkbox" />
              <span className="slider round"></span>
            </label>
          </div>

          <form className="search-text">
            <label>
              <input
                name="myInput"
                type="text"
                placeholder={
                  typeSearch ? "ricerca per argomento" : "ricerca per versetto"
                }
                value={imput}
                autoComplete="on"
                minLength={minLength}
                onChange={(e) => setImput(e.target.value)}
              />
              <button onClick={handleSearch} type="button">
                <i className="fa fa-search"></i>
              </button>
            </label>
          </form>
        </div>

        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/signUp">SignUp</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}
