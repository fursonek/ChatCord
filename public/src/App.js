// import logo from './logo.svg';
import React, {useState} from 'react';
import {Route, BrowserRouter as Router} from "react-router-dom";
import Main from './Main/Main.jsx';
import Login from "./Login/Login.jsx";
import { UserContext } from './Contexts/UserContext';

function App() {
  const [user, setUser] = useState({username: null, socket: null});

  return (
    <Router>
        <UserContext.Provider value={{user, setUser}}>
          <Route exact path="/" component={Main}/>
          <Route path="/login" component={Login}/>
        </UserContext.Provider>
    </Router>
  )
}

export default App;
