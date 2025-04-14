import { NAME_OF_STORAGE, TEXT_IF_EMPTY } from './main-section/constants';
import Exercise from './main-section/exercise';
import { ExerciseModal } from './modal/exercise-modal';

let modalInstance;
export function isFavouritesExercise(id) {
  const exercises = getExercisesFromStorage(NAME_OF_STORAGE);

  return Boolean(exercises[id]);
}

export function addFavouritesToStorage(data) {
  const exercises = getExercisesFromStorage(NAME_OF_STORAGE);
  exercises[data._id] = data;
  setItemToLocalStorage(NAME_OF_STORAGE, JSON.stringify(exercises));
}

export function removeFavouritesFromStorage(id) {
  const exercises = getExercisesFromStorage(NAME_OF_STORAGE);
  if (exercises.hasOwnProperty(id)) {
    delete exercises[id];
  } else {
    console.warn(`Exercise with id ${id} does not exist in storage.`);
  }
  setItemToLocalStorage(NAME_OF_STORAGE, JSON.stringify(exercises));
}

let setItemToLocalStorage = function (key, value) {
  localStorage.setItem(key, value);
};

const refs = {
  list: document.getElementById('favourites'),
};

/**
 * @param {string} name
 * @returns {object} Array of exercises from local storage.
 */
function getExercisesFromStorage(name) {
  if (!localStorage) {
    console.error('Local storage is not supported in this browser.');
    return {};
  }
  const exercises = localStorage.getItem(name);
  return exercises ? JSON.parse(exercises) : {};
}

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

  list.addEventListener('click', modalInstance.open.bind(modalInstance));
}

function renderEmpty() {
  refs.list.innerHTML = `<p class="text">${TEXT_IF_EMPTY}</p>`;
}

function init() {
  document.addEventListener('DOMContentLoaded', () => {
    renderList();
  });

  document.removeFavourite = function (element) {
    const id = element.closest('[data-id]').dataset.id;
    removeFavouritesFromStorage(id);
    renderList();
  };
}

if (window.location.pathname.includes('favorites.html')) {
  modalInstance = new ExerciseModal();
  setItemToLocalStorage = function (key, value) {
    localStorage.setItem(key, value);

    renderList();
  };

  init();
}
