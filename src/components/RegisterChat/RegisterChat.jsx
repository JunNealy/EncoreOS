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
      HELLLLOOOOOOO
      <form action="">
        <input
          onChange={handleInput}
          type="text"
          name="username"
          id="username"
          placeholder="please enter a user name"
        />

        <Button
          label={'Join the chat'}
          style={'button'}
          onClick={handleClick}
        />
      </form>
    </div>
  );
};

export default RegisterChat;
