import './WordPad.scss';
import Button from '../Button/Button';
import { useState, useEffect, useRef } from 'react';

const WordPad = () => {
  const inputRef = useRef(null);
  const [documentContent, setDocumentContent] = useState('');
  const [fontSize, setFontSize] = useState('');

  useEffect(() => {
    const input = inputRef.current;
    const handleInput = () => {
      console.log('Input:', input.innerHTML);
      setDocumentContent(input.innerHTML);
    };

    input.addEventListener('input', handleInput);

    return () => {
      input.removeEventListener('input', handleInput);
    };
  }, []);

  const handleFormat = (formatCommand) => () => {
    document.execCommand(formatCommand, false, null);
    console.log('clicked');
  };

  const handleSelectFontSize = (event) => {
    setFontSize(event.target.value);
    console.log(event.target.value);
  };

  return (
    <div className="wordpad">
      <div className="wordpad__toolbar">
        <Button
          label={'Bold'}
          style={'start-button'}
          onClick={handleFormat('bold')}
        />
        <Button
          label={'Italic'}
          style={'start-button'}
          onClick={handleFormat('italic')}
        />
        <Button
          label={'Underline'}
          style={'start-button'}
          onClick={handleFormat('underline')}
        />
        <select name="font-size" id="font-size" onChange={handleSelectFontSize}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
        </select>
      </div>
      <div
        ref={inputRef}
        className="wordpad__input"
        contentEditable="true"
      ></div>
    </div>
  );
};

export default WordPad;
