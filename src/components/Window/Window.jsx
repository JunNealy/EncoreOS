import { useState } from 'react';

import './Window.scss';

const DraggableWindow = () => {
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

  const handleMouseMove = (e) => {
    if (!isDragging) return;

    setPosition({
      x: e.clientX - initialPosition.x,
      y: e.clientY - initialPosition.y,
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
