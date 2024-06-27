'use strict';
import axios from 'axios';
import { fetchImages } from './js/pixabay-api.js';
import {
  displayImages,
  hideLoader,
  showLoader,
} from './js/render-functions.js';
import { showBtn, hideBtn } from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import imageUrl from './img/close.png';
export const loader = document.querySelector('.loader');
export const showMoreBtn = document.querySelector('.show-more');

let page = 1;
let searchQuery = null;

const formEl = document.querySelector('form');
const gallery = document.querySelector('.gallery');
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionsDelay: 250,
});

formEl.addEventListener('submit', async event => {
  event.preventDefault();

  gallery.innerHTML = '';

  searchQuery = event.currentTarget.elements['search-query'].value.trim();

  if (searchQuery === '') {
    iziToast.error({
      message: 'Please enter a search term.',
      position: 'topRight',
      titleColor: '#fff',
      titleSize: '16px',
      backgroundColor: 'red',
      messageColor: 'white',
      iconUrl: imageUrl,
      theme: 'dark',
    });
    return;
  }

  showLoader();
  hideBtn();

  page = 1;

  try {
    const res = await fetchImages(searchQuery, page);
    if (res.data.total > 0) {
      iziToast.success({
        position: 'topRight',
        message: `We find ${res.data.total} photo`,
      });
    }
    if (res.data.hits.length === 0) {
      iziToast.error({
        message:
          'Sorry, there are no images matching your search query. Please try again.',
        position: 'topRight',
        titleColor: '#fff',
        titleSize: '16px',
        backgroundColor: 'red',
        messageColor: 'white',
        iconUrl: imageUrl,
        theme: 'dark',
      });
    }

    gallery.innerHTML = displayImages(res.data.hits);
    lightbox.refresh();

    if (res.data.total > 15) {
      showBtn();
    }
  } catch (error) {
    console.log(error);
  } finally {
    event.target.reset();
    hideLoader();
  }
});

showMoreBtn.addEventListener('click', async () => {
  page++;
  try {
    const res = await fetchImages(searchQuery, page);
    gallery.insertAdjacentHTML('beforeend', displayImages(res.data.hits));
    const { height: cardHeight } = document
      .querySelector('.gallery')
      .firstElementChild.getBoundingClientRect();

    window.scrollBy({
      top: cardHeight * 2,
      behavior: 'smooth',
    });
    const lastPage = Math.ceil(res.data.totalHits / 15);
    if (page === lastPage) {
      hideBtn();
      iziToast.info({
        position: 'topRight',
        message: "We're sorry, but you've reached the end of search results.",
      });
    }
  } catch (error) {
    console.log(error);
  } finally {
    hideLoader;
  }
});