import sprite from '../../assets/sprite.svg';

export default function Icon({ id, width = 24, height = 24, className }) {
  return (
    <svg
      width={width}
      height={height}
      className={className}
      preserveAspectRatio="none"
    >
      <use href={`${sprite}#${id}`} />
    </svg>
  );
}
