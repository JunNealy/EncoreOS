import './WordPad.scss';
import Button from '../Button/Button';

const WordPad = () => {
  return (
    <div className="wordpad">
      <div className="wordpad__toolbar">
        <Button label={'Bold'} style={'start-button'} />
        <Button label={'Italic'} style={'start-button'} />
        <Button label={'Underline'} style={'start-button'} />
      </div>
      <div className="wordpad__input" contentEditable="true">
        Type here
      </div>
    </div>
  );
};

export default WordPad;
