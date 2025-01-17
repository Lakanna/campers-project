import { useEffect } from 'react';
import css from './Catalog.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCampers } from '../../redux/operations.js';
import { selectAllCampers, selectIsLoading } from '../../redux/selectors.js';
import CampersList from '../CampersList/CampersList.jsx';
import Filters from '../Filters/Filters.jsx';

export default function Catalog() {
  const dispatch = useDispatch();

  const allCampers = useSelector(selectAllCampers);
  const isloading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  console.log(allCampers, 'allCampers');
  return (
    <div className={css.container}>
      <aside className={css.filters}>
        <h3>Filters</h3>
        <Filters />
      </aside>
      <section className={css.results}>{!isloading && <CampersList />}</section>
    </div>
  );
}
