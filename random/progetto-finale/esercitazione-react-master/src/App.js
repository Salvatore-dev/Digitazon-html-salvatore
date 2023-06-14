import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from 'react';

import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Blogs from './components/Blogs';
import NoPage from './components/NoPage';
import Contact from './components/Contact';



function App() {

  const [photos, setPhotos] = useState ([])
  useEffect(() => {
    async function fetchPhotos() {
      let res = await fetch('https://jsonplaceholder.typicode.com/photos')
      let json = await res.json()
      setPhotos(json.splice(0, 7))
    }
    fetchPhotos()
  }, [])

    console.log(photos);
  return (
    <div>
     <h1>Un esempio di uso react router</h1>
     <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element = {<Home photos={photos} />}/>
            <Route path='/about' element = {<About/>}/>
            <Route path='/blogs' element = {<Blogs/>}/>
            <Route path='/contact' element = {<Contact/>}/>
            <Route path='*' element = {<NoPage/>}/>
          </Route>
        </Routes>
     </BrowserRouter>
    </div>


  );
}

export default App;
