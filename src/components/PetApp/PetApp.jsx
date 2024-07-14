import { useEffect, useState } from 'react';

import grungusIdle from '../../assets/images/Grungusidle.gif';
import grungusHungry from '../../assets/images/Grungushungrygif.gif';
import grungusStinky from '../../assets/images/Grungustinky.gif';

import './PetApp.scss';

const PetApp = () => {
  const [hunger, setHunger] = useState(100);
  const [happiness, setHappiness] = useState(100);
  const [hygiene, setHygiene] = useState(100);

  const degradeNeeds = () => {
    setHunger((prevHunger) =>
      Math.max(prevHunger - Math.floor(Math.random() * 10 + 1), 0)
    );
    setHappiness((prevHappiness) =>
      Math.max(prevHappiness - Math.floor(Math.random() * 4 + 1), 0)
    );
    setHygiene((prevHygiene) =>
      Math.max(prevHygiene - Math.floor(Math.random() * 4 + 1), 0)
    );
    console.log(hunger);
    console.log(happiness);
    console.log(hygiene);
  };

  useEffect(() => {
    const needLoop = () => {
      const interval = Math.floor(Math.random() * 100 + 1) * 1000;
      setTimeout(degradeNeeds, interval);
    };

    needLoop();
  }, []);

  const handleFeed = () => {
    setHunger((prevHunger) => Math.min(prevHunger + 25, 100));
    console.log('INCREMENT HUNGER', hunger);
  };

  const handlePlay = () => {
    setHappiness((prevHappiness) => Math.min(prevHappiness + 25, 100));
    console.log('INCREMENT HAPPINESS', happiness);
  };

  const handleBath = () => {
    setHygiene((prevHygiene) => Math.min(prevHygiene + 25, 100));
    console.log('INCREMENT HYGIENE', hygiene);
  };

  return (
    <div className="pet-app">
      <div className="pet-app__needs">
        <div className="pet-app__needs-hunger">
          <div
            className="pet-app__needs-hunger-meter"
            style={{ width: `${hunger}%` }}
          ></div>
        </div>
        <div className="pet-app__needs-happiness">
          <div
            className="pet-app__needs-happiness-meter"
            style={{ width: `${happiness}%` }}
          ></div>
        </div>
        <div className="pet-app__needs-hygiene">
          <div
            className="pet-app__needs-hygiene-meter"
            style={{ width: `${hygiene}%` }}
          ></div>
        </div>
      </div>
      <div className="pet-app__pet-display">
        <img
          className="pet-app__pet-display-grungus"
          src={
            hunger < 50
              ? grungusHungry
              : hygiene < 50
              ? grungusStinky
              : grungusIdle
          }
          alt=""
        />
      </div>
      <div className="pet-app__actions">
        <button
          className="pet-app__actions-feed action-button"
          onClick={handleFeed}
        >
          Feed
        </button>
        <button
          className="pet-app__actions-play action-button"
          onClick={handlePlay}
        >
          Play
        </button>
        <button
          className="pet-app__actions-bath action-button"
          onClick={handleBath}
        >
          Bath
        </button>
      </div>
    </div>
  );
};

export default PetApp;
