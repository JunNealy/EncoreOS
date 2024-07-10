import './ResgiterChat.scss';
import Button from '../Button/Button';
import { useState } from 'react';

('./ResgiterChat.scss');
const RegisterChat = ({ setUsername }) => {
  const [usernameString, setUsernameString] = useState('');

  const handleInput = (event) => {
    setUsernameString(event.target.value);
    console.log(usernameString);
  };

  const handleClick = (event) => {
    event.preventDefault();
    setUsername(usernameString);
  };

  return (
    <div className="register-window">
      <p className="register-window__welcome">
        Welcome to Pigeon presented by Encore
        <span className="register-window__welcome--orange">O</span>
        <span className="register-window__welcome--blue">S</span>
      </p>
      <p className="register-window__cta">
        Enter a username and join the conversation!
      </p>
      <form className="register-window__form" action="">
        <input
          className="register-window__form-input"
          onChange={handleInput}
          type="text"
          name="username"
          id="username"
          placeholder="user name"
        />

        <Button
          label={'Join the chat'}
          style={usernameString <= 0 ? 'disabled' : 'button'}
          onClick={handleClick}
        />
      </form>
    </div>
  );
};

export default RegisterChat;
