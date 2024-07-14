import { useEffect, useState } from 'react';
import io from 'socket.io-client';

import Button from '../Button/Button';
import ChatMessage from '../ChatMessage/ChatMessage';
import RegisterChat from '../RegisterChat/RegisterChat';

import './Chat.scss';
import chime from '../../assets/sound/dindong.mp3';

const VITE_CHAT_PORT = import.meta.env.VITE_CHAT_PORT;
console.log('THE CHAT PROT IS', VITE_CHAT_PORT);

function Chat() {
  const [messages, setMessages] = useState([]);
  const [currentMessage, setCurrentMessage] = useState(null);
  const [username, setUsername] = useState('');
  const [socket, setSocket] = useState('');

  const notifcation = new Audio(chime);

  //Firing twice due to react dev mode.
  useEffect(() => {
    if (username.trim() !== '') {
      const openSocket = io(VITE_CHAT_PORT);
      setSocket(openSocket);

      openSocket.on('message', (message) => {
        setMessages((prevMessages) => [...prevMessages, message]);
        notifcation.play();
      });

      openSocket.emit('joinChat', username);

      openSocket.on('disconnect', () => {
        console.log('socket closed');
      });

      return () => {
        openSocket.disconnect();
      };
    }
  }, [username]);

  const sendMessage = () => {
    if (currentMessage) {
      //send the submitted message to the server
      socket.emit('chatMessage', currentMessage, username);

      // Clear the input field after sending
      setCurrentMessage('');
    }
  };

  const handlChange = (event) => {
    setCurrentMessage(event.target.value);
  };

  //connect to server, I believe the "join chat is arbitrary as long as both sides have functions that recognizes the same string it should work - CHECK DOCS"

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
