import { useEffect, useRef, useState } from 'react';
import BootSequence from '../BootSequence/BootSequence';
import StartMenu from '../StartMenu/StartMenu';
import Toolbar from '../Toolbar/Toolbar';
import Window from '../Window/Window';
import './Screen.scss';
import DesktopIcons from '../DesktopIcons/DesktopIcons';

const Screen = () => {
  const [bootComplete, setBootComplete] = useState(false);
  const [openApplications, setOpenApplications] = useState([]);
  const [maxXY, setMaxXY] = useState({ maxX: 0, maxY: 0 });
  const [displayStartMenu, setDisplayStartMenu] = useState(false);
  const screenRef = useRef(null);
  const [focusedApp, setFocusedApp] = useState('');

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

  useEffect(() => {
    setFocusedApp(openApplications[0]);
  }, [openApplications]);

  const startApplication = (appName) => {
    const newApplication = {
      id: openApplications.length + 1,
      name: appName,
      isVisible: true,
    };
    setOpenApplications([...openApplications, newApplication]);
    setDisplayStartMenu(false);
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
    setOpenApplications((prevApplications) => {
      return prevApplications.filter((app) => app.id != id);
    });
  };

  const handleBootComplete = () => {
    setBootComplete(true);
  };

  return (
    <div className="screen" ref={screenRef}>
      {!bootComplete ? (
        <BootSequence handleBootComplete={handleBootComplete} />
      ) : (
        <></>
      )}
      <DesktopIcons startApplication={startApplication} />
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
        <StartMenu
          setDisplayStartMenu={setDisplayStartMenu}
          startApplication={startApplication}
        />
      ) : (
        <></>
      )}
      <Toolbar
        focusedApp={focusedApp}
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
