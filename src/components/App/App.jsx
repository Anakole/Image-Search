import { useState, useEffect } from 'react';
import * as API from 'services/Api';
import { Button } from '../Button/Button';
import { ImageGallery } from '../ImageGallery/ImageGallery';
import { Loader } from '../Loader/Loader';
import { Searchbar } from '../Searchbar/Searchbar';
import { Container, Message } from './App.styled';

export const App = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [total, setTotal] = useState(null);

  useEffect(() => {
    if (!query) {
      return;
    }

    async function addImages() {
      try {
        setLoading(true);

        const images = await API.addImages(query, page);

        setQuery(query);
        setPage(page);
        setImages(state => [...state, ...images.hits]);
        setTotal(images.total);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    addImages();
  }, [query, page]);

  const handleFormSubmit = query => {
    setQuery(query);
    setPage(1);
    setImages([]);
  };

  const loadMore = () => {
    setPage(prevState => prevState + 1);
  };

  return (
    <Container>
      <Searchbar onSubmit={handleFormSubmit} />
      {isLoading && <Loader />}
      {total === 0 && <Message>Oops, nothing was found for "{query}".</Message>}
      <ImageGallery images={images} />
      {images.length >= 12 && <Button onClick={loadMore} />}
    </Container>
  );
};
