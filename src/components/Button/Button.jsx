import './Button.scss';

const Button = () => {
  return (
    <button className="button">
      <img
        className="button__icon"
        src="https://win98icons.alexmeub.com/icons/png/windows_slanted-1.png"
        alt=""
      />
      <p className="button__text">dogs</p>
    </button>
  );
};

export default Button;
