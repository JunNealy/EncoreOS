import Numpad from '../Numpad/Numpad.jsx';
import './Calculator.scss';
import { useState } from 'react';

const Calculator = () => {
  const [equation, setEquation] = useState('');

  const handleClick = (event) => {
    const buttonValue = event.target.innerText;
    setEquation((prevEquation) => prevEquation + buttonValue);
  };

  return (
    <div className="calculator">
      <div className="calculator_display">
        <p>{equation}</p>
      </div>
      <div>
        <Numpad handleClick={handleClick} />
      </div>
    </div>
  );
};

export default Calculator;
