//IMPORTS
import { useEffect, useState } from 'react';
import './Wyrm.scss';

// GAME INITIALIZATION VARIABLES
const BOARD_SIZE = 20;
//Randomize these later on maybe?
const STARTING_WYRM = [{ x: 2, y: 2 }];
const FIRST_VILLAGE = { x: 5, y: 5 };
const UPDATE_INTERVAL = 300;

const Wyrm = () => {
  const [wyrm, setWyrm] = useState(STARTING_WYRM);
  const [wyrmDirection, setWyrmDirection] = useState({});
  const [village, setVillage] = useState(FIRST_VILLAGE);
  const [gameOver, setGameOver] = useState(false);

  // BOARD CREATION LOGIC GOES HERE
  const createBoard = () => {
    const board = [];
    for (let row = 0; row < BOARD_SIZE; row++) {
      const columns = [];
      for (let column = 0; column < BOARD_SIZE; column++) {
        const isWyrm = wyrm.some(
          (segment) => segment.x === column && segment.y === row
        );
        const isVillage = village.x === column && village.y === row;
        columns.push(
          <div
            key={`${row}-${column}`}
            className={`cell ${isWyrm ? 'wyrm' : ''} ${
              isVillage ? 'village' : ''
            }`}
          ></div>
        );
      }
      board.push(
        <div key={row} className="row">
          {columns}
        </div>
      );
    }
    return board;
  };

  //CONTROLLER LOGIC
  useEffect(() => {
    const handleKeyPress = (event) => {
      switch (event.key) {
        case 'ArrowUp':
          if (wyrmDirection.y === 0) setWyrmDirection({ x: 0, y: -1 });
          break;
        case 'ArrowDown':
          if (wyrmDirection.y === 0) setWyrmDirection({ x: 0, y: 1 });
          break;
        case 'ArrowLeft':
          if (wyrmDirection.x === 0) setWyrmDirection({ x: -1, y: 0 });
          break;
        case 'ArrowRight':
          if (wyrmDirection.x === 0) setWyrmDirection({ x: 1, y: -1 });
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [wyrmDirection]);

  //MOVE THE WYRM LOGIC
  useEffect(() => {
    if (gameOver) return;
    const moveWyrm = () => {
      setWyrm((prevWyrm) => {
        const newWyrm = [...prevWyrm];
        const wyrmHead = { ...newWyrm[0] };
        wyrmHead.x += wyrmDirection.x;
        wyrmHead.y += wyrmDirection.y;
        newWyrm.unshift(wyrmHead);
        newWyrm.pop();
        return newWyrm;
      });
    };

    const moveInterval = setInterval(moveWyrm, UPDATE_INTERVAL);

    return () => clearInterval(moveInterval);
  }, [wyrmDirection, gameOver]);

  //GAME RUN LOOP LOGIC
  const checkCollision = (wyrmHead) => {
    if (
      wyrmHead.x < 0 ||
      wyrmHead.x >= BOARD_SIZE ||
      wyrmHead.y < 0 ||
      wyrmHead.y >= BOARD_SIZE
    ) {
      return true;
    }

    for (let i = 1; i < wyrm.length; i++) {
      if (wyrm[i].x === wyrmHead.x && wyrm[i].y === wyrmHead.y) {
        return true;
      }
    }

    return false;
  };

  const moveWyrm = () => {
    setWyrm((prevWyrm) => {
      const newWyrm = [...prevWyrm];
      const wyrmHead = { ...newWyrm[0] };
      wyrmHead.x += wyrmDirection.x;
      wyrmHead.y += wyrmDirection.y;

      if (checkCollision(wyrmHead)) {
        setGameOver(true);
        return prevWyrm;
      }

      newWyrm.unshift(wyrmHead);

      if (wyrmHead.x === village.x && wyrmHead.y === village.y) {
        setVillage({
          x: Math.floor(Math.random() * BOARD_SIZE),
          y: Math.floor(Math.random() * BOARD_SIZE),
        });
      }
    });
  };

  return <div className="wyrm-game">{createBoard()}</div>;
};

export default Wyrm;
