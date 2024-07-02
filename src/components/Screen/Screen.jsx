import Toolbar from '../Toolbar/Toolbar';
import Window from '../Window/Window';
import Calculator from '../Calculator/Calculator';

import './Screen.scss';

const Screen = () => {
  return (
    <div className="screen">
      <Toolbar />
      <Window></Window>
      <Calculator />
    </div>
  );
};

export default Screen;
