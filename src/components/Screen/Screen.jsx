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
    console.log('start app click');
    const newApplication = {
      id: openApplications.length + 1,
    };
    setOpenApplications([...openApplications, newApplication]);
  };

  const closeApplication = (id) => {
    setOpenApplications(
      openApplications.filter((application) => application.id !== id)
    );
  };

  return (
    <div className="screen" ref={screenRef}>
      <button onClick={startApplication}>start calc</button>
      <button onClick={() => closeApplication(openApplications.length)}>
        end calc
      </button>
      {openApplications.map((application) => (
        <Window key={application.id} id={application.id} />;
      ))}
    </div>
  );
};

export default Screen;
