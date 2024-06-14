import { useState } from 'react';

import Button from '../Button/Button';
import SystemTray from '../SystemTray/SystemTray';

import './Toolbar.scss';

const Toolbar = () => {
  const [startMenuDisplay, setStartMenuDisplay] = useState(false);

  // const startMenuClickHander = () => {
  //   setStartMenuDisplay(!startMenuDisplay ? false : true);
  // };

  return (
    <div className="tool-bar">
      <Button text={'Start'} icon={''} onClick={''} />
      <SystemTray />
    </div>
  );
};

export default Toolbar;
