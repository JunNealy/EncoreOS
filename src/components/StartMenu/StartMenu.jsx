import { applicationIndex } from '../../configs/applicationIdnex.js';

import './StartMenu.scss';

const StartMenu = ({ startApplication }) => {
  return (
    <div className="start-menu">
      <button
        onClick={() => {
          startApplication(applicationIndex.Calculator);
        }}
      >
        Start Calculator
      </button>
      <button
        onClick={() => {
          startApplication(applicationIndex.Chat);
        }}
      >
        Start Chat
      </button>
    </div>
  );
};

export default StartMenu;
