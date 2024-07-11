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
      <div className="tool-bar__buttons">
        <Button
          className="tool-bar__buttons-start"
          icon={encoreLogo}
          label={'Start'}
          onClick={handleClick}
          style={'button'}
        />
        {openApplications.map((application, index) => (
          <Button
            key={index}
            index={index}
            icon={'test'}
            label={'test'}
            style={'button'}
            onClick={bringToFront}
          />
        ))}
      </div>
      <SystemTray />
    </div>
  );
};

export default Toolbar;
