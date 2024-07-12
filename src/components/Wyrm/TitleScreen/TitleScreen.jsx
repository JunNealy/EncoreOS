import './TitleScreen.scss';

const TitleScreen = ({ onStart }) => {
  return (
    <div className="title-sceen">
      <p className="title-screen__title">WYRM</p>
      <button className="title-screen__start" onClick={onStart}>
        START
      </button>
    </div>
  );
};

export default TitleScreen;
