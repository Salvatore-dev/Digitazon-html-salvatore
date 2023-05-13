import { useState, useEffect } from "react"

export function ImputHook() {
    const [count, setCount] = useState(0)

    function Onclick() {
        setCount(count+1)
    }

    useEffect(()=>{
        console.log(count);

    }, [count])

    
    return(
        <>
            <h2>esercizio</h2>
            <button onClick={Onclick}>cliccami</button>
            <span>{count}</span>
            
        </>
        
    )
}