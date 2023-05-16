import { useState, useEffect } from "react"

/*
utilizzare https://fakestoreapi.com/products/categories per ottenere tutti le categorie di prodotti.
Mostrare quindi n colonne, dove n e' il numero di categorie di prodotti, per ogni categoria, mostrare tutti i prodotti di quella categoria nella sua colonna.

*/

export function DubleAsync() { // questa e una soluzione che non prevede un doppio async ma per didattica lo implementato consultando chat gpt
    
    const [products, setProducts] = useState([])
    useEffect(() => {
        async function fetchproduct() {
            let res = await fetch('https://fakestoreapi.com/products')
            let json = await res.json() 
            //console.log(json); 
            setProducts(json)
        }
        fetchproduct()
    }, [])

    //console.log(products);

    const objectOrder = {} // creo un oggetto vuoto nel quale memorizzo i dati che mi servono

    products.forEach((el) =>{ // qui 
        const {category, title} = el // destructuring su singolo oggetto array product
        if (!objectOrder[category]) { // non trova l'esistenza del valore corrispondente al category
            objectOrder[category] = [] // dunque crea chiave con il nome category dell'elemento corrente con valore di un array vuoto
        }
        objectOrder[category].push(title) // inserisce i titoli nell'array  vuoto un dopo l altro
    })

    console.log(objectOrder); //ottengo loggetto ordinato per categorie con un array di titoli come rispettivo valore
    const matrixCategory = Object.entries(objectOrder) // questo metodo su aggetti mi crea una matrice, ogni elemento ha una categoria e un array di titoli
    console.log(matrixCategory);

    return (
        <>
            <h1>Doppio Async</h1>
            
            <div className="categories">
                {matrixCategory.map(([categoria, titolo])=>(
                    <div key={categoria}>
                        <h2>{categoria}</h2>
                        <ul>
                            {titolo.map((el) => (
                                <li key={el}>{el}</li>
                            ))}
                        </ul>

                    </div>
                ))}
            </div>
        
        </>
    )
    
}