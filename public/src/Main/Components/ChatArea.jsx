import React, {useState, useContext} from 'react'
import {useHistory} from 'react-router-dom';
import {UserContext} from '../../Contexts/UserContext';

export const ChatArea = () => {
    const {user, setUser} = useContext(UserContext);
    const [MessageContent, setMessageContent] = useState("");
    const history = useHistory();

    const handleChange = (event) => {
        setMessageContent(event.target.value);
    }

    if(!user.socket){
        history.push("/login");
        return(<></>)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        user.socket.emit("newMessage", {
            username: user.username,
            date: new Date(),
            content: MessageContent,
            id: Math.floor(Math.random()*1000000)
        });
        setMessageContent("");
    }


    return (
        <form id="chat-area" onSubmit={handleSubmit}>
            <input 
                id="messageContent"
                type="text" 
                autoComplete="off"
                placeholder="Message here"
                value={MessageContent}
                onChange={handleChange}
            />
        </form>
    )
}

export default ChatArea