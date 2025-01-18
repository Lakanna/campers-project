import { useEffect } from 'react';
import css from './Catalog.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCampers } from '../../redux/operations.js';
import {
  selectError,
  selectIsLoading,
  selectSearchParams,
} from '../../redux/selectors.js';
import CampersList from '../CampersList/CampersList.jsx';
import Filters from '../Filters/Filters.jsx';
import { ToastContainer, toast } from 'react-toastify';

export default function Catalog() {
  const dispatch = useDispatch();

  const isloading = useSelector(selectIsLoading);

  const searchParams = useSelector(selectSearchParams);

  const isError = useSelector(selectError);
  
  const notify = () =>
    toast(
      'There are no results for this request. Try to change the search parameters.',
    );

  useEffect(() => {
    if (isError === 'Request failed with status code 404') {
      notify();
    }
  }, [isError]);

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch, searchParams]);

  return (
    <div className={css.container}>
      <aside className={css.filters}>
        <Filters />
      </aside>

      <ToastContainer />
      <section className={css.results}>{!isloading && <CampersList />}</section>
    </div>
  );
}
