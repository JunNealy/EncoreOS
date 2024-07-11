import { useEffect, useRef, useState } from 'react';

import { applicationIndex } from '../../configs/applicationIdnex';
import StartMenu from '../StartMenu/StartMenu';
// import Chat from '../Chat/Chat';
import Toolbar from '../Toolbar/Toolbar';
import Window from '../Window/Window';

import './Screen.scss';

const Screen = () => {
  const [openApplications, setOpenApplications] = useState([]);
  const [maxXY, setMaxXY] = useState({ maxX: 0, maxY: 0 });
  const [displayStartMenu, setDisplayStartMenu] = useState(false);
  const screenRef = useRef(null);

  useEffect(() => {
    if (screenRef.current) {
      const screenBounds = screenRef.current.getBoundingClientRect();
      setMaxXY({ maxX: screenBounds.width, maxY: screenBounds.height });
    }
  }, []);

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem('wordpadData')) || {};
    console.log(savedData);
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

  const closeWindow = (id) => {
    console.log(id);
    console.log('cliced x');
    setOpenApplications((prevApplications) => {
      return prevApplications.filter((app) => app.id != id);
    });
  };

  return (
    <div className="screen" ref={screenRef}>
      {openApplications.map((application) => (
        <Window
          key={application.id}
          id={application.id}
          appName={application.name}
          zindex={application.id * 10}
          onClick={() => bringToFront(application.id)}
          closeWindow={closeWindow}
        />
      ))}
      {displayStartMenu === true ? (
        <StartMenu startApplication={startApplication} />
      ) : (
        <></>
      )}
      <Toolbar
        openApplications={openApplications}
        bringToFront={bringToFront}
        startApplication={startApplication}
        displayStartMenu={displayStartMenu}
        setDisplayStartMenu={setDisplayStartMenu}
      />
      ;
    </div>
  );
};

export default Screen;
