import { useEffect, useState } from 'react';
import io from 'socket.io-client';

import chime from '../../assets/sound/dindong.mp3';
import Button from '../Button/Button';
import ChatMessage from '../ChatMessage/ChatMessage';
import RegisterChat from '../RegisterChat/RegisterChat';

import './Chat.scss';

const VITE_CHAT_PORT = import.meta.env.VITE_CHAT_PORT;

function Chat() {
  const [messages, setMessages] = useState([]);
  const [currentMessage, setCurrentMessage] = useState(null);
  const [username, setUsername] = useState('');
  const [socket, setSocket] = useState('');

  const notifcation = new Audio(chime);

  useEffect(() => {
    if (username.trim() !== '') {
      const openSocket = io(VITE_CHAT_PORT);
      setSocket(openSocket);

      openSocket.on('message', (message) => {
        setMessages((prevMessages) => [...prevMessages, message]);
        notifcation.play();
      });

      openSocket.emit('joinChat', username);

      openSocket.on('disconnect', () => {});

      return () => {
        openSocket.disconnect();
      };
    }
  }, [username]);

  const sendMessage = () => {
    if (currentMessage) {
      socket.emit('chatMessage', currentMessage, username);

      setCurrentMessage('');
    }
  };

  const handlChange = (event) => {
    setCurrentMessage(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && currentMessage.trim() != '') {
      sendMessage();
    }
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
          onKeyDown={handleKeyDown}
        />

        <Button onClick={sendMessage} style={'chat-button'} label={'Send'} />
      </div>
    </div>
  );
}

export default Chat;
