import "./App.css";
import "./SignUp.css";
import "./navBar.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";
import { useEffect, useState } from "react";

import Layout from "./components/Layout";
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
console.log("qui sto nell APP data research", research);
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
          <Route path="/" element={<Layout getData={handleData} controlSearch={handleSearch} />}>
            <Route index element={<Home keyword={research} control={typeSearch} />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signUp" element={<SignUp />} />
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
