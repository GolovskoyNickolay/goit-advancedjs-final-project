import './js/menu.js';
import './js/header-sticky.js';
import '/js/main-section/quote.js';

import { NAME_OF_STORAGE, TEXT_IF_EMPTY } from './js/main-section/constants';
import Exercise from './js/main-section/exercise';
import { ExerciseModal } from './js/modal/exercise-modal';
import { getExercisesFromStorage, removeFavouritesFromStorage } from './js/favourites.js';

let modalInstance = new ExerciseModal();

const refs = {
  list: document.getElementById('favourites'),
};

function renderList() {
  const exercisesObj = getExercisesFromStorage(NAME_OF_STORAGE);
  const exercises = Object.values(exercisesObj);

  if (!Array.isArray(exercises)) {
    console.error('Invalid exercises data:', exercises);
    renderEmpty();
    return;
  }

  if (exercises.length === 0) {
    renderEmpty();
    return;
  }

  const list = document.createElement('ul');
  list.classList.add('exercise-list');
  list.innerHTML = exercises
    .map(el => Exercise.exerciseMarkup(el, true))
    .join('');
  refs.list.innerHTML = '';
  refs.list.appendChild(list);

  list.addEventListener('click', event => {
    if (
      event.target.closest('button') &&
      event.target.closest('button').classList.has('workout-remove-btn')
    )
      return;

    modalInstance.open(event);
  });
}

function renderEmpty() {
  refs.list.innerHTML = `<div class="favourites-not-found"><p>${TEXT_IF_EMPTY}</p></div>`;
}

document.addEventListener('DOMContentLoaded', () => {
  renderList();
});

document.removeFavourite = function (element) {
  const id = element.closest('[data-id]').dataset.id;
  removeFavouritesFromStorage(id);
  renderList();
};