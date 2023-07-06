import "./App.css";
import "./forms-users.css";
import "./navBar.css"
import "./request-invalid.css"
import "./areaText.css"
import "./user-detail.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";
import { useEffect, useState } from "react";

import PanelControl from "./components/PanelControl";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import Blogs from "./components/Blogs";
import NoPage from "./components/NoPage";
import SignUp from "./components/SignUp";
import Foot from "./components/Footer";

//const url = '../public/assets/tocco3.jpg' // da eliminare vedere se ci sono problemi al restart se eliminato
function App() {

const [research, setResearch] = useState('')
const [typeSearch, setTypeSearch] = useState(true)
const [getChapter, setGetChapter] = useState(null)
//console.log("qui sto nell APP data research", research);

const[userLogin, setUserLogin] = useState('')
const[checkLogin, setCheckLogin] = useState(false)
function handleData(params) {
  setResearch(params)
}
function handleSearch(params) {
  setTypeSearch(params)
}
  return (
    <>
      <Header />
      <div>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<PanelControl getData={handleData} controlSearch={handleSearch} sendChapter={setGetChapter} />}>
            <Route index element={<Home keyword={research} control={typeSearch} newChapter={getChapter} getUserLogin={userLogin} checkSession={checkLogin} />} />
            <Route path="/login" element={<Login sendUsername={setUserLogin} checkSession={setCheckLogin}/>} />
            <Route path="/signUp" element={<SignUp />} />
            {/* <Route path="/logout" element={<RemoveSession />} /> */}
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
      </div>
      <Foot />
    </>
  );
}

export default App;
