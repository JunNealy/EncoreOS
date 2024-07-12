import './TitleScreen.scss';

const TitleScreen = ({ onStart }) => {
  return (
    <div>
      TitleScreen
      <button onClick={onStart}>START</button>
    </div>
  );
};

export default TitleScreen;
