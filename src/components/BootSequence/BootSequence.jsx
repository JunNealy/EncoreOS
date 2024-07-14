import { useState, useEffect } from 'react';
import bootSound from '../../assets/sound/BootSound.mp3';
import './BootSequence.scss';
import startChime from '../../assets/sound/StartChime.mp3';

const boot = new Audio(bootSound);
const start = new Audio(startChime);

const BootSequence = ({ handleBootComplete }) => {
  const [sequenceStarted, setSequenceStarted] = useState(false);
  const [lines, setLines] = useState([]);
  const [showLoadingScreen, setShowLoadingScreen] = useState(false);

  useEffect(() => {
    if (sequenceStarted) {
      boot.play();
      const bootText = [
        'Memory Testing: 65536K OK',
        'Detecting Primary Main: HDD QuadArray 3000XT',
        'Detecting Auxiliary : CD-ROM Drive Model UltraDrive ZX-7500',
        'Keyboard Detected: OK',
        'Mouse Detected: OK',
        'BIOS Version 1.04, Copyright (C) 199�, Encore Softlutions Inc.',
        'CPU: Exium 75 MHz',
        'System Memory: 65536 KB',
        'CMOS Checksum OK',
        'Floppy Disk(s) OK',
        'Reticulation of Splines OK',
      ];

      let lineIndex = 0;
      const interval = setInterval(() => {
        if (lineIndex < bootText.length) {
          setLines((prevLines) => [...prevLines, bootText[lineIndex]]);
          lineIndex++;
        } else {
          start.play();
          clearInterval(interval);
          setShowLoadingScreen(true);
          setTimeout(() => {
            handleBootComplete();
          }, 2500);
        }
      }, 920);

      return () => clearInterval(interval);
    }
  }, [sequenceStarted, handleBootComplete]);

  const handleStartBoot = () => {
    setSequenceStarted(true);
  };

  window.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
      handleStartBoot(event);
    }
  });

  return (
    <div className="boot-screen">
      {!sequenceStarted && (
        <p className="boot-screen__start-text">
          System in standby please press ENTER Key to boot
        </p>
      )}
      {sequenceStarted && !showLoadingScreen && (
        <div className="boot-screen__text">
          {lines.map((line, index) => (
            <div key={index}>{line}</div>
          ))}
        </div>
      )}
      {showLoadingScreen && <div className="loading-screen"></div>}
    </div>
  );
};

export default BootSequence;
