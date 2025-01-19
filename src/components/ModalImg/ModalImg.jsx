import Modal from 'react-modal';
import css from './ModalImg.module.css';

Modal.setAppElement('#root');

export default function ModalImg({ src, closeModal, isOpen }) {
  return (
    <>
      <Modal
        isOpen={isOpen}
        shouldCloseOnOverlayClick={true}
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
          <button onClick={() => closeModal()} className={css.modalButton}>
            X
          </button>
        </div>
      </Modal>
    </>
  );
}
