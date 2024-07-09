import { applicationIndex } from '../../configs/applicationIdnex.js';
import Button from '../Button/Button.jsx';

import './StartMenu.scss';

const apps = applicationIndex.applications;

console.log(apps);

const StartMenu = ({ startApplication }) => {
  return (
    <div className="start-menu">
      {apps.map((application) => (
        <Button
          icon={application.icon}
          key={application.index}
          onClick={() => {
            startApplication(application.app);
          }}
          label={application.name}
          style={'start-button'}
        />
      ))}
      {/* <button
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
      </button> */}
    </div>
  );
};

export default StartMenu;
