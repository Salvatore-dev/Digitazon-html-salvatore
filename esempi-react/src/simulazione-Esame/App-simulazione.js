
import { Post } from "./componenti/Post";

import { useState, useEffect } from "react";

export function SimulazioneEsameReact() {

    const [users, setUsers] = useState([])
    useEffect(() => {
        async function fetchUsers() {
            let res = await fetch('https://jsonplaceholder.typicode.com/posts')
            let json = await res.json()
            setUsers(json.splice(0,5))
        }
        fetchUsers()
    }, [])

    console.log(users);

    return(
        <>
            <header>
                <h1>Il mio Forum</h1>
            </header>
            <main>
                <nav>
                    <ul>
                        {users.map((el)=>(
                            <li><a href="#">Utente {el.id}</a></li>
                        ))}
                       
                    </ul>
                </nav>

                <div className="chats">
                     {users.map((el)=>(
                            <Post id={el.id}/>
                        ))}
                </div>

            </main>
            
        </>
        
    )
    
}