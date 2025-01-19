import { useSelector } from 'react-redux';
import css from './CampersList.module.css';
import { selectAllCampers, selectIsLoading } from '../../redux/selectors.js';
import CamperCard from '../CamperCard/CamperCard.jsx';
import Button from '../Button/Button.jsx';

export default function CampersList() {
  const isLoading = useSelector(selectIsLoading);
  const campersList = useSelector(selectAllCampers);

  const campers = campersList?.items || [];

  const handlerClick = () => {};

  return (
    !isLoading && (
      <>
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
        <div className={css.buttonContainer}>
          <Button
            text="Load more"
            onClick={handlerClick}
            className={css.loadMore}
          />
        </div>
      </>
    )
  );
}
