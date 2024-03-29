import { useEffect, useState } from 'react';

export default function PageCategory({category}) {

    const [categoria, setCategoria] = useState([])
    useEffect(() => {
        async function fetchproduct() {
            let res = await fetch(`https://dummyjson.com/products/category/${category}`)
            let json = await res.json() 
            const {products} = json
            setCategoria(products)
        }
        fetchproduct()
    }, [category])

    return(
        <div className='pageProducts'>
            {categoria.map((e)=>(
                <div className='box-category' >
                    <h4>{e.brand}</h4>
                    <h6>{e.title}</h6>
                    <div><img src={e.images[0]} alt='immagine prodotto'></img></div>
                    <p>{e.desciption}</p>
                    <span>{e.price}</span>

                </div>
            ))}
        </div>
    )
    
}