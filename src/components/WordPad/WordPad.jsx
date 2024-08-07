import { useEffect, useRef, useState } from 'react';

import stickyGif from '../../assets/images/Stickly.gif';
import stickyText from '../../assets/images/StickyMessage.png';
import Button from '../Button/Button';
import FileMenu from '../FileMenu/FileMenu';

import './WordPad.scss';

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

  useEffect(() => {
    if (documentContent.length > 5) {
      setStickyIsVisible(true);
    } else {
      setStickyIsVisible(false);
    }
  }, [documentContent]);

  useEffect(() => {
    localStorage.setItem('wordpadData', JSON.stringify(localData));
  }, [localData]);

  const createNewDocument = () => {
    setDocumentName('');
    setDocumentContent('');
  };

  const saveData = () => {
    const newData = {
      ...localData,
      [documentName]: {
        documentContent: inputRef.current.innerHTML,
      },
    };

    setLocalData(newData);
  };

  useEffect(() => {
    const handleNewLine = (event) => {
      if (event.key === 'Enter') {
        setTimeout(() => {
          document.execCommand('justifyLeft', false, null);
        }, 0);
      }
    };

    const inputElement = inputRef.current;
    inputElement.addEventListener('keydown', handleNewLine);

    return () => {
      inputElement.removeEventListener('keydown', handleNewLine);
    };
  }, []);

  const handleFormat = (formatCommand) => () => {
    document.execCommand(formatCommand, false, null);
    document.execCommand('justifyLeft', false, null); // Reset alignment
  };

  const handleFontSizeChange = (fontSize) => {
    document.execCommand('styleWithCSS', false, true);
    document.execCommand('fontSize', false, fontSize);
  };

  const handleSelectFontSize = (event) => {
    const selectedFontSize = event.target.value;
    setFontSize(selectedFontSize);
    handleFontSizeChange(selectedFontSize);
  };

  const handleNameChange = (event) => {
    setDocumentName(event.target.value);
  };

  const handleFileClick = () => {
    setFileMenuIsVisible(!fileMenuIsVisible);
  };

  const handleFileItemClick = (fileName, content) => {
    setDocumentContent(content);
    inputRef.current.innerHTML = content; // Manually update the contentEditable div
    setFileMenuIsVisible(false);
  };

  return (
    <div className="wordpad" onMouseDown={onMouseDown}>
      <div className="wordpad__toolbar">
        <div className="wordpad__toolbar-file-options">
          <Button onClick={handleFileClick} label={'File'} style={'button'} />
          {fileMenuIsVisible && (
            <div className="wordpad__toolbar-file-options-file-menu">
              <FileMenu files={localData} onItemClick={handleFileItemClick} />
              <Button
                label={'New Document'}
                style={'start-button'}
                onClick={createNewDocument}
              />
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
            value={fontSize}
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
        <>
          <img
            className="sitcky-message"
            src={stickyText}
            alt="Sticky has things to say!"
          />
          <img className="sticky" src={stickyGif} alt="It's sticky!" />
        </>
      )}
    </div>
  );
};

export default WordPad;
