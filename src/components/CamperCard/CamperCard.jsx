import css from './CamperCard.module.css';

import Icon from '../Icon/Icon.jsx';
import Button from '../Button/Button.jsx';
import CamperInfo from '../CamperInfo/CamperInfo.jsx';
import FilteredIcons from '../FilteredIcons/FilteredIcons.jsx';

import { useDispatch, useSelector } from 'react-redux';
import { selectFavorite } from '../../redux/selectors.js';
import { toggleFavorite } from '../../redux/favoriteSlice.js';

import { formatPrice } from '../../services/helpers.js';

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
