import Button from '../Button/Button';
import './Numpad.scss';

const Numpad = ({ handleClick }) => {
  const buttons = [
    '(',
    ')',
    'c',
    '/',
    '7',
    '8',
    '9',
    'X',
    '4',
    '5',
    '6',
    '-',
    '1',
    '2',
    '3',
    '+',
    '+/-',
    '0',
    '.',
    '=',
  ];

  return (
    <div className="numpad">
      {buttons.map((button) => (
        <Button
          onClick={handleClick}
          key={button}
          label={button}
          style={'calc-button'}
          className="numpad__button"
        />
      ))}
    </div>
  );
};

export default Numpad;
