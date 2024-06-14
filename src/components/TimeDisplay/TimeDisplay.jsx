import { useEffect, useState } from 'react';

import './TimeDisplay.scss';

const TimeDisplay = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const tick = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(tick);
    };
  }, []);

  let unconvertedHour = time.getHours();
  let hour = time.getHours() % 12;
  hour = hour === 0 ? 12 : hour;

  let minute = time.getMinutes();

  let paddedHour = String(hour).padStart(2, '0');
  let paddedMinute = String(minute).padStart(2, '0');

  return (
    <p>
      {`${paddedHour}:${paddedMinute}` +
        `${unconvertedHour >= 12 ? ' am' : ' pm'}`}
    </p>
  );
};

export default TimeDisplay;
