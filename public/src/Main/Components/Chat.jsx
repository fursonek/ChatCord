import React, {useEffect, useState, useContext} from 'react';
import "../Main.css";
import ChatMessages from './ChatMessages';
import ChatArea from './ChatArea';

const Chat = () => {

    return (
        <div id="chat">
            <ChatMessages />

            <ChatArea />            
        </div>
    )
}

export default Chat;