import './Button.scss';

const Button = ({ icon, label }) => {
  return (
    <button className="button">
      {icon ? <img className="button__icon" src={icon} alt="" /> : <></>}
      <p className="button__text">{label}</p>
    </button>
  );
};

export default Button;
