import { useEffect, useState } from "react";
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [response, setResponse] = useState({});
  const [status, setStatus] = useState(200);

  async function sendValues() {
    // devo gestire l'invio di dati non consistenti come assenza password
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
      console.log(response);
      console.log(data.status);
      setStatus(data.status);
    } catch (error) {
      console.log(error);
      setStatus(error.response.status); // se il server mi restituisce 403 la risposta entra nel cach, cosi prendo lo status
    }
    // Effettua la chiamata API o altre operazioni con i dati
    console.log(status);
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
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          name="psw"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" onClick={sendValues}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
