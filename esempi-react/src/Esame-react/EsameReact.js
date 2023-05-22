
import "./data.css"
import Home from "./components/Home";
import PageCategory from "./components/PageCategory";
import Layout from "./components/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from 'react';
import NoPage from "./components/NoPage";




export default function EsameThirdModule() {

    const [products, setProducts] = useState([])
    useEffect(() => {
        async function fetchproducts() {
            let res = await fetch('https://dummyjson.com/products')
            let json = await res.json()
            console.log(json);
            setProducts(json)
        }
        fetchproducts()
    }, [])

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
        <>

            <main>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Layout />}>
                            <Route index element={<Home />}/>
                            {categories.map((el) => (
                                <Route path={`/category/${el}`} element={<PageCategory category ={el} />} />
                            ))}
                        </Route>
                        <Route path='*' element = {<NoPage/>}/>
                    </Routes>
                </BrowserRouter>

            </main>
            <footer>
                footer
            </footer>


        </>
    )

}