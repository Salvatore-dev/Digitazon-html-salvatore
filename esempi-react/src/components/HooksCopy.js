import { useState, useEffect } from "react"

export function ImputHookCopy() {
    const [inputA, setInputA] = useState('')
    const [inputB, setInputB] = useState('')
    const [ok, setOk] = useState()

    useEffect(()=>{
        setOk (inputA && inputB ? 'funziona' : '')

    }, [inputA, inputB])

    
    return(
        <>
            <h2>esercizio</h2>
            <input value={inputA} onChange={(e)=> setInputA(e.target.value)} ></input>
            <input value={inputB} onChange={(e)=> setInputB(e.target.value)} ></input>
            <span>{ok}</span>
            
        </>
        
    )
}