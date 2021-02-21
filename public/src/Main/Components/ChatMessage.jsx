import React, {useEffect, useState, useContext} from 'react';
import {useHistory} from 'react-router-dom';
import "../Main.css";

const ChatMessage = (props) => {
    let date = new Date(props.message.date);
    let formatDate = `Today at ${date.getHours()}:${date.getMinutes()}`;

    return (
        <div id="chat-message">
            <div id="author-info">
                <p id="username">{props.message.username}</p>
                <small id="date">{ formatDate }</small>
            </div>
            <p id="content">{props.message.content}</p>
        </div>
    )
}

export default ChatMessage;