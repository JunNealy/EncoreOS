import './GameOver.scss';

const GameOver = ({ score, handleRestart }) => {
  return (
    <div className="game-over">
      <p className="game-over__title">GameOver</p>
      <p className="game-over__score">Your Final Score: {score}</p>
      <p className="game-over__eulogy">
        THUS LO THE WYRM WAS VANQUISHED FROM THE LAND NEVER TO TROUBLE ITS KIND
        KYN AGAIN. BUT HEED FOR THE DAY MIGHT COME WHEN THE HORROR THAT ECHOES
        THROUGH THE AGES ONCE MORE RETURNS
      </p>
      <button className="game-over__restart" onClick={handleRestart}>
        RESTART
      </button>
    </div>
  );
};

export default GameOver;
