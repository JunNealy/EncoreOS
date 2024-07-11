import encoreLogo from '../../assets/copyENCORELOGOCANDIDATEpx10.png';
import Button from '../Button/Button';
import SystemTray from '../SystemTray/SystemTray';
import { applicationIndex } from '../../configs/applicationIdnex';
import './Toolbar.scss';

const Toolbar = ({
  openApplications,
  bringToFront,
  startApplication,
  setDisplayStartMenu,
  displayStartMenu,
  setOpenApplications,
}) => {
  const handleClick = () => {
    setDisplayStartMenu(!displayStartMenu);
  };

  return (
    <div className="tool-bar">
      <div className="tool-bar__buttons">
        <Button
          className="tool-bar__buttons-start"
          icon={encoreLogo}
          label={'Start'}
          onClick={handleClick}
          style={!displayStartMenu ? 'button' : 'button-depressed'}
        />
        {openApplications.map((application, index) => {
          const appInfo = applicationIndex.applications.find(
            (app) => app.app === application.name
          );
          if (!appInfo) {
            console.error(
              `No matching application found for displayName: ${application.name}`
            );
            return null;
          }
          return (
            <Button
              key={index}
              index={index}
              icon={appInfo.icon}
              label={appInfo.name}
              style={'button'}
              onClick={() => bringToFront(application.id)}
            />
          );
        })}
      </div>
      <SystemTray />
    </div>
  );
};

export default Toolbar;
