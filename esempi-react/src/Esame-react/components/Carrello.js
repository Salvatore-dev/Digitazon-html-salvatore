import { useEffect, useState } from 'react';

export default function Carrello() {

    const [product, setProduct] = useState({})

    useEffect(() => {
        async function fetchproduct() {
            let res = await fetch('https://dummyjson.com/products/1')
            let json = await res.json()
            setProduct(() => {
                let res =[]
                res.push(json)
                return res
            })
        }
        fetchproduct()
    }, [])

    console.log(product);

    
    return (
        <div className='carrello'>
            {}
        
        </div>
    )
}