import React, {useContext, useState} from 'react';
import {useHistory} from 'react-router-dom';
import ChatMessage from './ChatMessage';
import {UserContext} from '../../Contexts/UserContext';

export const ChatMessages = () => {
    const {user, setUser} = useContext(UserContext);
    const [isFetched, setFetched] = useState(false);
    const [Messages, setMessages] = useState([]);
    const history = useHistory();


    if(user.socket == null){
        history.push("/login");
        return(<></>);
    }

    const getMessages = () => {
        setFetched(true);
        user.socket.emit('fetchMessages');
        
        user.socket.on("fetchMessages", messages => {
            if(!isFetched){
                setMessages(messages);
                document.querySelector("#chat-messages").scrollBy(0, 100000);
            }
        })
    }

    if(!isFetched) getMessages();

    return (
        <div id="chat-messages">
            {Messages.map((message, i) => 
                <ChatMessage
                    key={i}
                    message={message}
                />
            )}
        </div>
    )
}

export default ChatMessages