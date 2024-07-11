import './WordPad.scss';
import FileMenu from '../FileMenu/FileMenu';
import Button from '../Button/Button';
import { useState, useRef, useEffect } from 'react';

const WordPad = ({ onMouseDown }) => {
  const inputRef = useRef(null);
  const [documentContent, setDocumentContent] = useState('');
  const [documentName, setDocumentName] = useState('');
  const [fontSize, setFontSize] = useState('');
  const [localData, setLocalData] = useState({});
  const [stickyIsVisible, setStickyIsVisible] = useState(false);
  const [fileMenuIsVisible, setFileMenuIsVisible] = useState(false);

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem('wordpadData')) || {};
    setLocalData(savedData);
  }, []);

  const saveData = () => {
    const newData = {
      ...localData,
      [documentName]: {
        documentContent: inputRef.current.innerHTML,
      },
    };

    setLocalData(newData);
    localStorage.setItem('wordpadData', JSON.stringify(newData));
  };

  const handleFormat = (formatCommand) => () => {
    document.execCommand(formatCommand, false, null);
  };

  const handleFontSizeChange = (fontSize) => {
    document.execCommand('styleWithCSS', false, true);
    document.execCommand('fontSize', false, fontSize);
  };

  const handleSelectFontSize = (event) => {
    setFontSize(event.target.value);
    handleFontSizeChange(fontSize);
  };

  const handleNameChange = (event) => {
    setDocumentName(event.target.value);
  };

  const handleFileClick = () => {
    setFileMenuIsVisible(!fileMenuIsVisible);
  };

  const handleFileItemClick = (fileName, content) => {
    setDocumentContent(content);
    setFileMenuIsVisible(false);
  };

  if (documentContent.length > 5) {
    setStickyIsVisible(true);
  }

  return (
    <div className="wordpad" onMouseDown={onMouseDown}>
      <div className="wordpad__toolbar">
        <div className="wordpad__toolbar-file-options">
          <Button onClick={handleFileClick} label={'File'} style={'button'} />
          {fileMenuIsVisible && (
            <div className="wordpad__toolbar-file-options-file-menu">
              <FileMenu files={localData} onItemClick={handleFileItemClick} />
              <Button
                label={'Save'}
                style={'start-button'}
                onClick={saveData}
              />
            </div>
          )}
          <input
            className="wordpad__toolbar-file-options-document-name"
            type="text"
            name="docName"
            placeholder="File name"
            onChange={handleNameChange}
          />
        </div>
        <div className="wordpad__toolbar-styling">
          <Button
            label={'B'}
            style={'toolbar'}
            onClick={handleFormat('bold')}
          />
          <Button
            label={'I'}
            style={'toolbar'}
            onClick={handleFormat('italic')}
          />
          <Button
            label={'U'}
            style={'toolbar'}
            onClick={handleFormat('underline')}
          />
          <select
            className="wordpad__toolbar-styling-font-size"
            onChange={handleSelectFontSize}
          >
            <option value="1">S</option>
            <option value="2">R</option>
            <option value="3">L</option>
            <option value="4">XL</option>
            <option value="5">XXL</option>
            <option value="6">XXXL</option>
          </select>
        </div>
      </div>
      <div
        ref={inputRef}
        className="wordpad__input"
        contentEditable="true"
        dangerouslySetInnerHTML={{ __html: documentContent }}
      />
      {stickyIsVisible && (
        <img
          className="sticky"
          src="./src/assets/images/Stickly1.png"
          alt="It's sticky!"
        />
      )}
    </div>
  );
};

export default WordPad;
