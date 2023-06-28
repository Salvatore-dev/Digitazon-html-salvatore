import "./App.css";
import "./SignUp.css";
import "./navBar.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";
import { useEffect, useState } from "react";

import Layout from "./components/Layout";
import Home from "./components/Home";
import Login from "./components/Login";
import Blogs from "./components/Blogs";
import NoPage from "./components/NoPage";
import SignUp from "./components/SignUp";
import Foot from "./components/Footer";

function App() {
  // const [photos, setPhotos] = useState ([])
  // useEffect(() => {
  //   async function fetchPhotos() {
  //     let res = await fetch('https://jsonplaceholder.typicode.com/photos')
  //     let json = await res.json()
  //     setPhotos(json.splice(0, 7))
  //   }
  //   fetchPhotos()
  // }, [])

  //console.log(photos);
  return (
    <>
      <header>
        <h1>Header</h1>
        <p>Resize the browser window to see the responsive effect.</p>
      </header>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Foot />
    </>
  );
}

export default App;
