import { useState } from 'react';

import { applicationIndex } from '../../configs/applicationIdnex';
import Button from '../Button/Button';
import Calculator from '../Calculator/Calculator';
import Chat from '../Chat/Chat';
import PetApp from '../PetApp/PetApp';
import WordPad from '../WordPad/WordPad';
import Wyrm from '../Wyrm/Wyrm';

import './Window.scss';

const apps = applicationIndex.applications;

const Window = ({ maxX, maxY, zindex, onClick, appName, closeWindow, id }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [initialPosition, setInitialPosition] = useState({ x: 0, y: 0 });
  const [isFullScreen, setFullScreen] = useState(false);

  const handleMouseDown = (e) => {
    onClick();
    setIsDragging(true);
    setInitialPosition({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (event) => {
    if (!isDragging) return;

    let newX = event.clientX - initialPosition.x;
    let newY = event.clientY - initialPosition.y;

    if (newX < 0) {
      newX = 0;
    } else if (newX > maxX) {
      newX = maxX;
    }

    if (newY < 0) {
      newY = 0;
    } else if (newY > maxY) {
      newY = maxY;
    }

    setPosition({
      x: newX,
      y: newY,
    });
  };

  const handleNonDraggableChild = (event) => {
    event.stopPropagation();
  };

  const handleFullscreenToggle = () => {
    setFullScreen(!isFullScreen);
  };

  const findAppName = (appComponent) => {
    const { applications } = applicationIndex;
    const foundApp = applications.find((app) => app.app === appComponent);
    return foundApp ? foundApp.name : null;
  };

  const windowTitle = findAppName(appName);

  return (
    <div
      className={`window ${isFullScreen ? 'fullscreen' : ''} 
      }`}
      style={{
        left: position.x,
        top: position.y,
        cursor: isDragging ? 'grabbing' : 'grab',
        zIndex: { zindex },
      }}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
      <div className="window__title-bar">
        <p className="window__title-bar-label">{windowTitle}</p>
        <Button
          label={'▢'}
          style={'button'}
          onClick={() => {
            handleFullscreenToggle();
          }}
        />
        <Button
          label={'X'}
          style={'button'}
          onClick={() => {
            closeWindow(id);
          }}
        />
      </div>
      <div className="window__application-frame">
        {' '}
        {appName === apps[0].app && <Calculator />}
        {appName === apps[1].app && <Chat />}
        {appName === apps[2].app && (
          <WordPad onMouseDown={handleNonDraggableChild} />
        )}
        {appName === apps[3].app && <Wyrm />}
        {appName === apps[4].app && <PetApp />}
      </div>
    </div>
  );
};

export default Window;
