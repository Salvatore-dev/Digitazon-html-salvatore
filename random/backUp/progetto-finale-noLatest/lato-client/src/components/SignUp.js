import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState(false);
  const [checkSignUp, setCheckSignUp] = useState(false);
  const [checkForm, setCheckForm] = useState(false);
  const [checkUsername, setCheckUsername] = useState(true);
  const navigate = useNavigate();

  function resetValues() {
    setName("");
    setLastname("");
    setUsername("");
    setEmail("");
    setPassword("");
    setRepeatPassword("");
    setCheckUsername(true);
  }

  useEffect(() => {
    if (password === repeatPassword) {
      setCheckPassword(true);
    } else {
      setCheckPassword(false);
    }
  }, [password, repeatPassword]);

  useEffect(() => {
    if (username && name && lastname && email && password) {
      setCheckForm(true);
    } else {
      setCheckForm(false);
    }
  }, [username, name, lastname, email, password]);

  console.log("controllo form", checkForm);

  async function sendValues() {
    const dataToSend = {
      username: username,
      name: name,
      lastname: lastname,
      email: email,
      password: password,
    };

    console.log(dataToSend);
    try {
      const data = await axios.post(
        "http://localhost:8000/users/signup",
        dataToSend
      );
      const response = data.data;
      console.log(response);
      console.log(data.status);
      //const status = data.status;
      if (response?.check) {
        setCheckSignUp(true);
        setCheckUsername(true);
      } else {
        setCheckSignUp(false);
        setCheckUsername(false);
      }
    } catch (error) {
      console.log(error);
      console.log(error.response.status);
    }
  }
  function Redirect() {
    return (
      <div className="redirect">
        <button
          style={{ backgroundColor: "green" }}
          onClick={() => navigate("/login")}
        >
          Vai alla Login
        </button>
      </div>
    );
  }

  return (
    <div className="form-users">
      <h1>SignUp</h1>
      <p>Per favore, compila questo modulo per creare un account.</p>
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
          {checkUsername
            ? "Cancel"
            : "Spiacente usernamen già utilizzato, riprova"}
        </button>
        <button
          type="submit"
          style={{
            pointerEvents:
              (!checkPassword || !checkForm || !checkUsername) && "none",
            backgroundColor: (!checkPassword || !checkForm) && "yellow",
          }}
          onClick={sendValues}
          className="signupbtn"
        >
          {!checkPassword
            ? "Le password non corrispondono"
            : !checkForm
            ? "inserisci i dati nel modulo di registrazione"
            : "Sign Up"}
        </button>
        {checkSignUp && <Redirect />}
      </div>
    </div>
  );
};

export default SignUp;
