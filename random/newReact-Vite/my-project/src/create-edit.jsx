import { Configuration, OpenAIApi } from "openai";
import { useState } from "react";

const key = import.meta.env.VITE_OPENAI_KEY;
const configuration = new Configuration({
  apiKey: key,
});
const openai = new OpenAIApi(configuration);

export default function CreateEdit(params) { // vedere oltre l'aspetto anche utilizzo https://platform.openai.com/docs/api-reference/edits/create?lang=node.js
    const[text, setText] = useState ('')
    const[instruction, setinstruction] = useState ('')
    const[req, setReq] = useState('sono la risposta')

    async function sendRequest(params) {
        const response = await openai.createEdit({
            model: "text-davinci-edit-001",
            input: text,
            instruction: instruction,
          });

          console.log(response.data.choices[0].text);
          setReq(response.data.choices[0].text)
        
    }


  return (
    <>
      <h2>Modifica Testo</h2>
      <input placeholder="digita il testo fa modificare" value={text} onChange={(e) => setText(e.target.value)} />
      <input placeholder="inserisci istruzione" value={instruction} onChange={(e) => setinstruction(e.target.value)}/>
      <button onClick={sendRequest}>Invia richiesta</button>
      <p>{req}</p>
      
    </>
  );
}
