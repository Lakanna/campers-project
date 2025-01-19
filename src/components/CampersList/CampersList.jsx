import { useDispatch, useSelector } from 'react-redux';
import css from './CampersList.module.css';
import {
  selectAllCampers,
  selectIsLoading,
  selectLimit,
  selectPage,
} from '../../redux/selectors.js';
import CamperCard from '../CamperCard/CamperCard.jsx';
import Button from '../Button/Button.jsx';
import { setPage } from '../../redux/filtersSlice.js';

export default function CampersList() {
  const isLoading = useSelector(selectIsLoading);
  const campersList = useSelector(selectAllCampers);
  const page = useSelector(selectPage);
  const limit = useSelector(selectLimit);

  const dispatch = useDispatch();

  const campers = campersList?.items || [];
  const totalItems = campersList?.total;
  const isNextPage = totalItems > limit * page;

  const handlerClick = () => {
    const newPage = page + 1;
    console.log(newPage, 'newPage in handler');
    dispatch(setPage(newPage));
  };

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
          {isNextPage && (
            <Button
              text="Load more"
              handleClick={handlerClick}
              className={css.loadMore}
              type="button"
            />
          )}
        </div>
      </>
    )
  );
}
