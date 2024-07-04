import { useEffect, useRef, useState } from 'react';

import Chat from '../Chat/Chat';
import Window from '../Window/Window';

import './Screen.scss';

const Screen = () => {
  const [maxXY, setMaxXY] = useState({ maxX: 0, maxY: 0 });
  const screenRef = useRef(null);

  useEffect(() => {
    if (screenRef.current) {
      const screenBounds = screenRef.current.getBoundingClientRect();
      setMaxXY({ maxX: screenBounds.width, maxY: screenBounds.height });
    }
  }, []);

  return (
    <div className="screen" ref={screenRef}>
      <Window maxX={maxXY.maxX} maxY={maxXY.maxY} />
      <Window maxX={maxXY.maxX} maxY={maxXY.maxY} />
      <Window maxX={maxXY.maxX} maxY={maxXY.maxY} />

      <Chat />
    </div>
  );
};

export default Screen;
