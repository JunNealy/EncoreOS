import { useEffect, useState } from 'react';
import io from 'socket.io-client';
import ChatMessage from '../ChatMessage/ChatMessage';
import './Chat.scss';

const socket = io('http://localhost:8080'); // Replace with your server URL

function Chat() {
  const [messages, setMessages] = useState([]);
  const [currentMessage, setCurrentMessage] = useState('');

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

  useEffect(() => {
    //message from server
    socket.on('message', (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });
  }, []);

  const handlChange = (event) => {
    setCurrentMessage(event.target.value);
  };

  console.log(messages);

  return (
    <div className="chat-app">
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
      <input
        className="chat-app__input"
        type="text"
        placeholder="Type a message..."
        value={currentMessage}
        onChange={handlChange}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}

export default Chat;
