import { useState } from 'react';

import encoreLogo from '../../assets/copyENCORELOGOCANDIDATEpx10.png';
import Button from '../Button/Button';
import SystemTray from '../SystemTray/SystemTray';

import './Toolbar.scss';

const Toolbar = () => {
  const [displayStartMenu, setDisplayStartMenu] = useState(false);

  const handleClick = () => {
    setDisplayStartMenu(!displayStartMenu);
  };

  return (
    <div className="tool-bar">
      <Button
        icon={encoreLogo}
        label={'start'}
        onClick={handleClick}
        style={'button'}
      />
      <SystemTray />
    </div>
  );
};

export default Toolbar;
