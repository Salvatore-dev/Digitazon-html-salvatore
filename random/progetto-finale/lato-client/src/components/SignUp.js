import React, { useEffect, useState } from "react";
import axios from 'axios';

const SignUp = () => {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState(false);
  const [checkSignUp, setCheckSignUp] = useState(false)

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

    } catch (error) {
      console.log(error);
      
    }
    // Effettua la chiamata API o altre operazioni con i dati
    
     
  }

  return (
    <>
      <h1>SignUp</h1>
      <p>Please fill in this form to create an account.</p>
      <hr />
      <label htmlFor="name">
        <b>Name</b>
      </label>
      <input
        type="text"
        value={name}
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
      </div>
    </>
  );
};

export default SignUp;
