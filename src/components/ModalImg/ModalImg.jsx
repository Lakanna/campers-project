import { useState } from 'react';
import Modal from 'react-modal';
import css from './ModalImg.module.css';

Modal.setAppElement('#root');

export default function ModalImg({ src }) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <img
        src={src}
        alt="Thumbnail"
        className={css.smallImg}
        onClick={openModal}
      />
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        style={{
          content: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            background: 'none',
            border: 'none',
            position: 'relative',
          },
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
          },
        }}
      >
        <div className={css.imgContainer}>
          <img src={src} alt="Full-size" />
          <button onClick={closeModal} className={css.modalButton}>
            X
          </button>
        </div>
      </Modal>
    </>
  );
}
