import { useEffect, useState } from 'react';

import './Window.scss';
import { max } from 'three/examples/jsm/nodes/Nodes.js';

const DraggableWindow = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [initialPosition, setInitialPosition] = useState({ x: 0, y: 0 });
  const [maxXY, setMaxXY] = useState({ maxX: 0, MaxY: 0 });
  const screen = document.querySelector('.screen');

  useEffect(() => {
    const screenBounds = screen.getBoundingClientRect();
    setMaxXY({ maxX: screenBounds.width, MaxY: screenBounds.height });
  });

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
    let newY = event.clientY - initialPosition.x;

    if (newX < 0) {
      newX = 0;
    } else if (newX < maxXY.maxX) {
      newX = maxXY.maxX;
    }

    if (newY < 0) {
      newY = 0;
    } else if (newY < maxXY.MaxY) {
      newY = maxXY.MaxY;
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
        <div className="draggable-window_app-frame-inner"></div>
      </div>
    </div>
  );
};

export default DraggableWindow;
