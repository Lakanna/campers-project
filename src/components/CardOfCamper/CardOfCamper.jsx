import { useState } from 'react';
import { formatPrice } from '../../services/helpers.js';
import CamperInfo from '../CamperInfo/CamperInfo.jsx';
import ModalImg from '../ModalImg/ModalImg.jsx';
import css from './CardOfCamper.module.css';

export default function CardOfCamper({ camper }) {
  const { description, name, rating, location, reviews, price, gallery } =
    camper;

  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    console.log('Modal closed');
    setSelectedImage(null);
  };

  return (
    <>
      <div className={css.mainInfo}>
        <h2>{name}</h2>
        <CamperInfo rating={rating} reviews={reviews} location={location} />
        <h2>€{formatPrice(price)}</h2>
      </div>
      <div>
        <ul className={css.imageContainer}>
          {gallery.map((item, idx) => (
            <li
              key={idx}
              className={css.imgItem}
              onClick={() => openModal(item.original)}
            >
              <img src={item.original} alt={camper.name} className={css.img} />
            </li>
          ))}
        </ul>
        {selectedImage && (
          <ModalImg
            src={selectedImage}
            closeModal={closeModal}
            isOpen={!!selectedImage}
          />
        )}
        <p className={css.description}>{description}</p>
      </div>
    </>
  );
}
