import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = ({sendData, checkSession}) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [checkForm, setCheckForm] = useState(false)
  const [response, setResponse] = useState({});
  const [checkLogin, setCheckLogin] = useState(false)
  const [status, setStatus] = useState(200);

  useEffect(()=>{
      sendData(response)
      console.log("sono nella login", response);
  }, [response])

  useEffect(() => {
    if (username && password) {
      setCheckForm(true)
    } else{
      setCheckForm(false)
    }
  }, [username, password])

  async function sendValues() {
    axios.defaults.withCredentials = true
    const dataToSend = {
      username: username,
      password: password,
    };

    console.log(dataToSend);
    try {
      const data = await axios.post(
        "http://localhost:8000/users/session",
        dataToSend
      );
      const response = data.data;
      console.log("sono nella login", response);
      console.log("sono nella login", data.status);
      setStatus(data.status);
      if (response.check) {
        setResponse(response.data)
        setCheckLogin(true)
      } else {
        setCheckLogin(false)
      }
    } catch (error) {
      console.log(error);
      setCheckLogin(false)
      setStatus(error.response.status); // se il server mi restituisce 403 la risposta entra nel cach, cosi prendo lo status
    }
    // Effettua la chiamata API o altre operazioni con i dati
    console.log(status);
  }
  function Redirect () {

    return (
      <div className="redirect">
        <button onClick={()=> navigate('/')}>Vai alla Home</button>
      </div>
    )
  }
  
  useEffect(() => {
    checkSession(checkLogin)
  }, [checkLogin])

  function resetValues() {
    setUsername("");
    setPassword("");
    setStatus(200)
  }

  return (
    <div className="form-users">
      <h1>Login</h1>
      <div className="login-container">
        <input
          type="text"
          placeholder="Username"
          name="username"
          value={username}
          autoComplete="on"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          name="psw"
          value={password}
          autoComplete="on"
          onChange={(e) => setPassword(e.target.value)}
        />
         <button type="button" onClick={resetValues} className="cancelbtn">
          {status === 200? "Cancella": "La Username o la Password non corrispondono, ritenta!"}
        </button>
        <button type="submit" style={{pointerEvents: (!checkForm || status !== 200) && "none",
            backgroundColor: !checkForm && "yellow",}} onClick={sendValues}>
          {checkForm? "Login": "Inserici i dati nel modulo di accesso"}
        </button>
        {checkLogin && (<Redirect/>)}
      </div>
    </div>
  );
};

export default Login;
