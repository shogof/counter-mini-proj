import './Button.css';

function Button({ text, clickHandler }) {
  return (
    <button type='button' onClick={clickHandler} className={text}>
      {text}
    </button>
  );
}

export default Button;
