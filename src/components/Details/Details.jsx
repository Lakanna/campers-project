import { capitalizeFirstLetter } from '../../services/helpers.js';
import FilteredIcons from '../FilteredIcons/FilteredIcons.jsx';
import css from './Details.module.css';

export default function Details({ camper }) {
  const keys = ['form', 'length', 'width', 'height', 'tank', 'consumption'];

  return (
    <div className={css.detailsContainer}>
      <div className={css.iconsContainer}>
        <FilteredIcons camper={camper} className="details" />
      </div>
      <div>
        <h3 className={css.titleContainer}>Vehicle details</h3>

        <div className={css.detailsList}>
          <ul>
            {keys.map((key) => (
              <li key={key} className={css.detailsItem}>
                <span>{key.charAt(0).toUpperCase() + key.slice(1)}</span>
                <span>
                  {capitalizeFirstLetter(camper[key])
                    .replace(/([0-9.]+)([a-zA-Z]+)/, '$1 $2')
                    .replace(/([a-z])([A-Z])/g, '$1 $2')}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
