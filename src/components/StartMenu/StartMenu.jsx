import { applicationIndex } from '../../configs/applicationIdnex.js';
import Button from '../Button/Button.jsx';
import { useEffect, useRef } from 'react';
import './StartMenu.scss';
const apps = applicationIndex.applications;

const shutDown = () => {
  close();
};

const StartMenu = ({ startApplication, setDisplayStartMenu }) => {
  const startMenuRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        startMenuRef.current &&
        !startMenuRef.current.contains(event.target)
      ) {
        setDisplayStartMenu(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [setDisplayStartMenu]);

  return (
    <div ref={startMenuRef} className="start-menu">
      {apps.map((application, index) => (
        <Button
          key={index}
          msgStyle={index % 2 != 0 ? 'plain' : 'highlight'}
          icon={application.icon}
          onClick={() => {
            startApplication(application.app);
          }}
          label={application.name}
          style={'start-button'}
        />
      ))}
      <Button onClick={shutDown} label={'Shut Down'} style={'start-button'} />
    </div>
  );
};

export default StartMenu;
