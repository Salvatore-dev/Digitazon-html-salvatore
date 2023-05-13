import { useState, useEffect } from "react"

export function Fetch() {
    const [products, setProducts] = useState([])
    useEffect(() => {
        async function fetchproduct() {
            let res = await fetch('https://fakestoreapi.com/products') // fetch serve per chiamate asyncrone
            let json = await res.json() 
            console.log(json); 
            setProducts(json)
        }
        fetchproduct()
    }, [])


    return (
        <>
            <h1>Fetch</h1>
            {products.map((el)=>
                (
                    <div className="items" key={el.id}>
                        <h4>{el.title}</h4>
                        <img src={el.image}></img>
                        <p>{el.price}</p>
                    </div>
                )

            )}
        </>

    )
}