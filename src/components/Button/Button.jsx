import encoreLogo from '../../assets/copyENCORELOGOCANDIDATEpx10.png';

import './Button.scss';

const Button = () => {
  return (
    <button className="button">
      <img className="button__icon" src={encoreLogo} alt="" />
      <p className="button__text">Start</p>
    </button>
  );
};

export default Button;
