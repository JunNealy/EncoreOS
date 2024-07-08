import { useEffect, useRef, useState } from 'react';

import { applicationIndex } from '../../configs/applicationIdnex';
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

  const startApplication = (appName) => {
    const newApplication = {
      id: openApplications.length + 1,
      name: appName,
    };
    setOpenApplications([...openApplications, newApplication]);
  };

  const bringToFront = (id) => {
    setOpenApplications((prevApplications) => {
      const appIndex = prevApplications.findIndex((app) => app.id === id);
      const updatedApps = [...prevApplications];
      const [movedApp] = updatedApps.splice(appIndex, 1);
      updatedApps.push(movedApp);
      return updatedApps;
    });
  };

  return (
    <div className="screen" ref={screenRef}>
      <button onClick={startApplication(applicationIndex.Calculator)}>
        Start Application
      </button>
      {openApplications.map((application) => (
        <Window
          key={application.id}
          id={application.id}
          zindex={application.id * 10} //leaving this as touchstone example for now, implmenet more robust in future maybe other things might need to move in z index other than windows and this seems unbounded?
          onClick={() => bringToFront(application.id)}
        />
      ))}
    </div>
  );
};

export default Screen;
