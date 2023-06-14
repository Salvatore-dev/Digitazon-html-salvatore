import { Configuration, OpenAIApi } from "openai";
import { useState } from "react";


const key = import.meta.env.VITE_OPENAI_KEY
const configuration = new Configuration({
  apiKey: key,
});
const openai = new OpenAIApi(configuration);


export default function CreateImages(params) { // rivedere l'aspetto

    const[text, setText] = useState('')
    const [url, setUrl] = useState('')

    async function myImages(params) {

        const response = await openai.createImage({
            prompt: text,
            n: 1,
            size: "1024x1024",
          });
        console.log(response.data.data[0].url); // si puo chiedere anche in formato json vedi documentazione https://platform.openai.com/docs/api-reference/images/create-variation?lang=node.js

        setUrl(response.data.data[0].url)
    }

    

    return(
        <>
         <h2>La mia richiesta di immagini</h2>
        <input value={text} onChange={(e) => setText(e.target.value)} />
        <button onClick={myImages}>crea immagine</button>
        <img 
        src={url} alt="immagine richiesta" />
        </>
    )
    
}