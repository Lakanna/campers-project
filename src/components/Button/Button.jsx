import css from './Button.module.css';

export default function Button({ text, handleClick, className, type }) {
  return (
    <button
      onClick={handleClick}
      className={`${css.button} ${className} `}
      type={type ? type : 'submit'}
    >
      {text}
    </button>
  );
}
