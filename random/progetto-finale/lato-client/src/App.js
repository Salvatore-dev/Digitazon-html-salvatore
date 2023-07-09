import "./App.css";
import "./forms-users.css";
import "./navBar.css"
import "./request-invalid.css"
import "./areaText.css"
import "./user-detail.css"
import "./introduction.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import PanelControl from "./components/PanelControl";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import NoPage from "./components/NoPage";
import SignUp from "./components/SignUp";
import Foot from "./components/Footer";
import Logout from "./components/Loguot";
import InvalidRequest from "./components/InvalidRequest";

//const url = '../public/assets/tocco3.jpg' // da eliminare vedere se ci sono problemi al restart se eliminato
function App() {

const [research, setResearch] = useState('')
const [typeSearch, setTypeSearch] = useState(true)
const [getChapter, setGetChapter] = useState(null)
//console.log("qui sto nell APP data research", research);
 //const [checkSession, setCheckSession] = useState(false) // false non e in sessione
const[profile, setProfile] = useState(null)
const[checkLogin, setCheckLogin] = useState(false)



// function handleData(params) {
//   setResearch(params)
// }

// function handleSearch(params) {
//   setTypeSearch(params)
// }
  return (
    <>
      <Header />
      <div>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<PanelControl getData={setResearch} controlSearch={setTypeSearch} sendChapter={setGetChapter} controlSession={checkLogin} setControlSession={setCheckLogin}/>}>
            <Route index element={<Home keyword={research} control={typeSearch} newChapter={getChapter} getUserLogin={profile} checkSession={checkLogin} />} />
            <Route path="/login" element={<Login sendData={setProfile} checkSession={setCheckLogin}/>} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/invalid" element={<InvalidRequest/>}/>
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
