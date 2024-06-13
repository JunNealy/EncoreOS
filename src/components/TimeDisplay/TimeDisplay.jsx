import './TimeDisplay.scss';
import { useState, useEffect } from 'react';

const TimeDisplay = () => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const tick = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(tick);
    };
  }, []);

  let hour = time.getHours() % 12;
  console.log(typeof hour);

  let minute = time.getMinutes();

  // hour = hour.padStart('2', '0');
  // minute = minute.padStart('2', '0');

  // console.log(hour, minute);

  return <p>{`${hour}:${minute}`}</p>;
};

export default TimeDisplay;
