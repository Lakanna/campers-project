import {
  capitalizeFirstLetter,
  featuresExisted,
} from '../../services/helpers.js';
import Icon from '../Icon/Icon.jsx';
import css from './FilteredIcons.module.css';
import clsx from 'clsx';

export default function FilteredIcons({ camper, className }) {
  const filteredFeatures = featuresExisted(camper);

  return (
    <ul className={css.iconsContainer}>
      {filteredFeatures.map((feature, idx) => (
        <li key={idx} className={clsx(css.featureLi, className)}>
          <Icon id={feature} width={20} height={20} className={css.feature} />
          {capitalizeFirstLetter(feature)}
        </li>
      ))}
      <li className={clsx(css.featureLi, className)}>
        <Icon id="petrol" width={20} height={20} className={css.feature} />
        {capitalizeFirstLetter(camper.engine)}
      </li>
      <li className={clsx(css.featureLi, className)}>
        <Icon id="diagram" width={20} height={20} className={css.feature} />
        {capitalizeFirstLetter(camper.transmission)}
      </li>
    </ul>
  );
}
