import css from './Button.module.css';

export default function Button({ text, handleClick, className }) {
  return (
    <button
      onClick={handleClick}
      className={`${css.button} ${className} `}
      type="submit"
    >
      {text}
    </button>
  );
}
