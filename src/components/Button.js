import './Button.css';
import PropTypes from 'prop-types';

function Button({ text, clickHandler }) {
  return (
    <button type="button" onClick={clickHandler} className={text}>
      {text}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export default Button;
