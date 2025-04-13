import { getExerciseById } from '../services/apiServices.js';
import { addFavouritesToStorage, isFavouritesExercise, removeFavouritesFromStorage } from './favourites.js';

export class ExerciseModal {
  constructor() {
    this.modalOverlay = document.querySelector('.modal-overlay');
    this.modal = document.getElementById('exerciseModal');
    this.modalBody = document.querySelector('.modal-body');
    this.closeBtn = document.querySelector('.modal-close');

    this.exercise = null;
    this.isFavorite = false;

    this.closeBtn.addEventListener('click', () => this.close());
  }

  async open(event) {
    const card = event.target.closest('.workout-card');
    if (!card) return;

    const id = card.dataset.id;

    this.modalOverlay.classList.add('is-open');
    this.modalBody.innerHTML = '<p class="loading">Loading...</p>';

    try {
      this.exercise = await getExerciseById(id);
      this.isFavorite = isFavouritesExercise(this.exercise._id);

      this.render();
      this.addEventListeners();
    } catch (error) {
      console.error(error);
      this.modalBody.innerHTML = '<p class="error">Failed to load exercise. Try again later.</p>';
    }
  }

  close() {
    this.modalOverlay.classList.remove('is-open');
    this.modalBody.innerHTML = '';
  }

  render() {
    this.modalBody.innerHTML = this.createExerciseMarkup();
  }

  addEventListeners() {
    const favoritesBtn = this.modal.querySelector('.favorites-btn');
    const rateBtn = this.modal.querySelector('.rate-btn');

    favoritesBtn.addEventListener('click', () => this.toggleFavorite(favoritesBtn));
    // Тут можеш додати обробку rateBtn
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
        <use href="../img/icons.svg#${this.isFavorite ? 'icon-trash' : 'icon-heart'}"></use>
      </svg>
    `;
  }

  createStars(rating) {
    const fillPercent = (rating / 5) * 100;

    return `
    <div class="rating" style="--fill: ${fillPercent}%;">
      <div class="rating-bg">
        ${[...Array(5)].map(() => `
          <svg class="star" width="18" height="18">
            <use href="../img/icons.svg#icon-Star"></use>
          </svg>
        `).join('')}
      </div>
      <div class="rating-fill">
        ${[...Array(5)].map(() => `
          <svg class="star" width="18" height="18">
            <use href="../img/icons.svg#icon-Star"></use>
          </svg>
        `).join('')}
      </div>
    </div>
  `;
  }

  createExerciseMarkup() {
    const ex = this.exercise;
    return `
      <div class="exercise-details">
        <img src="${ex.gifUrl}" alt="${ex.name}" class="exercise-img">
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
            <button type="button" class="favorites-btn" data-id="${ex._id}">
              <span class="favorites-btn-text">
                ${this.isFavorite ? 'Remove from favorites' : 'Add to favorites'}
              </span>
              <svg class="icon-heart" height="18" width="20">
                <use href="../img/icons.svg#${this.isFavorite ? 'icon-trash' : 'icon-heart'}"></use>
              </svg>
            </button>
          </div>
        </div>
      </div>
    `;
  }
}

// <button type="button" class="rate-btn" data-id="${ex._id}">Give a rating</button>


