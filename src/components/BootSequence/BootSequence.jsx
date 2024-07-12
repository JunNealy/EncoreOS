import React, { useState, useEffect } from 'react';
import bootSound from '../../assets/sound/BootSound.mp3';
import './BootSequence.scss';

const boot = new Audio(bootSound);

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
          clearInterval(interval);
          setShowLoadingScreen(true);
          setTimeout(() => {
            handleBootComplete();
          }, 2000);
        }
      }, 950);

      return () => clearInterval(interval);
    }
  }, [sequenceStarted, handleBootComplete]);

  const handleStartBoot = () => {
    setSequenceStarted(true);
  };

  return (
    <div className="boot-screen">
      {!sequenceStarted && (
        <button onClick={handleStartBoot}>Start Boot Sequence</button>
      )}
      {sequenceStarted && !showLoadingScreen && (
        <div>
          {lines.map((line, index) => (
            <div key={index}>{line}</div>
          ))}
        </div>
      )}
      {showLoadingScreen && (
        <div className="loading-screen">
          <p>Loading Operating System...</p>
        </div>
      )}
    </div>
  );
};

export default BootSequence;
