import Toolbar from '../Toolbar/Toolbar';
import Window from '../Window/Window';
import Calculator from '../Calculator/Calculator';
import { useState } from 'react';

import './Screen.scss';

const Screen = () => {
  const [activeWindows, setActiveWindows] = useState([]);

  return (
    <div className="screen">
      <Window>
        <Calculator />
      </Window>
    </div>
  );
};

export default Screen;
