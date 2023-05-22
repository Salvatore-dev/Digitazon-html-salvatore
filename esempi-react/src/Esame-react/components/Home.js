import { useEffect, useState } from 'react';


export default function Home() {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        async function getAllCategories() {
            const res = await fetch('https://dummyjson.com/products/categories')
            const json = await res.json()

            let categories = json.map(
                async (category) => {
                    const resProducts = await fetch('https://dummyjson.com/products/category/' + category)
                    const products = await resProducts.json()
                    return { category, products }
                })

            categories = await Promise.all(categories)
            setCategories(categories)
        }
        getAllCategories()
    }, [])

    console.log(categories);

    return (
        <div className='boxes' >
            {categories.map((e) => (
                <div className='box-home'>
                    <h3>{e.category}</h3>
                    {e.products.products.map((el) => (
                        <div className='box'>
                            <h5>{el.brand}</h5>
                            <div><img src={el.thumbnail} alt='immagine categoria' ></img></div>
                            <p>{el.description}</p>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    )


}