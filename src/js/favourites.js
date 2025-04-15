import { NAME_OF_STORAGE } from './main-section/constants';

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

/**
 * @param {string} name
 * @returns {object} Array of exercises from local storage.
 */
export function getExercisesFromStorage(name) {
  if (!localStorage) {
    console.error('Local storage is not supported in this browser.');
    return {};
  }
  const exercises = localStorage.getItem(name);
  return exercises ? JSON.parse(exercises) : {};
}
