//IMPORTS
import { useState } from 'react';

//GAME INITIALIZATION VARIABLES
const BOARD_SIZE = 15;
//Maybe I can randomize these later?
const STARTING_WYRM = [{ x: 2, y: 2 }];
const FIRST_VILLAGE = [{ x: 5, y: 5 }];

const Wyrm = () => {
  const [wyrm, setWyrm] = useState(STARTING_WYRM);
  const [wyrmDirection, setWyrmDirection] = useState([{}]); //add start coords once we can see the gameboard
  const [village, setVillage] = useState(FIRST_VILLAGE);
  const [gameOver, setGameOver] = useState(false);

  //BOARD LOGIC GOES HERE
  const createBoard = () => {
    const board = [];
    for (let row = 0; row < BOARD_SIZE; row++) {
      const columns = [];
      for (let column = 0; column < BOARD_SIZE; column++) {
        const isWyrm = wyrm.some(
          (segment) => segment.x === column && segment.y === row
        );
      }
    }
  };

  return <div className="wyrm"></div>;
};

export default Wyrm;
