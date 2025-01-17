import { useSelector } from 'react-redux';
import css from './CampersList.module.css';
import { selectAllCampers, selectIsLoading } from '../../redux/selectors.js';
import CamperCard from '../CamperCard/CamperCard.jsx';

export default function CampersList() {
  const isLoading = useSelector(selectIsLoading);
  const campersList = useSelector(selectAllCampers);

  const campers = campersList?.items || [];

  return (
    !isLoading && (
      <ul className={css.camperlist}>
        {campers.length > 0 &&
          campers.map((camp) => {
            const id = camp.id;
            return (
              <li key={id} className={css.campersitem}>
                <CamperCard camper={camp} />
              </li>
            );
          })}
      </ul>
    )
  );
}
