import encoreLogo from '../../assets/copyENCORELOGOCANDIDATEpx10.png';
import Button from '../Button/Button';
import SystemTray from '../SystemTray/SystemTray';

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
      <Button
        icon={encoreLogo}
        label={'Start'}
        onClick={handleClick}
        style={'button'}
      />
      <SystemTray />
    </div>
  );
};

export default Toolbar;
