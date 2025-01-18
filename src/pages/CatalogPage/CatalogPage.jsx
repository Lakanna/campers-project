import Catalog from '../../components/Catalog/Catalog.jsx';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCampers } from '../../redux/operations.js';
import {
  selectError,
  selectIsLoading,
  selectSearchParams,
} from '../../redux/selectors.js';

import { ToastContainer, toast } from 'react-toastify';

export default function CatalogPage() {
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
    <>
      {!isloading && <Catalog />}
      <ToastContainer />
    </>
  );
}
