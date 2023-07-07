import axios from "axios";

export default function RemoveSession () {
    
  async function handleClick () {
    console.log('ciao');
    try {
      const responses = await axios.get(
        `http://localhost:8000/books/keywords/search?keyword=giordano`
      ); //esempio di ricerca per versetti
      console.log(responses.data);
      // const response = await axios.delete("http://localhost:8000/users/session");
      const result = responses.data;
      console.log("Sono nella logout", result);
    } catch (error) {
      console.error("Errore durante il logout:", error);
    }
  }

  return (
    <>
    <h1>sei sicuro di uscire?</h1>
    <input type="submit" value="Logout" onClick={handleClick}></input>
    </>
    
  )
  
}
