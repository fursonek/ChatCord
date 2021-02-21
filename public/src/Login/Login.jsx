import React, {useEffect, useState, useContext} from 'react';
import socketIOClient from "socket.io-client";
import {useHistory} from 'react-router-dom';
import "./Login.css";
import { UserContext } from '../Contexts/UserContext';

const Login = () => {
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const {user, setUser} = useContext(UserContext);
  const history = useHistory();

  const handleUsernameChange = event => {
    setUsername(event.target.value);
  }

  const handlePasswordChange = event => {
    setPassword(event.target.value)
  }

  const handleSubmit = event => {
    event.preventDefault();
    const socket = socketIOClient("dc311a40f990.ngrok.io", {transports: ['websocket']});
    socket.on("message", message => {
      setUser({username: Username, socket: socket});
      history.push("/");
    })
  }

  return (
    <main id="login-page">

      <header>
        <h1>ChatCord</h1>
      </header>

      <form id="login-form" onSubmit={handleSubmit}>
        <div id="input-wraper">
          <p>Username</p>
          <input 
            id="login" 
            placeholder="Type your username"
            value={Username}
            autoComplete="off"
            onChange={handleUsernameChange}
          />
        </div>
        <div id="input-wraper">
          <p>Password</p>
          <input 
            id="password" 
            type="password" 
            placeholder="Type your password"
            value={Password}
            onChange={handlePasswordChange}
          />


        </div>

        <button>Login</button>
      </form>

    </main>
  )
}

export default Login;