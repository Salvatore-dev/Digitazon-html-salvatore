import { Outlet, Link } from "react-router-dom";
import "font-awesome/css/font-awesome.min.css";
import { useEffect, useState } from 'react';
import axios from 'axios';
import Selects from "./Select";

export default function Layout({getData, controlSearch}) {


  const[imput, setImput] = useState('')
  const [search, setSearch] = useState('')
  const [typeSearch, setTypeSearch] = useState(true) // per impostare il tipo di ricerca, true = argomento, false = versetto
  console.log(imput);
  function handleSearch() {
    setSearch(imput)
  }

  useEffect(()=>{
    getData(search)
  }, [search])



  function handleCheck() {
    if (typeSearch) {
      setTypeSearch(false)
      setImput('')
    } else {
      setTypeSearch(true)
      setImput('')
    }
  }
  useEffect(()=>{
    controlSearch(typeSearch)
  }, [typeSearch])

  console.log("il chec sul tipo di ricerca" ,typeSearch);
  return (
    <div className="layout">
      <nav className="topnav">
        <div>
          <div className="custom-select">
            <Selects chose={"Testamento"} />
            <Selects chose={"Libro"} />
            <Selects chose={"Capitolo"} />
          </div>
        </div>

        <div className="search-area">
          <div style={{"display": "flex",}} >
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
                placeholder={typeSearch? 'ricerca per argomento': 'ricerca per versetto'}
                value={imput} onChange={(e)=> setImput(e.target.value)}
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
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}
