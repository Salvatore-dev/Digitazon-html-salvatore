import { useState, useEffect } from "react"

/*
utilizzare https://fakestoreapi.com/products/categories per ottenere tutti le categorie di prodotti.
Mostrare quindi n colonne, dove n e' il numero di categorie di prodotti, per ogni categoria, mostrare tutti i prodotti di quella categoria nella sua colonna.

*/

 function DubleAsync() {
    const [products, setProducts] = useState([])
    useEffect(() => {
        async function fetchproduct() {
            let res = await fetch('https://fakestoreapi.com/products')
            let json = await res.json() 
            console.log(json); 
            setProducts(json)
        }
        fetchproduct()
    }, [])

    console.log(products);


    const [categories, setCategories] = useState([])
    useEffect(() => {
        async function fetchcategory() {
            let res = await fetch('https://fakestoreapi.com/products/categories')
            let json = await res.json() 
            console.log(json); 
            setCategories(json)
        }
        fetchcategory()
    }, [])

    console.log(categories);

    

    return (
        <>
            <h1>Doppio Async</h1>
            
            <div className="categories">
                <div>
                    <h2>categoria</h2>
                    <ul>
                        <li>prodotti</li>
                    </ul>
                </div>
            </div>
        
        </>
    )
    
}
 // qui sotto soluzione di alberto
 
/*

const CATEGORIES_URL = 'https://fakestoreapi.com/products/categories'
const CATEGORY_URL = 'https://fakestoreapi.com/products/category/'

function Category({ category }) {
  return (
    <div>
      <h3>{category.category}</h3>
      <ul>
        {category.products.map((p, i) => <li key={i}>{p.title}</li>)}
      </ul>
    </div>
  )
}

export function ProductColumns() {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    async function getAllCategories() {
      const res = await fetch(CATEGORIES_URL)
      const json = await res.json()

      let categories = json.map(
        async (category) => {
                const resProducts = await fetch(CATEGORY_URL+category)
                const products = await resProducts.json()
            return { category, products }
        })

      categories = await Promise.all(categories)
      setCategories(categories)
    }
    getAllCategories()
  }, [])

  return (
    <div className="container">
      <h2>Product columns</h2>
      {categories.map((c, i) => <Category key={i} category={c} />)}
    </div>
  )
}
*/