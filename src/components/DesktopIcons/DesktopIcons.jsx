import './DesktopIcons.scss';
import { applicationIndex } from '../../configs/applicationIdnex.js';
const apps = applicationIndex.applications;
import Button from '../Button/Button.jsx';

const DesktopIcons = ({ startApplication }) => {
  return (
    <div className="desktop-icons">
      {apps.map((app, index) => (
        <Button
          onClick={() => {
            startApplication(app.app);
          }}
          key={index}
          label={app.name}
          icon={app.icon}
          style={'desk-icon'}
        />
      ))}
    </div>
  );
};

export default DesktopIcons;
