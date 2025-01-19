import Catalog from '../../components/Catalog/Catalog.jsx';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCampers } from '../../redux/operations.js';
import {
  selectError,
  selectIsLoading,
  selectSearchParams,
} from '../../redux/selectors.js';

import { toast } from 'react-toastify';
import Loader from '../../components/Loader/Loader.jsx';

export default function CatalogPage() {
  const dispatch = useDispatch();

  const isloading = useSelector(selectIsLoading);

  const searchParams = useSelector(selectSearchParams);

  const isError = useSelector(selectError);

  const notify = () =>
    toast.error(
      'There are no results for this request. Try to change the search parameters.',
      {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: 'colored',
      },
    );

  useEffect(() => {
    if (isError) {
      notify();
    }
  }, [isError]);

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch, searchParams]);

  return (
    <>
      {isloading && <Loader />}
      {!isloading && <Catalog />}
    </>
  );
}
