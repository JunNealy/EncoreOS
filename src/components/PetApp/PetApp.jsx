import { useEffect, useState } from 'react';

import './PetApp.scss';

const PetApp = () => {
  const [hunger, setHunger] = useState(100);
  const [happiness, setHappiness] = useState(100);
  const [hygeine, setHygeine] = useState(100);

  const degradeNeeds = () => {
    let diff = Math.floor(Math.random() * 4 + 1);
    console.log(diff);
    setHunger((prevHunger) => Math.max(prevHunger - diff, 0));
    setHappiness((prevHappiness) => Math.max(prevHappiness - diff, 0));
    setHygeine((prevHygeiene) => Math.max(prevHygeiene - diff, 0));
    console.log(hunger);
    console.log(happiness);
    console.log(hygeine);
  };

  useEffect(() => {
    const needLoop = () => {
      const interval = Math.floor(Math.random() * 10 + 1) * 1000;
      setTimeout(degradeNeeds, interval);
      setInterval(degradeNeeds, interval);
    };

    needLoop();
  }, []);

  const handleFeed = () => {
    setHunger((prevHunger) => Math.max(prevHunger + 25, 100));
    console.log('INCREMENT HUNGER', hunger);
  };

  const handlePlay = () => {
    setHunger((prevHappiness) => Math.max(prevHappiness + 25, 100));
    console.log('INCREMENT HAPPINESS', happiness);
  };

  const handleBath = () => {
    setHunger((prevHygeine) => Math.max(prevHygeine + 25, 100));
    console.log('INCREMENT HYGIENE', hygeine);
  };

  return (
    <div className="pet-app">
      <div className="pet-app__needs">
        <div className="pet-app__needs-hunger">
          <div className="pet-app__needs-hunger-meter"></div>
        </div>
        <div className="pet-app__needs-happiness">
          {' '}
          <div className="pet-app__needs-happiness-meter"></div>
        </div>
        <div className="pet-app__needs-hygeine">
          <div className="pet-app__needs-hygeine-meter"></div>
        </div>
      </div>
      <div className="pet-app__pet-display"></div>
      <div className="pet-app__actions">
        <button className="pet-app__actions-feed" onClick={handleFeed}>
          Feed
        </button>
        <button className="pet-app__actions-play" onClick={handlePlay}>
          Play
        </button>
        <button className="pet-app__actions-bath" onClick={handleBath}>
          Bath
        </button>
      </div>
    </div>
  );
};

export default PetApp;
