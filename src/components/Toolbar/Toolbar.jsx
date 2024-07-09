import encoreLogo from '../../assets/copyENCORELOGOCANDIDATEpx10.png';
import Button from '../Button/Button';
import SystemTray from '../SystemTray/SystemTray';

import './Toolbar.scss';

const Toolbar = () => {
  return (
    <div className="tool-bar">
      <Button icon={encoreLogo} label={'start'} />
      <SystemTray />
    </div>
  );
};

export default Toolbar;
