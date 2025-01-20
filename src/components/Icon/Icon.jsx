import sprite from '../../assets/sprite.svg';
import css from './Icon.module.css';

export default function Icon({ id, width = 24, height = 24, className }) {
  return (
    <svg
      width={width}
      height={height}
      className={`${className} ${css.icon}`}
      preserveAspectRatio="none"
    >
      <use href={`${sprite}#${id}`} />
    </svg>
  );
}
