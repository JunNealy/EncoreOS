import { useEffect, useState } from 'react';
import io from 'socket.io-client';

import Button from '../Button/Button';
import ChatMessage from '../ChatMessage/ChatMessage';
import RegisterChat from '../RegisterChat/RegisterChat';

import './Chat.scss';

const socket = io('http://localhost:8080'); // Replace with your server URL

function Chat() {
  const [messages, setMessages] = useState([]);
  const [currentMessage, setCurrentMessage] = useState('');
  const [username, setUsername] = useState('');
  console.log(username);

  const sendMessage = () => {
    if (currentMessage) {
      console.log(currentMessage);
      //send the submitted message to the server
      socket.emit('chatMessage', currentMessage);
      setMessages((prevMessages) => [...prevMessages, currentMessage]);
      // Clear the input field after sending
      setCurrentMessage('');
    }
  };

  //Firing twice due to react dev mode.
  useEffect(() => {
    //message from server
    socket.on('message', (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });
  }, []);

  const handlChange = (event) => {
    setCurrentMessage(event.target.value);
  };

  return (
    <div className="chat-app">
      {username !== '' ? <></> : <RegisterChat setUsername={setUsername} />}
      <div className="chat-app__messages">
        {messages.map((message, index) => (
          <ChatMessage
            key={index}
            text={message.text}
            sender={message.username}
            time={message.time}
          />
        ))}
      </div>
      <div className="chat-app__interface">
        <input
          className="chat-app__interface-input"
          type="text"
          placeholder="Type a message..."
          value={currentMessage}
          onChange={handlChange}
        />

        <Button onClick={sendMessage} style={'chat-button'} label={'Send'} />
      </div>
    </div>
  );
}

export default Chat;
