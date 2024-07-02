import './Calculator.scss';
import { useState } from 'react';

const Calculator = () => {
  const [display, setDisplay] = useState('0');

  const handleClick = (event) => {
    const buttonValue = event.target.id;
    console.log(buttonValue);
  };

  return (
    <div className="calculator">
      <div className="calculator_file-bar"></div>
      <div className="calculator_display"></div>
      <div className="calculator_buttons">
        <div className="calculator_buttons-row">
          <button
            className="calculator_buttons-row-btn"
            id="calc["
            onClick={handleClick}
          >
            [
          </button>
          <button className="calculator_buttons-row-btn" id="calc]">
            ]
          </button>
          <button className="calculator_buttons-row-btn" id="calcc">
            c
          </button>
          <button className="calculator_buttons-row-btn" id="calc/">
            /
          </button>
        </div>
        <div className="calculator_buttons-row">
          <button className="calculator_buttons-row-btn" id="calc7">
            7
          </button>
          <button className="calculator_buttons-row-btn" id="calc8">
            8
          </button>
          <button className="calculator_buttons-row-btn" id="calc9">
            9
          </button>
          <button className="calculator_buttons-row-btn">X</button>
        </div>
        <div className="calculator_buttons-row">
          <button className="calculator_buttons-row-btn" id="calc4">
            4
          </button>
          <button className="calculator_buttons-row-btn" id="calc5">
            5
          </button>
          <button className="calculator_buttons-row-btn" id="calc6">
            6
          </button>
          <button className="calculator_buttons-row-btn" id="calc-">
            -
          </button>
        </div>
        <div className="calculator_buttons-row">
          <button className="calculator_buttons-row-btn" id="calc1">
            1
          </button>
          <button className="calculator_buttons-row-btn" id="calc2">
            2
          </button>
          <button className="calculator_buttons-row-btn" id="calc3">
            3
          </button>
          <button className="calculator_buttons-row-btn" id="calc+">
            +
          </button>
        </div>
        <div className="calculator_buttons-row">
          <button className="calculator_buttons-row-btn" id="calc+/-">
            +/-{' '}
          </button>
          <button className="calculator_buttons-row-btn" id="calc0">
            0
          </button>
          <button className="calculator_buttons-row-btn" id="calc.">
            .
          </button>
          <button className="calculator_buttons-row-btn" id="calc=">
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
