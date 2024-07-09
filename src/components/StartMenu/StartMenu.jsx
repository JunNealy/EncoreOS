import { applicationIndex } from '../../configs/applicationIdnex.js';
import Button from '../Button/Button.jsx';

import './StartMenu.scss';

const apps = applicationIndex.applications;

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
    </div>
  );
};

export default StartMenu;
