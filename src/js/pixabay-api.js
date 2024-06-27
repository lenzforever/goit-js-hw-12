'use strict';
import axios from 'axios';
axios.defaults.baseURL = 'https://pixabay.com/api/';

export async function fetchImages(query, page) {
  const API_KEY = '44335332-ac36bc3e12fb03490a95e8e95';

  return await axios.get('', {
    params: {
      key: API_KEY,
      q: query,
      page,
      per_page: 15,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: 'true',
    },
  });
}