import './WordPad.scss';
import Button from '../Button/Button';
import { useState, useEffect, useRef } from 'react';

const WordPad = (onMouseDown) => {
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

  const handleFontSizeChange = (fontSize) => {
    document.execCommand('styleWithCSS', false, true);
    document.execCommand('fontSize', false, fontSize);
  };

  const handleSelectFontSize = (event) => {
    setFontSize(event.target.value);
    console.log(event.target.value);
    handleFontSizeChange(fontSize);
  };

  return (
    <div className="wordpad" onMouseDown={onMouseDown}>
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
          <option value="2">S</option>
          <option value="1">R</option>
          <option value="4">L</option>
          <option value="3">XL</option>
          <option value="5">XXL</option>
          <option value="6">XXXL</option>
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
