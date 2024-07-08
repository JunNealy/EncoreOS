import { useState } from 'react';

import Button from '../Button/Button';
import Calculator from '../Calculator/Calculator';

import './Window.scss';

const DraggableWindow = ({ maxX, maxY, label, zindex, onClick, appName }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [initialPosition, setInitialPosition] = useState({ x: 0, y: 0 });

  console.log(zindex);

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

    // Constrain within bounds
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

  return (
    <div
      className="window"
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
        <p className="window__title-bar-label">{label}</p>
        <Button label={'X'} />
        <Button label={'X'} />
        <Button label={'X'} />
      </div>
      <{appName} />
    </div>
  );
};

export default DraggableWindow;
