import Button from '../Button/Button';
import SystemTray from '../SystemTray/SystemTray';

import './Toolbar.scss';

const Toolbar = () => {
  return (
    <div className="tool-bar">
      <Button />
      <SystemTray />
    </div>
  );
};

export default Toolbar;
