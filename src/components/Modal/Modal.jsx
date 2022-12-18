import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import { Backdrop, ModalSlyled } from './Modal.styled';
import { useEffect } from 'react';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ largeImageURL, tags, onClose }) => {
  useEffect(() => {
    const handleCloseKeydown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleCloseKeydown);
    return () => {
      window.removeEventListener('keydown', handleCloseKeydown);
    };
  });

  const handleBackdropClose = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  return createPortal(
    <Backdrop onClick={handleBackdropClose}>
      <ModalSlyled>
        <img src={largeImageURL} alt={tags} />
      </ModalSlyled>
    </Backdrop>,
    modalRoot
  );
};

Modal.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};
