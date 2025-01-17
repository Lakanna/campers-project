import css from './CamperCard.module.css';

import Icon from '../Icon/Icon.jsx';
import Button from '../Button/Button.jsx';

import { useDispatch, useSelector } from 'react-redux';
import { selectFavorite } from '../../redux/selectors.js';
import { toggleFavorite } from '../../redux/favoriteSlice.js';

import { FEATURE_KEYS } from '../../constants/campers.js';
import { capitalizeFirstLetter } from '../../services/helpers.js';

export default function CamperCard({ camper }) {
  const {
    name,
    price,
    rating,
    location,
    description,
    gallery,
    reviews,
    engine,
    transmission,
  } = camper;

  const dispatch = useDispatch();

  const favoriteItems = useSelector(selectFavorite);
  const isFavorite = favoriteItems.some((item) => item === camper.id);

  const handleToggleFavorite = () => {
    dispatch(toggleFavorite(camper.id));
  };

  const selectedFeatures = FEATURE_KEYS.reduce((acc, key) => {
    if (key in camper) {
      acc[key] = camper[key];
    }
    return acc;
  }, {});

  const filteredFeatures = [];

  for (const key in selectedFeatures) {
    if (selectedFeatures[key]) {
      filteredFeatures.push(key);
    }
  }

  const handleClick = (id) => {
    window.open(`/catalog/${id}`, '_blank');
  };

  const formatPrice = (price) => {
    return Number(price).toFixed(2);
  };

  return (
    <div className={css.card}>
      <div className={css.imgContainer}>
        <img src={gallery[0].original} alt={name} className={css.img} />
      </div>
      <div className={css.camperInfo}>
        <div className={css.nameContainer}>
          <h2 className={css.singleLine}>{name}</h2>
          <div className={css.priceContainer}>
            <h2>€{formatPrice(price)}</h2>
            <button
              className={css.favoriteButton}
              onClick={handleToggleFavorite}
            >
              <Icon
                id="favoritepressed"
                width={24}
                height={21}
                className={isFavorite ? css.favorited : ''}
              />
            </button>
          </div>
        </div>
        <div className={css.locationContainer}>
          <Icon id="starDefault" width={16} height={16} className={css.star} />
          <p>
            {rating}({reviews.length} Rewievs)
          </p>

          <Icon id="Map" width={20} height={20} className={css.mapActive} />
          <p>{location}</p>
        </div>
        <p className={css.singleLine}>{description}</p>
        <ul className={css.iconsContainer}>
          {filteredFeatures.map((feature, idx) => (
            <li key={idx} className={css.featureLi}>
              <Icon
                id={feature}
                width={20}
                height={20}
                className={css.feature}
              />
              {capitalizeFirstLetter(feature)}
            </li>
          ))}
          <li className={css.featureLi}>
            <Icon id="petrol" width={20} height={20} className={css.feature} />
            {capitalizeFirstLetter(engine)}
          </li>
          <li className={css.featureLi}>
            <Icon id="diagram" width={20} height={20} className={css.feature} />
            {capitalizeFirstLetter(transmission)}
          </li>
        </ul>
        <Button text="Show more" handleClick={() => handleClick(camper.id)} />
      </div>
    </div>
  );
}

// {
//             "id": "1",
//             "name": "Road Bear C 23-25",
//             "price": 10000,
//             "rating": 4.5,
//             "location": "Ukraine, Kyiv",
//             "description": "Embadventures, promising comfort, style, and the freedom to explore at your own pace.",
//             "form": "alcove",
//             "length": "7.3m",
//             "width": "2.65m",
//             "height": "3.65m",
//             "tank": "208l",
//             "consumption": "30l/100km",
//             "transmission": "automatic",
//             "engine": "diesel",
//             "AC": true,
//             "bathroom": true,
//             "kitchen": false,
//             "TV": true,
//             "radio": true,
//             "refrigerator": false,
//             "microwave": true,
//             "gas": false,
//             "water": true,
//             "gallery": [
//                 {
//                     "thumb": "https://ftp.goit.study/img/campers-test-task/1-1.webp",
//                     "original": "https://ftp.goit.study/img/campers-test-task/1-1.webp"
//                 },
//                 {
//                     "thumb": "https://ftp.goit.study/img/campers-test-task/1-2.webp",
//                     "original": "https://ftp.goit.study/img/campers-test-task/1-2.webp"
//                 },
//                 {
//                     "thumb": "https://ftp.goit.study/img/campers-test-task/1-3.webp",
//                     "original": "https://ftp.goit.study/img/campers-test-task/1-3.webp"
//                 }
//             ],
//             "reviews": [
//                 {
//                     "reviewer_name": "Alice",
//                     "reviewer_rating": 5,
//                     "comment": "Exceptional RV! The Road Bear C 23-25 provided a comfortable and enjoyable journey for my family. The amenities were fantastic, and the space was well-utilized. Highly recommended!"
//                 },
//                 {
//                     "reviewer_name": "Bob",
//                     "reviewer_rating": 4,
//                     "comment": "Great RV for a road trip. Spacious and well-equipped. Only minor issues with the bathroom setup, but overall a wonderful experience."
//                 }
//             ]
//         },
