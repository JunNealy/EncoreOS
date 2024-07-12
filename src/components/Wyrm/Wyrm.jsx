//IMPORTS
import { useEffect, useState } from 'react';
import './Wyrm.scss';

// GAME INITIALIZATION VARIABLES
const BOARD_SIZE = 20;
//Randomize these later on maybe?
const STARTING_WYRM = [{ x: 2, y: 2 }];
const FIRST_VILLAGE = { x: 5, y: 5 };

const Wyrm = () => {
  const [wyrm, setWyrm] = useState(STARTING_WYRM);
  const [wyrmDirection, setWyrmDirection] = useState({});
  const [village, setVillage] = useState(FIRST_VILLAGE);
  const [gameOver, setGameOver] = useState(false);

  //Controls
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
          if (wyrmDirection.y === 0) setWyrmDirection({ x: -1, y: 0 });
          break;
        case 'ArrowRight':
          if (wyrmDirection.y === 0) setWyrmDirection({ x: 1, y: -1 });
          break;
        default:
          break;
      }
    };
  }, []);

  // BOARD LOGIC GOES HERE
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

  return <div className="wyrm-game">{createBoard()}</div>;
};

export default Wyrm;
