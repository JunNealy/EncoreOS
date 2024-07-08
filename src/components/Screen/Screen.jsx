import { useEffect, useRef, useState } from 'react';
import Chat from '../Chat/Chat';
import Window from '../Window/Window';
import './Screen.scss';

const Screen = () => {
  const [openApplications, setOpenApplications] = useState([]);
  const [maxXY, setMaxXY] = useState({ maxX: 0, maxY: 0 });
  const screenRef = useRef(null);

  useEffect(() => {
    if (screenRef.current) {
      const screenBounds = screenRef.current.getBoundingClientRect();
      setMaxXY({ maxX: screenBounds.width, maxY: screenBounds.height });
    }
  }, []);

  const startApplication = () => {
    const newApplication = {
      id: openApplications.length + 1,
    };
    setOpenApplications([...openApplications, newApplication]);
  };

  const bringToFront = (id) => {
    setOpenApplications((prevApps) => {
      const appIndex = prevApps.findIndex((app) => app.id === id);
      const updatedApps = [...prevApps];
      const [movedApp] = updatedApps.splice(appIndex, 1);
      updatedApps.push(movedApp);
      return updatedApps;
    });
  };

  return (
    <div className="screen" ref={screenRef}>
      <button onClick={startApplication}>Start Application</button>
      {openApplications.map((application) => (
        <Window
          key={application.id}
          id={application.id}
          zindex={application.id * 10} // Example of z-index assignment
          onClick={() => bringToFront(application.id)}
        />
      ))}
    </div>
  );
};

export default Screen;
