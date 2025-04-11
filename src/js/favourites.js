import { Exercise } from "./main-section/main-section";

const TEXT_IF_EMPTY = "It appears that you haven't added any exercises to your favorites yet. To get started, you can add exercises that you like to your favorites for easier access in the future.";
const NAME_OF_STORAGE = 'favourites';
const ID_OF_LIST = 'favourites';

const refs = {
    list: document.getElementById(ID_OF_LIST),
}

function getExercisesFromStorage(name) {
    if (!localStorage) {
        console.error('Local storage is not supported in this browser.');
        return [];
    }
    
    const exercises = localStorage.getItem(name);
    return exercises ? JSON.parse(exercises) : [];
}

function renderList(exercises) {
    if (typeof exercises !== 'object' || !Array.isArray(exercises)) {
        console.error('Invalid exercises data:', exercises);
        renderEmpty();
        return;
    }

    if (exercises.length === 0) {
        renderEmpty();
        return;
    }

    refs.list.innerHTML = exercises.map(Exercise.exerciseMarkup).join('');
}

function renderEmpty() {
    refs.list.innerHTML = `<p class="text">${TEXT_IF_EMPTY}</p>`;
}

document.addEventListener('DOMContentLoaded', () => {
    const exercises = getExercisesFromStorage(NAME_OF_STORAGE);
    renderList(exercises);
});
