
import { Configuration, OpenAIApi } from "openai";
import { useState } from "react";
//import.meta.env.VITE_OPENAI_KEY


const key = import.meta.env.VITE_OPENAI_KEY
const configuration = new Configuration({
  apiKey: key,
});
const openai = new OpenAIApi(configuration);
// const response = await openai.listModels();

// console.log(response);

export default function ChatGpt() {

    const [request, setRequest] = useState('')
    const[response, setResponse] =useState({})


    async function responseChat(params) { // modificare l'aspetto creando leffetto chat
        const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{
            role: "user", 
            content: request,
            
        }],
        temperature: 0.1
    });

    console.log(completion.data.choices[0].message);
    setResponse(completion.data.choices[0].message)


  
    }

    return (
        <>
        <h2>La mia chat</h2>
        <input value={request} onChange={(e) => setRequest(e.target.value)} />
        <button onClick={responseChat}>Invia richiesta</button>
        <p>{response.content}</p>
       
        </>
    )
    
}