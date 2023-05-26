import { Outlet, Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import Carrello from "./Carrello";
 
 export default function Layout() {

    const [input, setInput] = useState('')

    function SearchProduct() {
        const [text, setText] = useState('')
        return (
            <div className="search">
                <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
                <button onClick={() => setInput(text)}>Cerca</button>
            </div>
        );
    }

    const [categories, setCategories] = useState([])
    useEffect(() => {
        async function fetchcategories() {
            let res = await fetch('https://dummyjson.com/products/categories')
            let json = await res.json()
            console.log(json);
            setCategories(json)
        }
        fetchcategories()
    }, [])

    return (
        <header>
            <div className="topHeader">
                <div><img src="https://tse3.mm.bing.net/th?id=OIP.czrV7J2cInWV0FR47Oi-yAHaCw&pid=Api&P=0" alt="Logo"></img></div>
                <SearchProduct />
                <Carrello />
            </div>
            <nav className="navBar">
                <ul>
                    {categories.map((e) => (
                        <li><Link to={`/category/${e}`}>{e}</Link></li>
                    ))}
                </ul>
            </nav>
            <Outlet />
        </header>
    )

}