import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const MY_KEY = '7759209-af26fbf7f42c83ac7a267ccb1';

export const addImages = async (query, page) => {
  const { data } = await axios.get(
    `?q=${query}&page=${page}&key=${MY_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
  return data;
};
