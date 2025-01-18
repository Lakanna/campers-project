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

export default function CamperDetailsPage() {
  const { id } = useParams();
  const dispatch = useDispatch();

  // Локальний стейт для вкладок
  const [activeTab, setActiveTab] = useState('details');

  const selectedCamper = useSelector(selectSelectedCamper);
  console.log(selectedCamper, 'selectedCamper');

  const loading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

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
        {/* Рендер картки авто */}
        <div className={css.top}>
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>Error: {error}</p>
          ) : (
            selectedCamper && <CardOfCamper camper={selectedCamper} />
          )}
        </div>

        <TogglerPage activeTab={activeTab} onTabChange={handleTabChange} />

        {/* Нижня частина сторінки */}
        <div className={css.bottom}>
          {/* Ліва частина */}

          <div className={css.left}>
            {activeTab === 'details' && selectedCamper && (
              <Details camper={selectedCamper} />
            )}
            {activeTab === 'reviews' && (
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

// {
//     "id": "1",
//     "name": "Road Bear C 23-25",
//     "price": 10000,
//     "rating": 4.5,
//     "location": "Ukraine, Kyiv",
//     "description": "Embadventures, promising comfort, style, and the freedom to explore at your own pace.",
//     "form": "alcove",
//     "length": "7.3m",
//     "width": "2.65m",
//     "height": "3.65m",
//     "tank": "208l",
//     "consumption": "30l/100km",
//     "transmission": "automatic",
//     "engine": "diesel",
//     "AC": true,
//     "bathroom": true,
//     "kitchen": false,
//     "TV": true,
//     "radio": true,
//     "refrigerator": false,
//     "microwave": true,
//     "gas": false,
//     "water": true,
//     "gallery": [
//         {
//             "thumb": "https://ftp.goit.study/img/campers-test-task/1-1.webp",
//             "original": "https://ftp.goit.study/img/campers-test-task/1-1.webp"
//         },
//         {
//             "thumb": "https://ftp.goit.study/img/campers-test-task/1-2.webp",
//             "original": "https://ftp.goit.study/img/campers-test-task/1-2.webp"
//         },
//         {
//             "thumb": "https://ftp.goit.study/img/campers-test-task/1-3.webp",
//             "original": "https://ftp.goit.study/img/campers-test-task/1-3.webp"
//         }
//     ],
//     "reviews": [
//         {
//             "reviewer_name": "Alice",
//             "reviewer_rating": 5,
//             "comment": "Exceptional RV! The Road Bear C 23-25 provided a comfortable and enjoyable journey for my family. The amenities were fantastic, and the space was well-utilized. Highly recommended!"
//         },
//         {
//             "reviewer_name": "Bob",
//             "reviewer_rating": 4,
//             "comment": "Great RV for a road trip. Spacious and well-equipped. Only minor issues with the bathroom setup, but overall a wonderful experience."
//         }
//     ]
// }
