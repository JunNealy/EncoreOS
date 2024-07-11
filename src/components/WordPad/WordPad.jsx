import './WordPad.scss';
import Button from '../Button/Button';
import { useState, useEffect, useRef } from 'react';

const WordPad = () => {
  const inputRef = useRef(null);
  const [documentContent, setDocumentContent] = useState('');

  const input = inputRef.current;

  const handleInput = () => {
    console.log('Input:', input.innerHtml);
    setDocumentContent(input.innerHtml);
  };

  const handleFormat = (formatCommand) => {
    document.execCommand(formatCommand, false, null);
    console.log('cliced');
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
      </div>
      <div
        ref={input}
        className="wordpad__input"
        contentEditable="true"
        onChange={handleInput}
      ></div>
    </div>
  );
};

export default WordPad;
