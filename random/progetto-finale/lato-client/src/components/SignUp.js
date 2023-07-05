import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";




const SignUp = () => {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState(false);
  const [checkSignUp, setCheckSignUp] = useState(false)
  const navigate = useNavigate();

  function resetValues() {
    setName("");
    setLastname("");
    setUsername("");
    setEmail("");
    setPassword("");
    setRepeatPassword("");
  }

  useEffect(() => {
    if (password === repeatPassword) {
      setCheckPassword(true);
    } else {
      setCheckPassword(false);
    }
  }, [password, repeatPassword]);

   async function sendValues ()  { // devo gestire l'invio di dati non consistenti come assenza password
    const dataToSend = {
      username: username,
      name: name,
      lastname: lastname,
      email: email,
      password: password
    };

    console.log(dataToSend);
    try {
      const data = await axios.post("http://localhost:8000/users/signup", dataToSend)
      const response = data.data
      console.log(response);
      console.log(data.status);
      const status = data.status
      if (response?.check) {
        setCheckSignUp(true)
      } else {
        setCheckSignUp(false)
        if (status == "200") {
          console.log('spiacente, username gia utilizzato, riprova');
        }
      }

    } catch (error) {
      console.log(error);
      console.log(error.response.status);
      
    }
    // Effettua la chiamata API o altre operazioni con i dati
    
     
  }
  function Redirect () {

    return (
      <div className="redirect">
        <button onClick={()=> navigate('/login')}>Vai alla Login</button>
      </div>
    )
  }

  return (
    <div className="form-users">
      <h1>SignUp</h1>
      <p>Please fill in this form to create an account.</p>
      <hr />
      <label htmlFor="given-name">
        <b>Name</b>
      </label>
      <input
        type="text"
        value={name}
        autoComplete="name"
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your Name"
        name="name"
        required
      ></input>
      <label htmlFor="lastname">
        <b>Lastname</b>
      </label>
      <input
        type="text"
        value={lastname}
        autoComplete="family-name"
        onChange={(e) => setLastname(e.target.value)}
        placeholder="Enter your Lastname"
        name="lastname"
        required
      ></input>
      <label htmlFor="username">
        <b>Username</b>
      </label>
      <input
        type="text"
        value={username}
        autoComplete="username"
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter your Username"
        name="username"
        required
      ></input>
      <label htmlFor="email">
        <b>Email</b>
      </label>
      <input
        type="text"
        value={email}
        autoComplete="email"
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter Email"
        name="email"
        required
      ></input>
      <label htmlFor="psw">
        <b>Password</b>
      </label>
      <input
        type="password"
        value={password}
        autoComplete="new-password"
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter Password"
        name="psw"
        required
      />
      <label htmlFor="psw-repeat">
        <b>Repeat Password</b>
      </label>
      <input
        type="password"
        value={repeatPassword}
        autoComplete="new-password"
        onChange={(e) => setRepeatPassword(e.target.value)}
        placeholder="Repeat Password"
        style={{ color: checkPassword ? "black" : "red" }}
        name="psw-repeat"
        required
      />
      <div className="clearfix">
        <button type="button" onClick={resetValues} className="cancelbtn">
          Cancel
        </button>
        <button type="submit" onClick={sendValues} className="signupbtn">
          Sign Up
        </button>
        {checkPassword ? (
          <div>le password corrispondono</div>
        ) : (
          <div>le password non corrispondono</div>
        )}
        {checkSignUp && (<Redirect/>)}
      </div>
    </div>
  );
};

export default SignUp;
