import './ChatMessage.scss';

const ChatMessage = ({ text, sender, time, msgStyle }) => {
  return (
    <div className={`message ${msgStyle}`}>
      <div className="message__details">
        <p className="message__details-sender">{`${sender}`}</p>
        <p className="message__details-time">{`sent at ${time}`}</p>
      </div>

      <p className="message__text">{`${text}`}</p>
    </div>
  );
};

export default ChatMessage;
