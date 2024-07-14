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
  };

  useEffect(() => {
    const needLoop = () => {
      const interval = Math.floor(Math.random() * 10 + 1) * 1000;
      setTimeout(degradeNeeds, interval);
    };

    needLoop();
  }, []);

  console.log(hunger);
  console.log(happiness);
  console.log(hygeine);

  return <div>PetApp</div>;
};

export default PetApp;
