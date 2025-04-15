import { getExerciseById } from '../../services/apiServices.js';
import {
  addFavouritesToStorage,
  isFavouritesExercise,
  removeFavouritesFromStorage,
} from '../favourites.js';
import iziToast from 'izitoast';
import { RatingModal } from './raiting-modal.js';
import spriteUrl from '../../img/icons.svg';

export class ExerciseModal {
  constructor() {
    this.modalOverlay = document.querySelector('.modal-overlay');
    this.modal = document.getElementById('exerciseModal');
    this.modalBody = document.querySelector('.modal-body');
    this.closeBtn = this.modal.querySelector('.modal-close');
    this.scrollbarWidth = this.getScrollbarWidth()

    this.ratingModal = new RatingModal(this.modalBody, this.render.bind(this));

    this.exercise = null;
    this.isFavorite = false;
    this.isRatingOpen = false;

    this.handleOverlayClick = this.handleOverlayClick.bind(this);
    this.handleEscKey = this.handleEscKey.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  async open(event) {
    document.querySelector(".menu-items-wrap").style = `padding-right: ${this.scrollbarWidth}`;
    document.body.style = `overflow: hidden; margin-right: ${this.scrollbarWidth}`
    const card = event.target.closest('.workout-card');
    if (!card) return;

    const id = card.dataset.id;

    this.modalOverlay.classList.add('is-open');
    this.modalBody.innerHTML = this.createSkeletonMarkup();

    try {
      this.exercise = await getExerciseById(id);
      this.isFavorite = isFavouritesExercise(this.exercise._id);

      this.render();

      this.modalOverlay.addEventListener('click', this.handleOverlayClick);
      window.addEventListener('keydown', this.handleEscKey);
      this.closeBtn.addEventListener('click', this.handleClose);
    } catch (error) {
      iziToast.error({
        title: 'Request exercise Error',
        message: error?.message,
        position: 'topRight',
      });

      console.error(error);
      this.modalBody.innerHTML =
        '<p class="error">Failed to load exercise. Try again later.</p>';
    }
  }

  close() {
    document.body.style = ""
    document.querySelector(".menu-items-wrap").style = ""

    this.modalOverlay.classList.remove('is-open');
    this.exercise = null;
    this.isFavorite = false;
    this.isRatingOpen = false;

    this.modalOverlay.removeEventListener('click', this.handleOverlayClick);
    this.closeBtn.removeEventListener('click', this.handleClose);
    window.removeEventListener('keydown', this.handleEscKey);
  }

  render() {
    this.modalBody.innerHTML = this.createExerciseMarkup();
    this.addEventListeners();
  }

  addEventListeners() {
    const favoritesBtn = this.modal.querySelector('.favorites-btn');
    const rateBtn = this.modal.querySelector('.rate-btn');

    favoritesBtn.addEventListener('click', () =>
      this.toggleFavorite(favoritesBtn)
    );
    rateBtn.addEventListener('click', () => {
      this.ratingModal.open(this.exercise._id);
      this.isRatingOpen = true;
    });
  }

  toggleFavorite(button) {
    if (this.isFavorite) {
      removeFavouritesFromStorage(this.exercise._id);
      this.isFavorite = false;
    } else {
      addFavouritesToStorage(this.exercise);
      this.isFavorite = true;
    }
    this.updateFavoritesButton(button);
  }

  updateFavoritesButton(button) {
    button.innerHTML = `
      <span class="favorites-btn-text">
        ${this.isFavorite ? 'Remove from favorites' : 'Add to favorites'}
      </span>
      <svg class="icon-heart" height="18" width="20">
        <use href="${spriteUrl}#${
      this.isFavorite ? 'icon-trash' : 'icon-heart'
    }"></use>
      </svg>
    `;
  }

  createStars(rating) {
    const fillPercent = (rating / 5) * 100;

    return `
    <div class="rating" style="--fill: ${fillPercent}%;">
      <div class="rating-bg">
        ${[...Array(5)]
          .map(
            () => `
          <svg class="star" width="18" height="18">
            <use href="${spriteUrl}#icon-Star"></use>
          </svg>
        `
          )
          .join('')}
      </div>
      <div class="rating-fill">
        ${[...Array(5)]
          .map(
            () => `
          <svg class="star" width="18" height="18">
            <use href="${spriteUrl}#icon-Star"></use>
          </svg>
        `
          )
          .join('')}
      </div>
    </div>
  `;
  }

  getScrollbarWidth() {
    return window.innerWidth - document.documentElement.clientWidth + "px";
  }

  createExerciseMarkup() {
    const ex = this.exercise;
    return `
      <div class="exercise-details">
        ${
          ex.gifUrl
            ? `<img src="${ex.gifUrl}" alt="${ex.name}" class="exercise-img">`
            : ''
        }
        <div class="exercise-content">
          <div>
            <h2 class="exercise-title">${ex.name}</h2>

            <div class="exercise-rate">
              <p>${ex.rating}</p>
              ${this.createStars(ex.rating)}
            </div>

            <ul class="exercise-info">
              <li>Target<span>${ex.target}</span></li>
              <li>Body Part<span>${ex.bodyPart}</span></li>
              <li>Equipment<span>${ex.equipment}</span></li>
              <li>Popular<span>${ex.popularity}</span></li>
              <li>Burned calories<span>${ex.burnedCalories}</span></li>
            </ul>

            <p class="exercise-description">${ex.description}</p>
          </div>

          <div class="exercise-buttons">
            <button type="button" class="favorites-btn primary-btn" data-id="${
              ex._id
            }">
              <span class="favorites-btn-text">
                ${
                  this.isFavorite ? 'Remove from favorites' : 'Add to favorites'
                }
              </span>
              <svg class="icon-heart" height="18" width="20">
                <use href="${spriteUrl}#${
      this.isFavorite ? 'icon-trash' : 'icon-heart'
    }"></use>
              </svg>
            </button>
            
            <button type="button" class="rate-btn" data-id="${
              ex._id
            }">Give a rating</button>
          </div>
        </div>
      </div>
    `;
  }

  handleOverlayClick(event) {
    if (event.target === this.modalOverlay) {
      if (this.isRatingOpen) {
        this.ratingModal.close();
        this.isRatingOpen = false;
      } else {
        this.close();
      }
    }
  }

  handleEscKey(event) {
    if (event.key === 'Escape') {
      if (this.isRatingOpen) {
        this.ratingModal.close();
        this.isRatingOpen = false;
      } else {
        this.close();
      }
    }
  }

  handleClose(event) {
    if (this.isRatingOpen) {
      this.ratingModal.close();
      this.isRatingOpen = false;
    } else {
      this.close();
    }
  }

  createSkeletonMarkup() {
    return `
    <div class="exercise-details skeleton">
      <div class="exercise-img skeleton-img"></div>
      <div class="exercise-content">
        <div class="skeleton-title"></div>
        <div class="skeleton-rate"></div>
        <ul class="exercise-info">
          ${[...Array(5)]
            .map(
              () => `
            <li class="skeleton-info-item">
              <div class="skeleton-line"></div>
            </li>
          `
            )
            .join('')}
        </ul>
        <div class="skeleton-description"></div>
        <div class="exercise-buttons">
          <div class="skeleton-button"></div>
          <div class="skeleton-button"></div>
        </div>
      </div>
    </div>
  `;
  }
}
