import './WordPad.scss';
import Button from '../Button/Button';
import { useState, useEffect, useRef } from 'react';

const WordPad = (onMouseDown) => {
  const inputRef = useRef(null);
  const [documentContent, setDocumentContent] = useState('');
  const [documentName, setDocumentName] = useState('');
  const [fontSize, setFontSize] = useState('');
  const [localData, setLocalData] = useState({});

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem('wordpadData')) || {};
    setLocalData(savedData);
  }, []);

  const saveData = () => {
    const newData = {
      documentName: documentName,
      documentContent: inputRef.current.innerHTML,
    };

    const updatedData = { ...localData, ...newData };
    setLocalData(updatedData);
    localStorage.setItem('wordpadData', JSON.stringify(updatedData));
    console.log(localData);
  };

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

  const handleNameChage = (event) => {
    setDocumentName(event.target.value);
    console.log(event.target.value);
  };

  // const handleSave = () => {};

  return (
    <div className="wordpad" onMouseDown={onMouseDown}>
      <div className="wordpad__toolbar">
        <input
          type="text"
          name="docName"
          id="docNmae"
          placeholder="file name"
          onChange={handleNameChage}
        />
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
        <Button
          label={'Save'}
          style={'start-button'}
          onClick={() => {
            saveData();
          }}
        />
        <select name="font-size" id="font-size" onChange={handleSelectFontSize}>
          <option value="1">S</option>
          <option value="2">R</option>
          <option value="3">L</option>
          <option value="4">XL</option>
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
