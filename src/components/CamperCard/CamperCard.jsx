import css from './CamperCard.module.css';

import Icon from '../Icon/Icon.jsx';
import Button from '../Button/Button.jsx';

import { useDispatch, useSelector } from 'react-redux';
import { selectFavorite } from '../../redux/selectors.js';
import { toggleFavorite } from '../../redux/favoriteSlice.js';

import { formatPrice } from '../../services/helpers.js';
import CamperInfo from '../CamperInfo/CamperInfo.jsx';
import FilteredIcons from '../FilteredIcons/FilteredIcons.jsx';

export default function CamperCard({ camper }) {
  const { name, price, rating, location, description, gallery, reviews } =
    camper;

  const dispatch = useDispatch();

  const favoriteItems = useSelector(selectFavorite);
  const isFavorite = favoriteItems.some((item) => item === camper.id);

  const handleToggleFavorite = () => {
    dispatch(toggleFavorite(camper.id));
  };

  const handleClick = (id) => {
    window.open(`/catalog/${id}`, '_blank');
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
        <CamperInfo rating={rating} reviews={reviews} location={location} />
        <p className={css.singleLine}>{description}</p>
        <FilteredIcons camper={camper} />
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
