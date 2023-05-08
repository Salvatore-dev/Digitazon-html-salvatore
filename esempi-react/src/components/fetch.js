import {useState, useEffect} from "react"

export function Fetch (){
    const [products, setProducts] = useState([])
    useEffect(()=>{
            async function fetchproduct() {
            let res = await fetch('https://fakestoreapi.com/products')
            let json = await res.json()
            console.log(json);
            setProducts(json)
        }
        fetchproduct()
    }, [])
    
    
    return (
        <>
            <h1>Fetch</h1>
            {products.length}
        </>
        
    )
}