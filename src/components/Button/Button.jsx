import css from './Button.module.css';

export default function Button({ text, handleClick }) {
  return (
    <button onClick={handleClick} className={css.button}>
      {text}
    </button>
  );
}
