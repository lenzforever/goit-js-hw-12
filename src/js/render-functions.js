'use strict';

import { loader, showMoreBtn } from '../main';

export function displayImages(images) {
  return images
    .map(
      image => `
      <div class="gallery-box">
      <div class="gallery-image">
      <a href="${image.largeImageURL}">
        <img src="${image.webformatURL}" alt="${image.tags}" width="400" height="280">
      </a>
      </div>
       <div class="image-info">
          <div class="info-box>
          <p class="info-label">Likes:</p>
          <p class="info-value">${image.likes}</p>
          </div>
          <div class="info-box>
          <p class="info-label">Views:</p>
          <p class="info-value">${image.views}</p>
          </div>
          <div class="info-box>
          <p class="info-label">Comments:</p>
          <p class="info-value">${image.comments}</p>
          </div>
          <div class="info-box>
          <p class="info-label">Downloads:</p>
          <p class="info-value">${image.downloads}</p>
          </div>
        </div>
      </div>
    `
    )
    .join('');
}

export function showLoader() {
  loader.classList.remove('is-hidden');
}
export function hideLoader() {
  loader.classList.add('is-hidden');
}
export function showBtn() {
  showMoreBtn.classList.remove('is-hidden');
}
export function hideBtn() {
  showMoreBtn.classList.add('is-hidden');
}