import PropTypes from 'prop-types';
import { Modal } from 'components/Modal/Modal';
import { useState } from 'react';
import { GalleryImg, GalleryItem } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ webformatURL, largeImageURL, tags }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const modalToggle = () => {
    setModalOpen(!isModalOpen);
  };

  return (
    <GalleryItem>
      <GalleryImg src={webformatURL} alt={tags} onClick={modalToggle} />
      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          onClose={modalToggle}
          largeImageURL={largeImageURL}
          tags={tags}
        />
      )}
    </GalleryItem>
  );
};

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};
