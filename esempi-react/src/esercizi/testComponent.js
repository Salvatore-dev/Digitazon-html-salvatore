import { useEffect, useState } from 'react';

export default function TestComponent({category = "tops"}) {

    const [list, setList] = useState([])
    useEffect(() => {
        async function fetchproduct() {
            let res = await fetch(`https://dummyjson.com/products/category/smartphones`)
            let json = await res.json() 
            const {products} = json
            setList(products)
        }
        fetchproduct()
    }, [])
    console.log(list);
    return(
        <>
            ciao
            {list.map((e)=>(
                <div className='box-category' >
                    <h4>{e.brand}</h4>
                    <h6>{e.title}</h6>
                    <div><img src={e.images[0]} alt='immagine prodotto'></img></div>
                    <p>{e.desciption}</p>
                    <span>{e.price}</span>

                </div>
            ))}
        </>
    )
    
}