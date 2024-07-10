import { applicationIndex } from '../../configs/applicationIdnex.js';
import Button from '../Button/Button.jsx';

import './StartMenu.scss';

const apps = applicationIndex.applications;

const shutDown = () => {
  close();
};

console.log(apps);

const StartMenu = ({ startApplication }) => {
  return (
    <div className="start-menu">
      {apps.map((application, index) => (
        <Button
          key={index}
          msgStyle={index % 2 != 0 ? 'plain' : 'highlight'}
          icon={application.icon}
          onClick={() => {
            startApplication(application.app);
          }}
          label={application.name}
          style={'start-button'}
        />
      ))}
      <Button onClick={shutDown} label={'Shut Down'} style={'start-button'} />
      <a href="#" onClick="history.go(-1);return true;">
        Back
      </a>
    </div>
  );
};

export default StartMenu;
