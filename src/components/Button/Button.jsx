import './Button.scss';

const Button = ({ icon, label, style, onClick }) => {
  let buttonClass = 'button';

  if (!style) {
    return;
  } else {
    buttonClass = ` ${style}`;
  }

  return (
    <button onClick={onClick} className={buttonClass}>
      {icon ? <img className="button__icon" src={icon} alt="" /> : <></>}
      <p className="button__text">{label}</p>
    </button>
  );
};

export default Button;
