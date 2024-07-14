import { useEffect, useState } from 'react';

import grungusIdle from '../../assets/images/GrungusIdle.gif';
import grungusHungry from '../../assets/images/Grungushungrygif.gif';
import grungusStinky from '../../assets/images/Grungustinky.gif';
import grungusSleepy from '../../assets/images/Grungussleepy.gif';

import './PetApp.scss';

const PetApp = () => {
  const [hunger, setHunger] = useState(100);
  const [happiness, setHappiness] = useState(100);
  const [hygiene, setHygiene] = useState(100);

  const degradeHunger = () => {
    setHunger((prevHunger) =>
      Math.max(prevHunger - Math.floor(Math.random() * 10 + 1), 0)
    );
  };

  const degradeHappiness = () => {
    setHappiness((prevHappiness) =>
      Math.max(prevHappiness - Math.floor(Math.random() * 4 + 1), 0)
    );
  };

  const degradeHygiene = () => {
    setHygiene((prevHygiene) =>
      Math.max(prevHygiene - Math.floor(Math.random() * 4 + 1), 0)
    );
  };

  useEffect(() => {
    const hungerInterval = setInterval(
      degradeHunger,
      Math.floor(Math.random() * 10 + 1) * 1000
    );
    const happinessInterval = setInterval(
      degradeHappiness,
      Math.floor(Math.random() * 10 + 1) * 1000
    );
    const hygieneInterval = setInterval(
      degradeHygiene,
      Math.floor(Math.random() * 10 + 1) * 1000
    );

    return () => {
      clearInterval(hungerInterval);
      clearInterval(happinessInterval);
      clearInterval(hygieneInterval);
    };
  }, []);

  const handleFeed = () => {
    setHunger((prevHunger) => Math.min(prevHunger + 25, 100));
  };

  const handlePlay = () => {
    setHappiness((prevHappiness) => Math.min(prevHappiness + 25, 100));
  };

  const handleBath = () => {
    setHygiene((prevHygiene) => Math.min(prevHygiene + 25, 100));
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
              : happiness < 50
              ? grungusSleepy
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
