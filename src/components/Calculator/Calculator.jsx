import Numpad from '../Numpad/Numpad.jsx';
import './Calculator.scss';
import { useState } from 'react';

const Calculator = () => {
  const [equation, setEquation] = useState('');

  const handleClick = (event) => {
    const solveExpression = (expression) => {
      try {
        expression = expression.replace(/X/g, '*');
        return eval(expression);
      } catch (error) {
        console.error(error);
      }
    };

    const buttonValue = event.target.innerText;

    if (buttonValue === '=') {
      let calculatedVal = solveExpression(equation);
      setEquation(calculatedVal);
      return;
    } else if (buttonValue === 'c') {
      setEquation('');
      return;
    }
    setEquation((prevEquation) => prevEquation + buttonValue);
  };

  return (
    <div className="calculator">
      <div className="calculator_display">
        <p>{equation}</p>
      </div>
      <Numpad handleClick={handleClick} />
    </div>
  );
};

export default Calculator;
