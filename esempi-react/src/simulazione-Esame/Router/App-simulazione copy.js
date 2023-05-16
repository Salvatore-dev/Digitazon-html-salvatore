import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Outlet, Link } from "react-router-dom"

import { Post } from './simil-componenti/Post'

import React from "react";

function Main() {
    const [users, setUsers] = useState([])
    useEffect(() => {
        async function fetchUsers() {
            let res = await fetch('https://jsonplaceholder.typicode.com/posts')
            let json = await res.json()
            setUsers(json.splice(0,5))
        }
        fetchUsers()
    }, [])
  return (
    <>
      <header>
        <div><img src="https://kinsta.com/it/wp-content/uploads/sites/2/2020/07/dimensioni-immagini-social-media.png"></img></div>
        <div className="sidebar">
                <nav>
                  <ul>
                    {users.map((el)=>(
                        <li><Link className="Links" to = {`/Post${el.id}`}>{`Post${el.id}`}</Link></li>
                    ))}

                  </ul>
                </nav>
                <Outlet />
              </div>
      </header>
      
    </>
  )
}

function Simulazione() {
    const [users, setUsers] = useState([])
    useEffect(() => {
        async function fetchUsers() {
            let res = await fetch('https://jsonplaceholder.typicode.com/posts')
            let json = await res.json()
            setUsers(json.splice(0,5))
        }
        fetchUsers()
    }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
        {users.map((el)=>(
                <Route path={`/Post${el.id}`} element={<Post id={el.id} />} />
            ))}
        </Route>
      </Routes>
    </BrowserRouter>


  )
}
export default Simulazione