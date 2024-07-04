import { useState } from 'react';

import Calculator from '../Calculator/Calculator';

import './Window.scss';

const DraggableWindow = ({ maxX, maxY }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [initialPosition, setInitialPosition] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e) => {
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
      className="draggable-window"
      style={{
        left: position.x,
        top: position.y,
        cursor: isDragging ? 'grabbing' : 'grab',
      }}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
      <div className="draggable-window_title-bar">
        <button>x</button>
        <button>_</button>
        <button>[]</button>
      </div>
      <div className="draggable-window_app-frame-outer">
        <div className="draggable-window_app-frame-inner">
          <Calculator />
        </div>
      </div>
    </div>
  );
};

export default DraggableWindow;
