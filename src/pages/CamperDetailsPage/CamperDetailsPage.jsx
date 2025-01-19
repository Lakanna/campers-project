import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchCamperById } from '../../redux/operations.js';
import {
  selectError,
  selectIsLoading,
  selectSelectedCamper,
} from '../../redux/selectors.js';

import css from './CamperDetailsPage.module.css';
import CardOfCamper from '../../components/CardOfCamper/CardOfCamper.jsx';
import TogglerPage from '../../components/TogglerPage/TogglerPage.jsx';
import Details from '../../components/Details/Details.jsx';
import Reviews from '../../components/Reviews/Reviews.jsx';
import OrderForm from '../../components/OrderForm/OrderForm.jsx';
import { toast } from 'react-toastify';
import Loader from '../../components/Loader/Loader.jsx';

export default function CamperDetailsPage() {
  const { id } = useParams();
  const dispatch = useDispatch();

  // Локальний стейт для вкладок
  const [activeTab, setActiveTab] = useState('details');

  const selectedCamper = useSelector(selectSelectedCamper);

  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const notify = () => toast.error('Something went wrong. Please, try again');
  if (error) notify();

  useEffect(() => {
    dispatch(fetchCamperById(id));
  }, [dispatch, id]);

  // Обробка перемикання вкладок
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <main>
      <div className={css.page}>
        <div className={css.top}>
          {isLoading ? (
            <Loader />
          ) : error ? (
            <p className={css.error}>
              Error: someting went wrong. Please, try again.
            </p>
          ) : (
            selectedCamper && <CardOfCamper camper={selectedCamper} />
          )}
        </div>

        {selectedCamper && (
          <TogglerPage activeTab={activeTab} onTabChange={handleTabChange} />
        )}

        {/* Нижня частина сторінки */}
        <div className={css.bottom}>
          {/* Ліва частина */}
          <div className={css.left}>
            {activeTab === 'details' && selectedCamper && (
              <Details camper={selectedCamper} />
            )}
            {activeTab === 'reviews' && selectedCamper && (
              <Reviews reviews={selectedCamper.reviews} />
            )}
          </div>

          {/* Права частина */}
          <div className={css.right}>
            {selectedCamper && <OrderForm camper={selectedCamper} />}
          </div>
        </div>
      </div>
    </main>
  );
}
