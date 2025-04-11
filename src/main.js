import './css/styles.css';
import './js/menu.js';
import './js/header-sticky.js';
import '/js/main-section/quote.js'
import { openExerciseModal } from './js/modal.js';
// NOTE: just sample how to use api methods/show errors
import {
  getExercises,
  getExerciseById,
  updateExerciseRating,
  getFilters,
  getQuoteOfTheDay,
  subscribe
} from './services/apiServices.js';

async function init() {
  const data = await getExercises({ bodypart: 'back' });
  const data2 = await getExerciseById('123123123213');
  await updateExerciseRating(123, { rating: 5 });
  const filtersData = await getFilters({
    filter: 'body parts',
    page: 2,
    limit: 10,
  });

  const quoteData = await getQuoteOfTheDay();
  const subscribeResponse = await subscribe('test@example.com');

  console.log(data, data2, subscribeResponse, quoteData, filtersData)
}

// init();

const openModalButton = document.querySelector('.open-modal');

openModalButton.addEventListener('click', e => {
  // const card = e.target.closest('.exercise-card');
  // if (!card) return;

  // const id = card.dataset.id;
  const id = '64f389465ae26083f39b17ac';

  openExerciseModal(id);
});
