import React, {useEffect, useState, useContext} from 'react';
import {useHistory} from 'react-router-dom';
import "./Main.css";
import { UserContext } from '../Contexts/UserContext';
import Chat from './Components/Chat';

const Main = () => {
    const {user, setUser} = useContext(UserContext);
    const history = useHistory();

    console.log(user);

    if(!user.username){
        history.push("/login");
    }

    return(
        <main id="main-page">
            <h1>Zalogowano jako: {user.username}</h1>
            <Chat />
        </main>
    )
}

export default Main;