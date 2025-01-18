import Icon from '../Icon/Icon.jsx';
import css from './CamperInfo.module.css';

export default function CamperInfo({ rating, reviews, location }) {
  return (
    <div className={css.locationContainer}>
      <Icon id="starDefault" width={16} height={16} className={css.star} />
      <p>
        {rating}({reviews.length} Rewievs)
      </p>

      <Icon id="Map" width={20} height={20} className={css.mapActive} />
      <p>{location}</p>
    </div>
  );
}
