import './ChatMessage.scss';

const ChatMessage = (text, sender, time) => {
  return (
    <div className="message">
      <p className="message__sender-date">
        `${sender} - ${time}`
      </p>
      <p className="message__text">${text}</p>
    </div>
  );
};

export default ChatMessage;
