import Exercise from './exercise';
import Filter from './filter';
import { ExerciseModal } from '../modal/exercise-modal.js';

async function initMainSection() {
  const modulePagination = await import('./pagination.js');
  const pagination = modulePagination.default;

  const isIndexPage = true;
  const modalInstance = new ExerciseModal();
  const exerciseInstance = new Exercise(isIndexPage, pagination, modalInstance);
  const filterInstance = new Filter(isIndexPage, exerciseInstance, pagination);
  filterInstance.onClick({
    target: document.querySelector('.filters-list .filters-item'),
  });
}

initMainSection();
